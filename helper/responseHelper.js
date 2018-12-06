const createResponse = ({data, error}, callback) => {
    if (error) {
        callback(JSON.stringify({error, success: false}));
    } else {
        callback(JSON.stringify({data, success: true}));
    }
};

module.exports = {
    createResponse
};
