
var admin = require("firebase-admin");

var serviceAccount = require("../pinbird-server-firebase-adminsdk-ghpie-c9e83f2d15.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
module.exports = { admin, db };