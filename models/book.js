const mongoose = require("mongoose");
mongoose.pluralize(null);

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String, required: true },
});

module.exports = mongoose.model("Book", bookSchema);
