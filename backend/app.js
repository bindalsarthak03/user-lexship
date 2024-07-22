const express = require('express');
const cors  = require("cors");
const http = require('http');
const router = require('./routes/routes');

const app = express();

app.use(cors());
app.use(express.json());

const port = 5000;
app.use(router)

app.listen(port,()=>{
    console.log(`App running on ${port}`)
})
