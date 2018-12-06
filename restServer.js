const cors = require('cors')
const bodyParser = require("body-parser");


const appServer = (app) => {
    app.use(bodyParser.json());
    app.use(cors());

    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.get('/', function (req, res) {
        res.send('Node RestAPI Example!');
    });

    require('./routes/restRoutes')(app);

    const port = 8001;

    app.listen(port, function () {
        console.log('Rest server listening on port ' + port);
    });
}

module.exports = appServer;
