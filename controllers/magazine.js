const Magazine = require('../models/dbModels/magazine');
const { createResponse } = require('../helper/responseHelper');

const magazineActions = ({action, data}, callback) => {
    switch(action) {
        case 'get': {
            getAllMagazine(callback);
            break;
        }
        case 'create': {
            createMagazine(data, callback);
            break;
        }
        case 'update': {
            updateMagazine(data, callback);
            break;
        }
        case 'delete': {
            deleteMagazine(data, callback);
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

const getAllMagazine = (callback) => {
    Magazine.find({}, (error, data) => {
        createResponse({error, data}, callback);
    });
};

const createMagazine = (data, callback) => {
    data = JSON.parse(data);
    Magazine.create(data, (error, data) => {
        createResponse({error, data}, callback);
    });
};

const updateMagazine = (bookData, callback) => {
    bookData = JSON.parse(bookData);
    Magazine.findOneAndUpdate({_id: bookData._id}, bookData, (error, data) => {
        createResponse({error, data}, callback);
    });
};

const deleteMagazine = (personData, callback) => {
    personData = JSON.parse(personData);
    Magazine.findOneAndDelete({_id: personData._id}, (error, data) => {
        createResponse({error, data}, callback);
    });
};


module.exports =  { magazineActions, getAllMagazine, createMagazine, updateMagazine, deleteMagazine };
