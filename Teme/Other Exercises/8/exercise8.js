// Calling Code Multiple Times with: setInterval
let counter = 1;
let printMessage = function() {
    console.log('You have been staring at your console for ' + counter + ' seconds.');
    counter ++;
}
let intervalId = setInterval(printMessage, 1000);
clearInterval(intervalId);


// Animating Elements with: setInterval
let letOffSet = 0;
let moveHeading = function() {
    $ ('#helloWorld').offset({left: letOffSet});
    letOffSet++;
    if (letOffSet > 200) {
        letOffSet = 0;
    }
};
setInterval(moveHeading, 40); // the second parameter makes the element slide to left faster or slower


// Location of click to console  ==  where on the page the click occurred
let clickHandler = function (event) {
    console.log("Click! " + event.pageX + " " + event.pageY);
};
$("body").click(clickHandler);


// Mousemove event == wherever you move the mouse, the element follows it
$("html").mousemove(function (event) {
    $("#exercise").offset({
        left: event.pageX,
        top: event.pageY
    });
});