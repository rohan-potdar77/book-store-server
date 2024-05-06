const mongoose = require("mongoose");

const connection = mongoose
  .connect(
    "mongodb+srv://rohanpotdar77:Dqawds2daB8u0Jzy@rohandb.ggziqrg.mongodb.net/BookStore?retryWrites=true&w=majorityx"
  )
  .then(
    () => console.info("connected to database"),
    () => console.info("database connection failed")
  )
  .catch((error) => console.error(error));

module.exports = (req, res, next) => {
  req.dbConnection = connection;
  next();
};
