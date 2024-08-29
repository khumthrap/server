const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
    // Set the response headers
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // Write the response content
    res.write('<h1>Hello, Node.js HTTP Server!</h1>');
    res.end();
});

// Specify the port to listen on
const port = 9001;

// Start the server
server.listen(port, () => {
    console.log(`Node.js HTTP server is running on port ${port}`);
});
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Hello, Express.js Server!</h1>');
});

const PORT = process.env.PORT || 3000; // You can use environment variables for port configuration
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
// Include route files
const usersRoute = require('./routes/users');
const productsRoute = require('./routes/products');

// Use routes
app.use('/users', usersRoute);
app.use('products', productsRoute);


