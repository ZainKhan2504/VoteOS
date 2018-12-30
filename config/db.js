const mongoose = require("mongoose");

// Map global promises
mongoose.Promise = global.Promise;
// Mongoose Connect
mongoose
  .connect(
    "mongodb+srv://zainkhan:zainkhan25@voteos-cluster-gl5ej.mongodb.net/test?retryWrites=true",
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));
