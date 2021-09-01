const express = require('express');
const bodyParser = require('body-parser');
const PORT = 8080;
const cors = require("cors");
const app = express();

app.use(cors())
app.use(bodyParser.json({ extended: true }));

app.get('/getSeasonalLogo', (req, res) => {
  const currentLogo = 'https://betway.com/doc-centre/assets/betway-logo-white-sml.png'
  res.send(JSON.stringify({logoUrl: currentLogo, name: 'normal logo'}))
})
app.get('/getNavLinks', (req, res) => {
  const links =
  [
    {name: 'sports', color: 'green'},
    {name: 'live & real', color: 'skyblue'},
    {name: 'casino', color: 'darkblue'},
    {name: 'esports', color: 'purple'},
    {name: 'vegas', color: 'red'}
  ]
  res.send(JSON.stringify({links: links}))
})
app.get('/getBackgroundUrl', (req, res) => {
  const url = 'https://cdn.betwaygroup.com/medusa-production-cache/b/6/b604ec0b6b3e584899a17fb3255e5177a8e649e0.webp'
  res.send(JSON.stringify({imgUrl: url}))
})
app.get('/getPromotion', (req, res) => {
  const promo = {name: 'SPORTS NEW CUSTOMER OFFER', description: 'Get up to £10 in Free Bets'}
  res.send(JSON.stringify({promo: promo}))
})

app.listen(PORT, () => {console.log(`Server listening on port: ${PORT}`)})
