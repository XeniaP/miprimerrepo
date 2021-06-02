var app = require("express")();
const bodyParser = require("body-parser");
var body = require("body-parser");
const { response } = require("express");


app.post("/get", bodyParser.raw({ type: 'application/json'}), (request, response) => {
    var event = request.body

    switch(event.type){
        case 'ping':
            console.log("PING")
            break;
        default:
            console.log("default")
    }

    response.json({ received: true });
});

app.listen(8000, () => console.log("Running port 8000"));
