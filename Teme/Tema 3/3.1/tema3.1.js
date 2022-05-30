let premise = 'What a nice day for ';
let activity1 = 'science';
let activity2 = 'running';
let activity3 = 'learning';

function premiseAndActivities() {
    return (premise + activity3 + ' the ' + activity1 + ' of ' + activity2 + '.');
}

document.getElementById('theHeading').innerHTML = premiseAndActivities();



let personName = 'Jane Smith';
let amountOfMoney = '$12.450';
let moneyLocation = ' in her bank account';
let aLot = ' is a lot of money';
let carName = ' a Toyota Yaris';
let action = ' to buy';
let dot = '.';

let JaneHas = personName + ' has ' + amountOfMoney + moneyLocation + dot;
let amountShort = amountOfMoney + aLot + dot;
let JanePlans = personName + ' plans' + action + carName + dot;
let JaneWillUse = personName + ' will use her ' + amountOfMoney + action + carName + dot;
let amountLong = amountOfMoney + aLot + ' for' + carName + dot;


function paragraph1() {
    return JaneHas + '</br>' + amountShort + '</br>' + JanePlans + '</br>' + JaneWillUse + '</br>' + amountLong;
}
document.getElementById('firstParagraph').innerHTML = paragraph1();


function paragraph2() {
    let wholeParagraph = '$12,450 is a lot of money. </br>' + 
            '$12,450 is a lot of money for a Toyota Yaris. </br>' + 
            'Jane Smith plans to buy a Toyota Yaris. </br>' + 
            'Jane Smith has $12,450 in her bank account. </br>' + 
            'Jane Smith will use her $12,450 to buy a Toyota Yaris. </br>';
    return wholeParagraph;
}
document.getElementById('secondParagraph').innerHTML = paragraph2();


let lastParagraph = JanePlans + '</br>' + amountLong + '</br>' + JaneWillUse + '</br>' + JaneHas + '</br>' + amountShort;
function paragraph3() {
    return lastParagraph
}
document.getElementById('thirdParagraph').innerHTML = paragraph3();


function breakLine() {
    let longLine = '=======================================================';
    return longLine;
}

document.getElementById('breakLine1').innerHTML = breakLine();
document.getElementById('breakLine2').innerHTML = breakLine();
document.getElementById('breakLine3').innerHTML = breakLine();
document.getElementById('breakLine4').innerHTML = breakLine();