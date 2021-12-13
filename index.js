'use strict';
const express = require('express');
const {
  dialogflow,
  HtmlResponse,
} = require('actions-on-google');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const app = dialogflow({debug:true});

app.intent('welcome', (conv) => {
  if (!conv.surface.capabilities
      .has('actions.capability.INTERACTIVE_CANVAS')) {
    conv.close('Sorry, this device does not support Interactive Canvas!');
    return;
  }
  conv.ask('Welcome! Do you want me to change color or pause spinning? ' +
    'You can also tell me to ask you later.');
  conv.ask(new HtmlResponse({
    url: `https://aa2010.herokuapp.com`,
  }));
});

const expressApp = express().use(bodyParser.json());
expressApp.post('/webhook', app);

expressApp.get('/da', (req,res)=>{
    res.send("Sheeesh");
});

expressApp.listen(port);
