let score1 = document.getElementById("home-score");
let score2 = document.getElementById("guest-score");

homepoints = 0;
guestpoints= 0;

function home1(){
    homepoints += 1
    score1.textContent = homepoints
}

function home2(){
    homepoints += 2
    score1.textContent = homepoints
}

function home3(){
    homepoints += 3
    score1.textContent = homepoints
}


function guest1(){
    guestpoints += 1
    score2.textContent = guestpoints
}

function guest2(){
    guestpoints += 2
    score2.textContent = guestpoints
}

function guest3(){
    guestpoints += 3
    score2.textContent = guestpoints
}