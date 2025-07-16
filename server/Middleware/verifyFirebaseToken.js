// middleware/verifyFirebaseToken.js
const adminAuth = require("../firebaseAdmin");

function verifyFirebaseToken(req, res, next) {
  const authHeader = req.headers.authorization || "";
  const token = authHeader.split(" ")[1]; // Expect "Bearer <token>"

  if (!token) {
    return res.status(401).json({ msg: "No token provided" });
  }

  adminAuth
    .verifyIdToken(token)
    .then((decodedToken) => {
      req.user = decodedToken; // uid, email, etc.
      next();
    })
    .catch((err) => {
      console.error("Token verification failed:", err.message);
      res.status(401).json({ msg: "Unauthorized" });
    });
}

module.exports = verifyFirebaseToken;
