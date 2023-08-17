const http = require('http');
const path = require('path');
const fs = require('fs');
const PORT = process.env.PORT || 8080;

const server = http.createServer(async (req, res) => {

    if (req.method === 'GET' && req.url === '/api/manifest.json') {
        const filePath = path.join(__dirname, 'manifest.json');
        const data = fs.readFileSync(filePath);
        res.setHeader('Content-Type', 'application/json');

        // Configuración de encabezados CORS
        res.setHeader('Access-Control-Allow-Origin', '*'); // Permitir cualquier origen
        res.setHeader('Access-Control-Allow-Methods', 'GET'); // Métodos permitidos
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // Cabeceras permitidas

        res.statusCode = 200;
        res.end(data);
    } else {
        res.statusCode = 404;
        res.end('Not Found');
    }
});

server.listen(PORT, () => {
    console.log(`server started on port: ${PORT}`);
});
