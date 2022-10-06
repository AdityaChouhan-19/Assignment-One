const app = require('./config/express');

// const http = require('http');
// const { hostname } = require('os');

// const PORT = process.env.PORT || 3000;

// const server = http.createServer((req, res) => { 
//     res.statusCode = 200;
//     res.render('./config/express')
//     res.end
// });

// server.listen(PORT, hostname, function(){
//     console.log('Listening on port ', PORT);
// });

app.listen(process.env.PORT || 3000);

