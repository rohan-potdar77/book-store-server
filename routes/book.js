const express = require("express");
const { addBook, updateBook, getBook, deleteBook } = require("../controllers/book");
const router = express.Router();

router.get("/get-book", getBook);

router.post("/add-book", addBook);

router.put("/update-book/:id", updateBook);

router.delete("/delete-book/:id", deleteBook);

module.exports = router;
