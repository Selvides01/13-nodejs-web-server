const http = require('http');
const fs = require('fs');

const port = 3000;

const renderHTML = (path, res) => {
    fs.readFile(path, (err, data) => {
        if (err) {
            res.writeHead(404);
            res.write('Error: file not found');
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
        }
        res.end();
    });
};

http.createServer((req, res) => {
    const url = req.url;

    switch (url) {
        case '/about':
            renderHTML('./about.html', res); 
            break;
        case '/contact':
            renderHTML('./contact.html', res); 
            break;
        default:
            renderHTML('./index.html', res); 
            break;
    }
}).listen(port, () => {
    console.log(`Server is listening on port ${port}..`);
});
