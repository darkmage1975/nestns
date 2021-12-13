const cool = require('cool-ascii-faces');
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const {
  dialogflow,
  actionssdk,
  Image,
  Table,
  Carousel,
} = require('actions-on-google');

// Create an app instance
const app = dialogflow({debug: true});

app.intent('Welcome', (conv) => {
  console.log('welcome');
  conv.ask('Welcome!');
});

express().use(bodyParser.json(), app).listen(PORT);

