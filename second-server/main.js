"use strict";
const port = 3000
const getJSONString = obj => {
    return JSON.stringify(obj, null ,2);
},
http = require("http"),
httpStatus = require("http-status-codes"),
app = http.createServer();

app.on("request", (req, res) => {
    var body = [];
    req.on("data", (chunk) => {
        body.push(chunk);
    });
    req.on("end", () => {
        body = Buffer.concat(body).toString();
        console.log(`Request Body Contents: ${body}`);
    });

    console.log(`Method: ${getJSONString(req.method)}`);
    console.log(`URL: ${getJSONString(req.url)}`);
    console.log(`Headers: ${getJSONString(req.headers)}`);

    res.writeHead(httpStatus.OK, {
        "Content-Type": "text/html"
    })


    let responseMessage = "<h1>Nango omera!</h1>";
    res.end(responseMessage);
});

app.listen(port);
console.log(`The server has started and is listening on port: ${port}`);



