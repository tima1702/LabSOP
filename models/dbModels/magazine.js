const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const magazineSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    publisher: {
        type: Schema.Types.ObjectId,
        required: true
    },
    publicationFrequency: {
        type: String,
        enum: ['Week', 'Day', 'Month'],
        required: true
    }
});

const Magazine = mongoose.model('Magazine', magazineSchema);

module.exports = Magazine;
