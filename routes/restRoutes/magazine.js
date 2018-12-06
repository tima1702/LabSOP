const { getAllMagazine, createMagazine, updateMagazine, deleteMagazine } = require('../../controllers/magazine')

const magazineRoutes = app => {
    app.get('/magazine', (req, res) => {
        getAllMagazine((data) => {
            console.log(data);
            res.send(data);
        });
    });

    app.post('/magazine', (req, res) => {
        const body = req.body;
        createMagazine(JSON.stringify(body), (data) => {
           console.log(data);
           res.send(data);
        });
    });

    app.put('/magazine', (req, res) => {
        const body = req.body;
        updateMagazine(JSON.stringify(body), (data) => {
            console.log(data);
            res.send(data);
        });
    });

    app.delete('/magazine', (req, res) => {
        const body = req.body;
        deleteMagazine(JSON.stringify(body), (data) => {
            console.log(data);
            res.send(data);
        });
    });
}

module.exports = magazineRoutes;
