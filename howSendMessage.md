База: users_All

- username
- badge
- modelHref
- addTime

База: users\_\${modelName}

- username
- badge
- modelHref
- isFollowed
- isUserSubscribeOnModel
- lastMessage
- lastTimeMessage

База: model_accounts

- name
- login
- password

База: scraping_accounts

- name
- login
- password

База: sexting_greeting

- text
- locale

Идеи:

- не держать в подписках больше 2000 пользователей
- рефакторинг getHtml.js. Раскидать функционал на три файла startPromotion.js, findMembers.js, followUser.js, sendUserMessage.js

## Начать продвижение - (startPromotion.js)

1. Администратор выбирает из перечня модель и присваивает это значение переменной \$modelName.
2. Из базы model_accounts берет значение login и password по полю переменной \$modelName по полю name.
3. Скрипт startPromotion.js входит под учеткой модели. Полученные куки сохраняются в переменную \$cookies.
4. Проверка работы куки. Если браузер заходя на главную страницу получает банер "18+", то возвращается на этап назад. Если банера нет, то продолжает выполнение скрипта
5. Взять из базы users_All до 5 000 пользователей.
6. Внести 1 000 уникальных пользователей в базу users\_\${modelName} с параметром isFollowed = false.
7. Для всех пользователей из базы users\_${modelName} isFollowed = false запустить скрипт подписки на пользователя followUser.js и передать значение $cookies, $modelName, $notFollowedUser с интервалом от 1 до 6 секунд.
8. Получить ответом объект = ["username": $notFollowedUser, "isFollowed": true, "isUserSubscribeOnModel": true].
9. Собрать всех пользователей у которых значение isFollowed = true в переменную \$followedUser.
10. Всем $followedUser пользователям изменить значение isFollowed = false на значение isFollowed = true в базе users_${modelName}.
11. Записать в переменную $listUsersForSend всех пользователей из базы users_${modelName} со значением isFollowed = true и у которых lastTimeMessage больше 1 часа.
12. Из базы sexting_greeting взять рандомное значение sexting_greeting.text.
13. Если значение sexting*greeting.text пусто или равно значению users*${modelName}.lastMessage, то получить другое рандомное значение sexting_greeting.text и записать в $messageForSend
14. Для всех пользователей из переменной $listUsersForSend запустить скрипт отправки сообщений sendUserMessage.js и передать значение $cookies, $modelName, $messageForSend с интервалом от 1 до 6 секунд.
15. В базу users*\${modelName} внести время последней отправки сообщения users*${modelName}.lastTimeMessage и текст последнего сообщения users_${modelName}.lastMessage.

## Сбор пользователей - (findMembers.js)

1. Cron запускает скрипт каждые 30 минут с помощью https://www.npmjs.com/package/node-schedule
2. Скрипт findMembers.js входит под рандомной учеткой обычного пользователя из базы scraping_accounts. Полученные куки сохраняются в переменную \$cookies.
3. Проверка работы куки. Если браузер заходя на главную страницу получает банер "18+", то возвращается на этап назад. Если банера нет, то продолжает выполнение скрипта.
4. Парсим со страницы ссылки на топ стримы и сохраняем в переменную \$streamUrls.
5. Для каждого значения \$streamUrls запускается скрипт getUsername.js для получения ников пользователей. Скрипт запускается с задержкой от 1 до 4 секунд.
6. Полученные пользователи проверяются на уникальности и записываются в базу users_All.

## Подписаться на пользователя - (followUser.js)

1. Получить значение $cookies, $modelName, \$notFollowedUser.
2. Проверка работы куки.
3. Если браузер заходя на страницу https://ru.bongamodels.com/profile/${notFollowedUser} получает банер "18+", то на новой вкладке войти под учеткой модели используя данный из базы model_accounts по значению $modelName. Полученные куки сохранить в переменную $cookies. Если банера нет, то продолжает выполнение скрипта.
4. Проверить текущую подписку. Если модель не подписанна на пользователя, то добавить пользователья в фоловеры. Если уже подписанна, то ничего не делать.
5. Если пользователь подписан на модель, то присвоить значение isUserSubscribeOnModel = true в таблице users\_\${modelName}
6. Ответом вернуть объект = ["username": $notFollowedUser, "isFollowed": true, "isUserSubscribeOnModel": true]

## Отправка сообщения пользователю - (sendUserMessage.js)

1. Получить значение $cookies, $modelName, \$messageForSend
2. Проверка работу куки.
3. Если браузер заходя на страницу https://ru.bongamodels.com/im/all получает банер "18+", то на новой вкладке войти под учеткой модели используя данный из базы model_accounts по значению $modelName. Полученные куки сохранить в переменную $cookies. Если банера нет, то продолжает выполнение скрипта.
4. Отправить сообщению пользователю
