const { getAllPublisher, createPublisher, updatePublisher, deletePublisher } = require('../../controllers/publisher')

const publisherRoutes = app => {
    app.get('/publisher', (req, res) => {
        getAllPublisher((data) => {
            console.log(data);
            res.send(data);
        });
    });

    app.post('/publisher', (req, res) => {
        const body = req.body;
        createPublisher(JSON.stringify(body), (data) => {
           console.log(data);
           res.send(data);
        });
    });

    app.put('/publisher', (req, res) => {
        const body = req.body;
        updatePublisher(JSON.stringify(body), (data) => {
            console.log(data);
            res.send(data);
        });
    });

    app.delete('/publisher', (req, res) => {
        const body = req.body;
        deletePublisher(JSON.stringify(body), (data) => {
            console.log(data);
            res.send(data);
        });
    });
}

module.exports = publisherRoutes;
