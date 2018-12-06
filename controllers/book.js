const Book = require('../models/dbModels/book');
const { createResponse } = require('../helper/responseHelper');

const bookActions = ({action, data}, callback) => {
    switch(action) {
        case 'get': {
            getAllBook(callback);
            break;
        }
        case 'create': {
            createBook(data, callback);
            break;
        }
        case 'update': {
            updateBook(data, callback);
            break;
        }
        case 'delete': {
            deleteBook(data, callback);
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

const getAllBook = (callback) => {
    Book.find({})
        .populate('publisher')
        .exec((error, data) => {
            createResponse({error, data}, callback);
        });
};

const createBook = (data, callback) => {
    data = JSON.parse(data);
    Book.create(data, (error, data) => {
        createResponse({error, data}, callback);
    });
};

const updateBook = (bookData, callback) => {
    bookData = JSON.parse(bookData);
    Book.findOneAndUpdate({_id: bookData._id}, bookData, (error, data) => {
        createResponse({error, data}, callback);
    });
};

const deleteBook = (personData, callback) => {
    personData = JSON.parse(personData);
    Book.findOneAndDelete({_id: personData._id}, (error, data) => {
        createResponse({error, data}, callback);
    });
};

module.exports =  { bookActions , getAllBook, createBook, updateBook, deleteBook };
