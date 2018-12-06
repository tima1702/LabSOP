const mongoose = require('mongoose');

const Book = require('./book');
const Magazine = require('./magazine');
const Textbook = require('./textbook');

const Schema = mongoose.Schema;

const publisherSchema = new Schema({
    name: {
        type: String,
        required: true
    }
});

publisherSchema.post('findOneAndDelete', async ({name, _id}) => {
    console.log(`Remove Book for : ${name}`);
    await Book.remove({publisher: _id});
    console.log(`Remove Magazine for : ${name}`);
    await Magazine.remove({publisher: _id})
    console.log(`Remove Textbook for : ${name}`);
    await Textbook.remove({publisher: _id})
});

const Publisher = mongoose.model('Publisher', publisherSchema);

module.exports = Publisher;
