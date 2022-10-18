// const http = require('http');

// const server = http.createServer((req, res) =>{
//     console.log('run request...');
//     res.setHeader('Content-type', 'text/html');
//     res.write('<h3> Hello World! </h3>');
//     res.write('<h2> Chao mung den binh nguyen vo tan! </h2>');
//     res.end();
// })

// server.listen(3000, 'localhost', () =>{
//     console.log('Node.JS server is running on port 8080');
// })
import express from 'express';
//const express = require("express");
import configViewEngine from './configs/viewEngine';
//const path = require("path");
import initWebRoute from './route/web';
// import connection from './configs/connectDB';
require('dotenv').config();
import initAPIRoute from './route/api';

const app = express();
const port = process.env.PORT;
app.use(express.urlencoded({extended: true}));
app.use(express.json());
configViewEngine(app);
initWebRoute(app);

initAPIRoute(app);
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
// app.get("/", (req, res) => {
//   res.render('index.ejs')
// })

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
})

app.use((req,res,next) =>{
const err = new Error('PAGE NOT FOUND');
err.status = 404;
next (err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 504);
  res.send({
    error: {
      status: err.status || 504,
      message: err.message
    }
  })
})