import { environment } from "environments/environment";
// Get dependencies
const express = require("express");
const path = require("path");
const http = require("http");
const bodyParser = require("body-parser");
const proxy = require("express-http-proxy");
const cors = require("cors");

const app = express();
app.use(bodyParser.json({ limit: "20mb" }));
app.use(bodyParser.urlencoded({ extended: false, limit: "20mb" }));
app.use(cors());
app.use(express.static(path.join(__dirname, "dist/cctFrontDec8th2019")));
app.use(environment.proxyServer);
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/cctFrontDec8th2019/index.html"));
});

const port = process.env.PORT;
// const port = 8080;
app.set("port", port);

const server = http.createServer(app);
server.listen(port, () => console.log(`API running on ${port}`));
