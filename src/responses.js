const fs = require('fs');

const index = fs.readFileSync(`${__dirname}/../client/client.html`);
const client2 = fs.readFileSync(`${__dirname}/../client/client2.html`);

const style = fs.readFileSync(`${__dirname}/../client/style.css`);


const serveFile = (request, response, content, mimeType) =>{
    response.writeHead(200, {'Content-Type':mimeType});
    response.write(content);
    response.end();
}



const sendPage = (request, response, page) => serveFile(request, response, page, 'text/html');

const getMessage = (request, response) =>  serveFile(request, response, 'Hello World', 'text/plain');

const getCSS = (request, response) =>  serveFile(request, response, style, 'text/css');



const getIndex = (request, response) => {
    sendPage(request, response, index);
    
};

const getClient2 = (request, response) => {
    sendPage(request, response, client2);
    
};

module.exports = {
    getIndex,
    getClient2,
    getMessage,
    getCSS
};