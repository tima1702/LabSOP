const bookRoutes = require('./book');
const textbookRoutes = require('./textbook');
const magazineRoutes = require('./magazine');
const publisherRoutes = require('./publisher');

const restRoutes = app => {
    bookRoutes(app);
    textbookRoutes(app);
    magazineRoutes(app);
    publisherRoutes(app);
};

module.exports = restRoutes;
