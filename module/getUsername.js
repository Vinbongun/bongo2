const cheerio = require('cheerio');

module.exports = async function getUsername(content){
const $ = cheerio.load(content);

  const result = []

    $('.user_item').each((idx, elem) => {
        
        const userName = $(elem).find('dfn').text()
        const badge = $(elem).attr('class').split(' ')[6]
        const modelHref = $('#bChatRoomTitle').text()  //Имя модели, источник username      
        
        result.push({
            username: userName, 
            badge: badge,
            modelHref: modelHref
        })
    })
  const clearResult = result.slice(1) //Удаление первого значения (имя модели, как username)
  clearResult.pop() //Удаление колл-ва людей в чате
  return clearResult
}
