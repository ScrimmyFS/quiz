var Goback = document.getElementById("Go-back")
var grabscore = document.getElementById("Grab-scores")
var clearbutton = document.getElementById("Clear-scores")
function grabscores(){

    var currentscore = JSON.parse(window.localStorage.getItem("High-scores"))||[]
    console.log(currentscore)
    for (var i = 0; i < currentscore.length; i++){
        var scores = document.createElement("li");
        console.log(currentscore[i].score)
        console.log(currentscore[i].initials)

        scores.textContent = currentscore[i].initials + "-" + currentscore[i].score;

        grabscore.appendChild(scores);

        // scores.setAttribute()

        function clear(event){
            event.preventDefault()
            localStorage.clear()
            grabscore.innerHTML = ""
          }

          clearbutton.addEventListener('click', clear)

    }


}

Goback.addEventListener('click', Leavepage)

function Leavepage(){
    window.location = "index.html"
}


      

grabscores()
// For loop when retrieving the high scores out of local storage. Store these from the highest to lowest. Json pars when taking it out
