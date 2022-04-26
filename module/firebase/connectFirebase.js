var firebase = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL:
    "https://joi-studio-default-rtdb.europe-west1.firebasedatabase.app",
});

var db = firebase.database();
var ref = db.ref("users/");

const array = ["Knightboss", "homar64", "Mozzio", "Peter"];
const badge = "member_platinum";

//Добавить в базу
for (let index = 0; index < array.length; index++) {
  const name = array[index];
  firebase
    .database()
    .ref("users/" + name)
    .set({ name: name, badge: badge });
}

//Взять из базы
for (let index = 0; index < array.length; index++) {
  const name = array[index];
  firebase
    .database()
    .ref("users/" + name)
    .on("value", (snapshot) => {
      console.log(name);
      console.log(snapshot.val());
    });
}

//Обновить данные
firebase
  .database()
  .ref("users/" + array[0])
  .update({ badge: "free" });

// Удалить данные
firebase
  .database()
  .ref("users/" + array[1])
  .remove();

// usersRef.set({ name: "andy", fullname: "lossd" });
