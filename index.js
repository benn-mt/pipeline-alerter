'use strict';
    
exports.handler = function(event, context, callback) {
    if (event.body) {
        event = JSON.parse(event.body);
    }

    var sc = 200; // Status code
    var result = {
        "text": "Hello world!"
    };

    const response = {
        statusCode: sc,
        headers: { "Content-type": "application/json" },
        body: JSON.stringify( result )
    };

    callback(null, response);
};