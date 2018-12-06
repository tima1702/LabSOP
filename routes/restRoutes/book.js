const { getAllBook, createBook, updateBook, deleteBook } = require('../../controllers/book')

const bookRoutes = app => {
    app.get('/book', (req, res) => {
        getAllBook((data) => {
            console.log(data);
            res.send(data);
        });
    });

    app.post('/book', (req, res) => {
        const body = req.body;
        createBook(JSON.stringify(body), (data) => {
           console.log(data);
           res.send(data);
        });
    });

    app.put('/book', (req, res) => {
        const body = req.body;
        updateBook(JSON.stringify(body), (data) => {
            console.log(data);
            res.send(data);
        });
    });

    app.delete('/book', (req, res) => {
        const body = req.body;
        deleteBook(JSON.stringify(body), (data) => {
            console.log(data);
            res.send(data);
        });
    });
}

module.exports = bookRoutes;