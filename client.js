var soap = require('soap');
var url = 'http://localhost:8000/wsdl?wsdl';

// Create client
soap.createClient(url, function (err, client) {
    if (err) {
        throw err;
    }
    /*
    * Parameters of the service call: they need to be called as specified﻿_id﻿ObjectId("5bbb3731e1104d1139f7145b")﻿ObjectId("5bbb5c4ab41355093674a309")
    * in the WSDL file
    */
    const type = "book",
        action = "get",
        data = JSON.stringify({publisher: "5bbb70475ea4df0f31f413a4", name: "test", author: "test"});
    const args = {
        type, action, data
    };
    // call the service﻿ObjectId("5bbb5745106ea008f8d63534")
    client.MessageSplitter(args, function (err, res) {
        if (err) {
            console.log(err);
            throw err;
        }

        // print the service returned result
        console.log(res);
    });
});