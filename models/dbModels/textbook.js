const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const textbookSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    publisher: {
        type: Schema.Types.ObjectId,
        required: true
    },
    author: {
        type: [String],
        required: true
    }
});

const Textbook = mongoose.model('Textbook', textbookSchema);

module.exports = Textbook;
