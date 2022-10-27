const homeCount = document.getElementById('home-count');
const guestCount = document.getElementById('guest-count');
let homeNum = parseInt(homeCount.innerHTML);
let guestNum = parseInt(guestCount.innerHTML);

function homeIncrementOne() {
    let newScore = homeNum += 1;  
    homeCount.innerHTML = newScore;
}

function homeIncrementTwo() {
  let newScore = homeNum += 2;  
  homeCount.innerHTML = newScore;
}

function homeIncrementThree() {
  let newScore = homeNum += 3;  
  homeCount.innerHTML = newScore;
}

function guestIncrementOne() {
  let newScore = guestNum += 1;
  guestCount.innerHTML = newScore;       
}

function guestIncrementTwo() {
  let newScore = guestNum += 2;
  guestCount.innerHTML = newScore;    
}

function guestIncrementThree() {
  let newScore = guestNum += 3;
  guestCount.innerHTML = newScore;    
}