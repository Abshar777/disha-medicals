const createError = require('http-errors');
const serverless = require('serverless-http');
const express = require('express');
const path = require('path');
const serverles=require("s")
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('dotenv').config();
const port=process.env.PORT || 3000;
const indexRouter = require('../routes/index');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);


module.exports.handler = serverless(app);