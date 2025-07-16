const mongoose = require("mongoose");

const connection = async () => {
  try {
    let aa = await mongoose
      .connect(
        process.env.MONGODB_URI,
        { dbName: "deploy" }
      )
      .then(() => {
        console.log("mongoDb connected successfully");
      });
  } catch (error) {
    console.log(" error", error);
  }
};

module.exports = connection;
