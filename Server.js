const Express = require('express')
const App = Express()
const Port = 5100
const Path = require('path')

//*** FRONTTI */
// Tehdään polkumääritys public kansioon 
const Polku = Path.join(__dirname, './public')
// Tämä toiminto tarjoaa html, css, js tiedostot
// eli selaimeen web käyttöliittymän
App.use(Express.static(Polku))


//*** BACKEND REST API */
// api/mopot polkuun tulevaan pyyntöön vastataan
// lähettämällä mopo dataa json muodossa.
const mopot = [{id: 1, merkki: "Keeway"},{id: 2, merkki: "Suzuki"}]

App.get('/api/mopot', (req, res) => {
    res.json(mopot)
})

App.get('/testi', (req, res) => {
    res.send("Hello from Express!")
})

App.listen(Port)
console.log("Server is up on port " + Port)

