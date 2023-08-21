const express = require("express");
require("dotenv").config();
const connectDB = require("./config/db");
const app = express();
const port = 3000;

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/animals", require("./routes/animal.routes"));

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
