const express = require("express");
const bodyParser = require("body-parser");
const multer = require('multer')
const route = require("./routes/route.js");
const { default: mongoose } = require("mongoose");
const app = express();

app.use(bodyParser.json());
app.use(multer().any())
app.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect("mongodb+srv://amanmahto:anuragf45@bloggingwebsite.t7a0mo0.mongodb.net/group29Database?retryWrites=true&w=majority",
    {useNewUrlParser: true}
)
.then(() => console.log("MongoDb is connected"))
.catch((err) => console.log(err));

app.use("/", route);

app.listen(process.env.PORT || 3001, function () {
  console.log("Express app running on port " + (process.env.PORT || 3001));
});
