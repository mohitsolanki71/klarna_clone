const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://mohit:mohit@cluster0.vkgrd.mongodb.net/Products"
  );
};
