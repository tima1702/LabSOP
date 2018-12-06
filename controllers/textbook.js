const Textbook = require('../models/dbModels/textbook');
const { createResponse } = require('../helper/responseHelper');

const textbookActions = ({action, data}, callback) => {
    switch(action) {
        case 'get': {
            getAllTextbook(callback);
            break;
        }
        case 'create': {
            createTextbook(data, callback);
            break;
        }
        case 'update': {
            updateTextbook(data, callback);
            break;
        }
        case 'delete': {
            deleteTextbook(data, callback);
            break;
        }
        default: {
            createResponse(
                {
                    error: {
                        message: `Action ${action} for book is not defined!`
                    }
                }, callback)
        }
    }
};

const getAllTextbook = (callback) => {
    Textbook.find({}, (error, data) => {
        createResponse({error, data}, callback);
    });
};

const createTextbook = (data, callback) => {
    data = JSON.parse(data);
    Textbook.create(data, (error, data) => {
        createResponse({error, data}, callback);
    });
};

const updateTextbook = (textbookData, callback) => {
    textbookData = JSON.parse(textbookData);
    Textbook.findOneAndUpdate({_id: textbookData._id}, textbookData, (error, data) => {
        createResponse({error, data}, callback);
    });
};

const deleteTextbook = (personData, callback) => {
    personData = JSON.parse(personData);
    Textbook.findOneAndDelete({_id: personData._id}, (error, data) => {
        createResponse({error, data}, callback);
    });
};


module.exports = { textbookActions, getAllTextbook, createTextbook, updateTextbook, deleteTextbook };
