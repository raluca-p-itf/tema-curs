let heading = 'In the following example JavaScript Function Parameters were used';
function theHeading(headingSentence) {
    return headingSentence;
}
document.getElementById('theHeading').innerHTML = theHeading (heading);
document.getElementById("theHeading").style.color = 'crimson';


let line1 = 'Jane Smith has $12,450 in her bank account.';
let line2 = '$12,450 is a lot of money.';
let line3 = 'Jane Smith plans to buy a Toyota Yaris.';
let line4 = 'Jane Smith will use her $12,450 to buy a Toyota Yaris.';
let line5 = '$12,450 is a lot of money for a Toyota Yaris.';

function paragraph (a, b, c, d, e) {
    return a + '</br>' + b + '</br>' + c + '</br>' + d + '</br>' + e;
}
document.getElementById('firstParagraph').innerHTML = paragraph (line1, line2, line3, line4, line5);
document.getElementById('secondParagraph').innerHTML = paragraph (line2, line5, line3, line1, line4);
document.getElementById('thirdParagraph').innerHTML = paragraph (line3, line5, line4, line1, line2);


function breakLine() {
    let longLine = '=======================================================';
    return longLine;
}
document.getElementById('breakLine1').innerHTML = breakLine();
document.getElementById('breakLine2').innerHTML = breakLine();
document.getElementById('breakLine3').innerHTML = breakLine();
document.getElementById('breakLine4').innerHTML = breakLine();