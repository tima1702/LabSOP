const { bookActions } = require('../controllers/book');
const { publisherActions } = require('../controllers/publisher');
const { textbookActions } = require('../controllers/textbook');
const { magazineActions } = require('../controllers/magazine');
const { createResponse } = require('../helper/responseHelper');

const soapRoutes = ({data, type, action}, callback) => {
    switch(type) {
        case 'book': {
            bookActions({data, action}, callback);
            break;
        }
        case 'publisher': {
            publisherActions({data, action}, callback);
            break;
        }
        case 'textbook': {
            textbookActions({data, action}, callback);
            break;
        }
        case 'magazine': {
            magazineActions({data, action}, callback);
            break;
        }
        default: {
            createResponse(
                {
                    error: {
                        message: `Type ${type} is not defined!`
                    }
                }, callback);
        }
    }
};

module.exports = soapRoutes;
