const soap = require('soap');
const fs = require('fs');
const cors = require('cors')
const soapRoutes = require('./routes/soapRoutes');
const xml = fs.readFileSync('service.wsdl', 'utf8');
const port = 8000;

function soapFunction({ type, action, data}, cb) {
    soapRoutes({data, type, action}, cb);
}

const serviceObject = {
    MessageSplitterService: {
        MessageSplitterServiceSoapPort: {
            MessageSplitter: soapFunction
        },
        MessageSplitterServiceSoap12Port: {
            MessageSplitter: soapFunction
        }
    }
};

const soapServer = (app) => {
    app.use(cors());

    app.get('/', function (req, res) {
        res.send('Node Soap server!');
    });


    app.listen(port, function () {
        console.log('Listening on port ' + port);
        const wsdl_path = "/wsdl";
        soap.listen(app, wsdl_path, serviceObject, xml);
        console.log("Check http://localhost:" + port + wsdl_path + "?wsdl to see if the service is working");
    });
};

module.exports = soapServer;

