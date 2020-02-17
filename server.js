// Get dependencies
const express = require('express');
const request = require('request');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const proxy = require('express-http-proxy');
const cors = require('cors');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/api/v1/quizes', (req, res) => {
  request(
    { url: 'http://colorcrayontipbackend.ryannewbold.com' },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: err.message });
      }

      res.json(JSON.parse(body));
    }
  )
});

// Parsers for POST data
app.use(bodyParser.json({limit: '20mb'}));
app.use(bodyParser.urlencoded({ extended: false, limit: '20mb' }));

app.use(cors());



// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist/cctFrontDec8th2019')));

// Set our api routes proxy to point to spring boot server
app.use('http://colorcrayontip.ryannewbold.com/server', proxy('http://colorcrayontipbackend.ryannewbold.com'));

app.use('/server', proxy('http://colorcrayontipbackend.ryannewbold.com'));

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/cctFrontDec8th2019/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
 const port = (process.env.PORT || '4200');
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on ${port}`));