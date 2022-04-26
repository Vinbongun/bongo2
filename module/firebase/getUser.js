var firebase = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL:
    "https://joi-studio-default-rtdb.europe-west1.firebasedatabase.app",
});

module.exports = async function getUser(users) {
  //Взять из базы
  for (let index = 0; index < users.length; index++) {
    const name = users[index].username;
    firebase
      .database()
      .ref("users_All/" + name)
      .on("value", (snapshot) => {
        console.log("Username: " + name);
        // console.log(snapshot.val());
        console.log("Время добавления " + new Date(snapshot.val().addDate));
      });
  }
};
