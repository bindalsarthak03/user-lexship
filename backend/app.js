const express = require("express");
const cors = require("cors");
const http = require("http");
const https = require("https");
const fs = require("fs");
const router = require("./routes/routes");
require("dotenv").config(); // Ensure to invoke the config function

const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;
app.use("/api/v1", router);

if (process.env.NODE_ENV === "local") {
  const server = http.createServer(app);
  server.listen(port, () => {
    console.log(`Server running on ${port}...`);
  });
} else {
  let keyPath = process.env.KEY_DEV;
  let certPath = process.env.CERT_DEV;
  const options = {
    key: fs.readFileSync(keyPath),
    cert: fs.readFileSync(certPath),
  };
  const server = https.createServer(options, app);
  server.listen(port, () => {
    console.log(`Server running on ${port}...`);
  });
}
