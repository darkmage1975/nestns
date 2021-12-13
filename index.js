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
const app = actionssdk({debug: true});

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/cool', (req, res) => res.send(cool()))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

/*app.intent('actions.intent.Welcome', (conv) => {
  	conv.ask('Ciaone!');
});*/

