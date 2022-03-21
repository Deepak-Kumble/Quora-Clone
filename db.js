const mongoose = require("mongoose");
require("dotenv").config();

const url =
  "mongodb+srv://Deepak22:Abcxyz07@cluster0.ngumb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

module.exports.connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB connected successfully");
    })
    .catch((error) => console.log("Error: ", error));
};
