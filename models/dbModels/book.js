const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    publisher: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Publisher'
    },
    author: {
        type: String,
        required: true
    }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
