// firebaseAdmin.js
const admin = require("firebase-admin");
const dotenv = require("dotenv");
const fs = require("fs");

dotenv.config();

const serviceAccount = JSON.parse(fs.readFileSync(process.env.SERVICE_ACCOUNT));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin.auth();
