// Scorekeeper
let scores = {
    friend1: 0,
    friend2: 0,
    friend3: 0,
    friend4: 0,
    friend5: 0
}

let increaseFriend1 = function() {
    let points1 = document.querySelector('.pointsNumber1');
    scores.friend1 += 1;
    points1.innerHTML = scores.friend1;
}

let increaseFriend2 = function() {
    let points2 = document.querySelector('.pointsNumber2');
    scores.friend2 += 1;
    points2.innerHTML = scores.friend2;
}

let increaseFriend3 = function() {
    let points3 = document.querySelector('.pointsNumber3');
    scores.friend3 += 1;
    points3.innerHTML = scores.friend3;
}

let increaseFriend4 = function() {
    let points4 = document.querySelector('.pointsNumber4');
    scores.friend4 += 1;
    points4.innerHTML = scores.friend4;
}

let increaseFriend5 = function() {
    let points5 = document.querySelector('.pointsNumber5');
    scores.friend5 += 1;
    points5.innerHTML = scores.friend5;
}

let button1 = document.querySelector('.increaseScoreButton1');
button1.addEventListener('click', increaseFriend1);

let button2 = document.querySelector('.increaseScoreButton2');
button2.addEventListener('click', increaseFriend2);

let button3 = document.querySelector('.increaseScoreButton3');
button3.addEventListener('click', increaseFriend3);

let button4 = document.querySelector('.increaseScoreButton4');
button4.addEventListener('click', increaseFriend4);

let button5 = document.querySelector('.increaseScoreButton5');
button5.addEventListener('click', increaseFriend5);