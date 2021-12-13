'use strict';
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const PORT = process.env.PORT || 5000
const {dialogflow, HtmlResponse} = require('actions-on-google');
const app = dialogflow({debug: true});

app.intent('Welcome', (conv) => {
  console.log('welcome');
  conv.ask('Welcome!');
});

express().use(bodyParser.json(), app).listen(PORT);

