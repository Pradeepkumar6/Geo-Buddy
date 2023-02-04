const mongoose = require("mongoose");

mongoose
//mongodb+srv://pradeep:<password>@cluster0.rlwsk.mongodb.net/?retryWrites=true&w=majority
  .connect("mongodb+srv://pradeep:hfrCXKprg9232B6L@cluster0.rlwsk.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Database Connected Successfully!");
  })
  .catch((e) => {
    console.log("Error in Database Connection " + e);
  });
