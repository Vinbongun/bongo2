const deleteDublicateJson = require("./module/json_edit/deleteDublicateJson");
const getTopModels = require("./module/find_users/getTopModels");
const getUsername = require("./module/find_users/getUsername");
const puppeteer = require("puppeteer");

const url = "https://rt.bongacams26.com";

const cookies = [
  {
    domain: ".bongacams26.com",
    expirationDate: 1681639787.597005,
    hostOnly: false,
    httpOnly: false,
    name: "__dbuh",
    path: "/",
    sameSite: "no_restriction",
    secure: true,
    session: false,
    storeId: "0",
    value:
      "eyJoIjoiYTA0ZDkxNzkwMzdlOGU1YTFlYjE0NjRlMzA3ZGEwZWMiLCJkIjoidmluYm9uZ3VuIiwibCI6IjIwMjItMDQtMTYgMTM6MDk6NTAifQ==",
    id: 1,
  },
  {
    domain: ".bongacams26.com",
    expirationDate: 1681639787.596988,
    hostOnly: false,
    httpOnly: false,
    name: "__dbuhf",
    path: "/",
    sameSite: "no_restriction",
    secure: true,
    session: false,
    storeId: "0",
    value: "2022-04-16",
    id: 2,
  },
  {
    domain: ".bongacams26.com",
    expirationDate: 1661685699.690751,
    hostOnly: false,
    httpOnly: true,
    name: "BONGA_REF",
    path: "/",
    sameSite: "unspecified",
    secure: false,
    session: false,
    storeId: "0",
    value: "https%3A%2F%2Fnl.bongacams.com%2F",
    id: 3,
  },
  {
    domain: ".bongacams26.com",
    hostOnly: false,
    httpOnly: true,
    name: "bonga20120608",
    path: "/",
    sameSite: "no_restriction",
    secure: true,
    session: true,
    storeId: "0",
    value: "595e901c6f3926c142507301a6bc82fb",
    id: 4,
  },
  {
    domain: ".bongacams26.com",
    expirationDate: 1677757863.140891,
    hostOnly: false,
    httpOnly: false,
    name: "csi_v1",
    path: "/",
    sameSite: "unspecified",
    secure: false,
    session: false,
    storeId: "0",
    value: "2",
    id: 5,
  },
  {
    domain: ".bongacams26.com",
    expirationDate: 1677565643.863614,
    hostOnly: false,
    httpOnly: false,
    name: "fv",
    path: "/",
    sameSite: "unspecified",
    secure: false,
    session: false,
    storeId: "0",
    value: "ZmD2BGVjAwD2ZD==",
    id: 6,
  },
  {
    domain: ".bongacams26.com",
    hostOnly: false,
    httpOnly: false,
    name: "itpl",
    path: "/",
    sameSite: "unspecified",
    secure: false,
    session: true,
    storeId: "0",
    value: "0",
    id: 7,
  },
  {
    domain: ".bongacams26.com",
    expirationDate: 1681673629,
    hostOnly: false,
    httpOnly: false,
    name: "ls01",
    path: "/",
    sameSite: "unspecified",
    secure: false,
    session: false,
    storeId: "0",
    value:
      "%7B%22sorting%22%3A%22popular%22%2C%22display%22%3A%22medium%22%2C%22th_type%22%3A%22live%22%2C%22pager_limit%22%3A56%7D",
    id: 8,
  },
  {
    domain: ".bongacams26.com",
    expirationDate: 1650563559,
    hostOnly: false,
    httpOnly: false,
    name: "pna",
    path: "/",
    sameSite: "unspecified",
    secure: false,
    session: false,
    storeId: "0",
    value: "1650563559080",
    id: 9,
  },
  {
    domain: ".bongacams26.com",
    expirationDate: 1677565643.863656,
    hostOnly: false,
    httpOnly: false,
    name: "reg_ver2",
    path: "/",
    sameSite: "unspecified",
    secure: false,
    session: false,
    storeId: "0",
    value: "3",
    id: 10,
  },
  {
    domain: ".bongacams26.com",
    hostOnly: false,
    httpOnly: false,
    name: "s83axhts7s",
    path: "/",
    sameSite: "unspecified",
    secure: false,
    session: true,
    storeId: "0",
    value: "1762719688",
    id: 11,
  },
  {
    domain: ".bongacams26.com",
    expirationDate: 1677565643.863676,
    hostOnly: false,
    httpOnly: false,
    name: "sg",
    path: "/",
    sameSite: "no_restriction",
    secure: true,
    session: false,
    storeId: "0",
    value: "243",
    id: 12,
  },
  {
    domain: ".bongacams26.com",
    expirationDate: 1666115256.066094,
    hostOnly: false,
    httpOnly: false,
    name: "sip",
    path: "/",
    sameSite: "unspecified",
    secure: false,
    session: false,
    storeId: "0",
    value:
      "%5B%22vinbongun%22%2C%22vinbongun%22%2C%22%5C%2F%5C%2Fi.bcicdn.com%5C%2Fimages%5C%2Favatars%5C%2F17%5C%2Favatar120x120.jpg%22%5D",
    id: 13,
  },
  {
    domain: ".bongacams26.com",
    expirationDate: 1682099258.939976,
    hostOnly: false,
    httpOnly: false,
    name: "ts_type2",
    path: "/",
    sameSite: "unspecified",
    secure: false,
    session: false,
    storeId: "0",
    value: "1",
    id: 14,
  },
  {
    domain: ".bongacams26.com",
    expirationDate: 1677565643.863634,
    hostOnly: false,
    httpOnly: false,
    name: "uh",
    path: "/",
    sameSite: "unspecified",
    secure: false,
    session: false,
    storeId: "0",
    value: "oacOA2SmHx1yMKqhFx1VMQqcnRD5FN==",
    id: 15,
  },
  {
    domain: ".bongacams26.com",
    expirationDate: 1677565643.863697,
    hostOnly: false,
    httpOnly: false,
    name: "warning18",
    path: "/",
    sameSite: "no_restriction",
    secure: true,
    session: false,
    storeId: "0",
    value: "%5B%22ru_RU%22%5D",
    id: 16,
  },
  {
    domain: "rt.bongacams26.com",
    expirationDate: 1650708598,
    hostOnly: true,
    httpOnly: false,
    name: "a10t",
    path: "/",
    sameSite: "unspecified",
    secure: false,
    session: false,
    storeId: "0",
    value: "1",
    id: 17,
  },
  {
    domain: "rt.bongacams26.com",
    expirationDate: 1653998281,
    hostOnly: true,
    httpOnly: false,
    name: "pnd",
    path: "/",
    sameSite: "unspecified",
    secure: false,
    session: false,
    storeId: "0",
    value: "1",
    id: 18,
  },
];

const getHtml = async function (url, cookies, isSelectAllUsers) {
  const minimal_args = [
    "--autoplay-policy=user-gesture-required",
    "--disable-background-networking",
    "--disable-background-timer-throttling",
    "--disable-backgrounding-occluded-windows",
    "--disable-breakpad",
    "--disable-client-side-phishing-detection",
    "--disable-component-update",
    "--disable-default-apps",
    "--disable-dev-shm-usage",
    "--disable-domain-reliability",
    "--disable-extensions",
    "--disable-features=AudioServiceOutOfProcess",
    "--disable-hang-monitor",
    "--disable-ipc-flooding-protection",
    "--disable-notifications",
    "--disable-offer-store-unmasked-wallet-cards",
    "--disable-popup-blocking",
    "--disable-print-preview",
    "--disable-prompt-on-repost",
    "--disable-renderer-backgrounding",
    "--disable-setuid-sandbox",
    "--disable-speech-api",
    "--disable-sync",
    "--hide-scrollbars",
    "--ignore-gpu-blacklist",
    "--metrics-recording-only",
    "--mute-audio",
    "--no-default-browser-check",
    "--no-first-run",
    "--no-pings",
    "--no-sandbox",
    "--no-zygote",
    "--password-store=basic",
    "--use-gl=swiftshader",
    "--use-mock-keychain",
  ];

  const browser = await puppeteer.launch({
    /**
     * Применим стандартный режим без пользовательского интерфейса (окно браузера не видно).
     */
    // devtools: true,
    headless: false,
    args: minimal_args,
  });

  const page = await browser.newPage();

  //Блокировка загрузки фото
  await page.setRequestInterception(true);
  page.on("request", (interceptedRequest) => {
    if (interceptedRequest.isInterceptResolutionHandled()) return;
    if (
      interceptedRequest.url().endsWith(".png") ||
      interceptedRequest.url().endsWith(".webp") ||
      interceptedRequest.url().endsWith(".svg") ||
      interceptedRequest.url().endsWith(".ts") ||
      interceptedRequest.url().endsWith(".m3u8") ||
      interceptedRequest.url().endsWith(".mp4") ||
      interceptedRequest.url().endsWith(".jpg")
    )
      interceptedRequest.abort();
    else interceptedRequest.continue();
  });

  await page.setViewport({ width: 0, height: 0 });

  await page.setCookie(...cookies);
  const cookiesSet = await page.cookies(url);

  await page.goto(url);
  // await page.waitForTimeout(500);

  await Promise.all([await page.waitForSelector(".history")]);
  //https://rt.bongacams26.com/danihothothot
  const [bannedByModel] = await page.$x(
    "//div[contains(., 'Вы были забанены в чате')]"
  );
  if (bannedByModel) {
    console.log("Модель забанила");
    return;
  }

  if (isSelectAllUsers) {
    //Открывает вкладку со списком пользователей
    await Promise.all([await page.waitForSelector("#bTabUsers")]);
    await Promise.all([await page.click("#bTabUsers")]);
    await page.waitForTimeout(1000);

    //Раскрываем весь список пользователей
    await Promise.all([await page.waitForSelector(".more_users")]);
    await Promise.all([await page.click(".more_users")]);

    // await page.waitForTimeout(1000);
  }

  const content = await page.content();

  browser.close();
  return content;
};

// Список мембров на стриме
// getHtml("https://rt.bongacams26.com/-Ange1ok-/", true, true).then(content => {
//     return getUsername(content)
//     }).then(result => {
//         console.log(result)
// })

// Ссылки на стримы с первой страницы
// getHtml(url, true, false, false).then(content => {
//             return getTopModels(content, url)
//         }).then(result => {
//             console.log(result)
// })

const start = async function (howManyUrls) {
  try {
    const allMembers = [];
    const mainPageHtml = await getHtml(url, cookies); //Получить html главной страницы сайта

    //Спарсить ссылки с главной страницы на стримы.
    const streamUrls = await getTopModels(mainPageHtml, url).then((results) => {
      var foo = [];
      //Оставить список из первых 10 ссылок на топ трансляций
      for (var i = 1; i <= howManyUrls; i++) {
        foo.push(results[i]);
      }
      return foo;
    });

    console.log(`Всего ссылок с трансляциями: ${streamUrls.length}`);

    for (const [i, value] of streamUrls.entries()) {
      const streamPageHtml = await getHtml(value.href, cookies, true); //Получить html страницы трансляции
      const members = await getUsername(streamPageHtml); // Список пользователей на трянсляции
      allMembers.push(members);
      console.log(
        "Обработана страница № " + (i + 1) + " из " + streamUrls.length
      );
    }

    //Объединить всех пользователей в один массив
    const allMembersConcat = [].concat(...allMembers);

    //Удалить дубли пользователей в массиве
    const result = await deleteDublicateJson(allMembersConcat);

    //Сохранить список пользователей в username.json
    // saveJson(result, "username");

    // saveUser(result);
  } catch (e) {
    (e) => {
      console.log(e);
    };
  }
};

// Получить список пользователей с 10 стримов
start(70);
