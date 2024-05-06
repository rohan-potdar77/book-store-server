const book = require("../models/book");

const addBook = async (req, res, next) => {
  try {
    const { title, author, genre } = req.body;
    const createdBook = await book.create({ title, author, genre });
    if (createdBook) return res.status(200).json("book added!");
    else return res.status(500).json("error adding book!");
  } catch (error) {
    console.error(error);
    return res.status(500).json("error occured while adding book!");
  }
};

const getBook = async (req, res, next) => {
  try {
    const books = await book.find();
    res.status(200).json(books);
  } catch (error) {
    console.error(error);
    return res.status(500).json("error occured while getting books!");
  }
};

const updateBook = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, author, genre } = req.body;

    const updatedBook = await book.findByIdAndUpdate(
      id,
      { title, author, genre },
      { new: true }
    );

    if (!updatedBook) {
      return res.status(404).json("book not found!");
    }

    return res.status(200).json("book updated successfully!");
  } catch (error) {
    console.error(error);
    return res.status(500).json("error occurred while updating book!");
  }
};

const deleteBook = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedBook = await book.findByIdAndDelete(id);

    if (!deletedBook) {
      return res.status(404).json("book not found!");
    }

    return res.status(200).json("book deleted!");
  } catch (error) {
    console.error(error);
    return res.status(500).json("error occurred while deleting book!");
  }
};

module.exports = { addBook, getBook, updateBook, deleteBook };
