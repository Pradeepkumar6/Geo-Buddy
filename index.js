const express = require("express");
//const dotenv = require("dotenv");
const app = express();
const pinRoute = require("./routes/pins");
const userRoute = require("./routes/user");
const cors = require("cors");
app.use(express.json());
app.use(cors());
app.use("/api/pins", pinRoute);
app.use("/api/user", userRoute);

//dotenv.config();
require("./db/mongo");

app.listen(2000, () => {
  console.log("Server is running on port " + 2000);
});
//Testing user