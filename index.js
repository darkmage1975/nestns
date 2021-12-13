const express = require('express')
const bodyParser = require('body-parser')

// Import the appropriate service and chosen wrappers
const {
  dialogflow,
  Image,
} = require('actions-on-google')

// Create an app instance
const app = dialogflow()

// Register handlers for Dialogflow intents

app.intent('Default Welcome Intent', conv => {
  conv.ask('Ciao, come va?')
  conv.ask(`Ecco l'immagine di un gatto`)
  conv.ask(new Image({
    url: 'https://developers.google.com/web/fundamentals/accessibility/semantics-builtin/imgs/160204193356-01-cat-500.jpg',
    alt: 'Un gatto',
  }))
})

// Intent in Dialogflow called `Goodbye`
app.intent('Addio', conv => {
  conv.close('A dopo!')
})

app.intent('Default Fallback Intent', conv => {
  conv.ask(`Non ho capito, puoi riprovare?`)
})

const expressApp = express().use(bodyParser.json())

expressApp.post('/fulfillment', app)

expressApp.listen(3000)
