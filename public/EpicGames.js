//////////////////// POSTS ////////////////////////////////////////
function posts() {

  document.getElementById("listaus").innerHTML = "<h4>Loading feedback data...</h4>"

let x = "<table><thead><th>Title</th><th>Feedback</th></thead><tbody>"

const url = 'https://jsonplaceholder.typicode.com/posts'

try {
	fetch(url)
    .then(res => res.json()) // Muutetaan json -> .js muotoon
    .then(posts => posts.map(p => { // loopataan läpi oliot p = yksittäinen postaus 
        x += `<tr><td>${p.title}</td><td>${p.body}</td></tr>` // Muodostetaan rivit
        }
      ))
    
      setTimeout(() => {
        x += `</tbody></table>` // Lisätään taulukkoon lopputägit
      document.getElementById("listaus").innerHTML = x}
      , 2000 )
	
} catch (error) {
	alert(error)
}
}






/////////////////// GAMES //////////////////////////////
function games() {

document.getElementById("listaus").innerHTML = "<h4>Ladataan...</h4>"

let x = "<table><thead><th>Name</th><th>Description</th></thead><tbody>"

const url = 'https://free-epic-games.p.rapidapi.com/free'

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4c13aebc17msh9c69efc8768b65bp1d2c5fjsnaab34d4c9fc5',
		'X-RapidAPI-Host': 'free-epic-games.p.rapidapi.com'
	}
}

try {
	fetch(url, options)
    .then(data => data.json())
    .then(games => games.map(game => { // loopataan läpi oliot
        x += `<tr><td>${game.name}</td><td>${game.description}</td></tr>`
       
        }
      ))
    
      setTimeout(() => {
        x += `</tbody></table>`
      document.getElementById("listaus").innerHTML = x}
      , 2000 )
	
} catch (error) {
	alert(error)
}
}