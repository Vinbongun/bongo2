var firebase = require("firebase-admin");
var serviceAccount = require("./serviceAccountKey.json");

module.exports = async function saveUser(users) {
  firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL:
      "https://joi-studio-default-rtdb.europe-west1.firebasedatabase.app",
  });

  //Добавить пользователя в базу
  for (let index = 0; index < users.length; index++) {
    const name = users[index].username;
    // Дата в формате UNIX
    const unixDate = new Date();
    // console.log(unixDate.getTime());

    // Дата в формате 2022-04-21T20:21:10.378Z или Wed Oct 18 2017 12:41:34 GMT+0000 (UTC)
    const epochTime = new Date(unixDate);
    // console.log(epochTime);

    firebase
      .database()
      .ref("users_All/" + name)
      .set({
        badge: users[index].badge,
        modelHref: users[index].modelHref,
        addDate: unixDate.getTime(),
      });
  }
  return console.log("Пользователи сохранены в базу");
};
