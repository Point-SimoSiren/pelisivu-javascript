const Express = require('express')
const App = Express()
const Port = 5100
const Path = require('path')

// Tehdään polkumääritys public kansioon 
const Polku = Path.join(__dirname, './public')

App.use(Express.static(Polku))

App.get('/testi', (req, res) => {
    res.send("Hello from Express!")
})

App.listen(Port)
console.log("Server is up on port " + Port)

