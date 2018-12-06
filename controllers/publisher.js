const { createResponse } = require('../helper/responseHelper');
const Publisher = require('../models/dbModels/publisher');


const publisherActions = ({action, data}, callback) => {
    switch(action) {
        case 'get': {
            getAllPublisher(callback);
            break;
        }
        case 'create': {
            createPublisher(data, callback);
            break;
        }
        case 'update': {
            updatePublisher(data, callback);
            break;
        }
        case 'delete': {
            deletePublisher(data, callback);
            break;
        }
        default: {
            createResponse(
                {
                    error: {
                        message: `Action ${action} for publisher is not defined!`
                    }
                }, callback)
        }
    }
};

const getAllPublisher = (callback) => {
    Publisher.find({}, (error, data) => {
        createResponse({error, data}, callback);
    })
};

const createPublisher = (data, callback) => {
    data = JSON.parse(data);
    Publisher.create(data, (error, data) => {
        createResponse({error, data}, callback);
    });
};

const updatePublisher = (personData, callback) => {
    personData = JSON.parse(personData);
    Publisher.findOneAndUpdate({_id: personData._id}, personData, (error, data) => {
        createResponse({error, data}, callback);
    });
};

const deletePublisher = (personData, callback) => {
    personData = JSON.parse(personData);
    Publisher.findOneAndDelete({_id: personData._id}, (error, data) => {
        createResponse({error, data}, callback);
    });
};

module.exports = { publisherActions, getAllPublisher, createPublisher, updatePublisher, deletePublisher };
