const mongoose = require("mongoose");

// Map global promises
mongoose.Promise = global.Promise;
// Mongoose Connect
mongoose
  .connect(
    "mongodb://zainkhan2504:zainkhan2504@ds135714.mlab.com:35714/voteos",
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));
