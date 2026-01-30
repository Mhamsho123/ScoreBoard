let homePoints = document.getElementById("home-points");
let guestPoints = document.getElementById("guest-points")

let homeScore = 0;
let guestScore = 0;
console.log(homePoints)



//Home Points

function homeOne() {
    homeScore += 1
    homePoints.innerText = homeScore
}

function homeTwo() {
    homeScore += 2
    homePoints.innerText = homeScore
}

function homeThree() {
    homeScore += 3
    homePoints.innerText = homeScore
}

//Guest Points


function guestOne() {
    guestScore += 1
    guestPoints.innerText = guestScore
}


function guestTwo() {
    guestScore += 2
    guestPoints.innerText = guestScore
}




function guestThree() {
    guestScore += 3
    guestPoints.innerText = guestScore
}


//Reset function

function resetBtn() {
    homeScore = 0;
    guestScore = 0;
    homePoints.innerText = homeScore;
    guestPoints.innerText = guestScore;
}



