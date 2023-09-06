
// FEEDBACK SIVUN NÄYTTÄMINEN
function feedback() {
    let htmlKoodi = 
    `<h3>Feedback</h3>
    <form onSubmit="forminSubmit(event)">

        <label>Your feedback</label>
        <input type="text" name="palaute" />

        <label>Your name</label>
        <input type="text" name="nimi" />

        <input type="submit" />

    </form>
    `
    document.getElementById("listaus").innerHTML = htmlKoodi
}
// FORMIN SUBMITOINTI FUNKTIO
function forminSubmit(event) {
   event.preventDefault() // sivu ei päivity niinkuin oletuksena
    var feedback = event.target.palaute.value
    var name = event.target.nimi.value
   
    alert("Hey " + name + " ! Your feedback: " + feedback + " was saved successfully!")
}


// ABOUT SIVUN NÄYTTÄMINEN
function about() {
    let htmlKoodi = 
    `<h3>About us</h3>
    <p>We are poor gamer kids who intend to use free games</p>
    `
    document.getElementById("listaus").innerHTML = htmlKoodi
}

// Teeman tarkastus funktio selaimen local storagesta
function checkTheme() {
    let theme = localStorage.getItem("Theme")
    if (theme == "Dark") {
        dark()
    }
    else {
        light()
    }
}

// Kutsutaan saman tien (kun sivu ladataan)
checkTheme()

// DARK THEME
function dark() {
    localStorage.setItem("Theme", "Dark")
    document.getElementById("sivu").style.backgroundColor = "black"
    document.getElementById("sivu").style.color = "silver"
}

// LIGHT THEME
function light() {
    localStorage.setItem("Theme", "Light")
    document.getElementById("sivu").style.backgroundColor = "white"
    document.getElementById("sivu").style.color = "black"
}