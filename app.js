const express = require("express");
const dotenv = require("dotenv");
const mongoos = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");

const app = express();

dotenv.config();
mongoos
  .connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected!");
  })
  .catch(() => {
    (err) => {
      console.log(err);
    };
  });

app.use(express.json);
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.use(cookieParser(process.env.COOKIE_SECRET));

app.listen(process.env.PORT, () => {
  console.log(`app listening port ${process.env.PORT}`);
});
