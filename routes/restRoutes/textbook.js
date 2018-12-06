const { getAllTextbook, createTextbook, updateTextbook, deleteTextbook } = require('../../controllers/textbook')

const textbookRoutes = app => {
    app.get('/textbook', (req, res) => {
        getAllTextbook((data) => {
            console.log(data);
            res.send(data);
        });
    });

    app.post('/textbook', (req, res) => {
        const body = req.body;
        createTextbook(JSON.stringify(body), (data) => {
           console.log(data);
           res.send(data);
        });
    });

    app.put('/textbook', (req, res) => {
        const body = req.body;
        updateTextbook(JSON.stringify(body), (data) => {
            console.log(data);
            res.send(data);
        });
    });

    app.delete('/textbook', (req, res) => {
        const body = req.body;
        deleteTextbook(JSON.stringify(body), (data) => {
            console.log(data);
            res.send(data);
        });
    });
}

module.exports = textbookRoutes;
