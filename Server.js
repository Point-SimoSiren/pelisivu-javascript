const Express = require('express')
const App = Express()
const Port = 5100
const Path = require('path')
// Taulukollinen mopo objekteja:
const mopot = [{id: 1, merkki: "Keeway"},{id: 2, merkki: "Suzuki"}]

// Tehdään polkumääritys public kansioon 
const Polku = Path.join(__dirname, './public')

App.use(Express.static(Polku))

// api/mopot polkuun tulevaan pyyntöön vastataan
// lähettämällä mopo data json muodossa.
App.get('/api/mopot', (req, res) => {
    res.json(mopot)
})

App.get('/testi', (req, res) => {
    res.send("Hello from Express!")
})

App.listen(Port)
console.log("Server is up on port " + Port)

