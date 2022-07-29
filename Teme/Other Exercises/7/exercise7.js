// jQuery exercises

// changing a heading text with what is typed by the user 
// >>>
// let newHeadingText = prompt('Please provide a new heading:');
// $('#main-heading').text(newHeadingText);

// apending a paragraph to the body
// >>>
// $('body').append('<p> This is a new paragraph. </p>');

// loop that adds user's inputs
// >>>
// for (let i = 0; i < 3; i++) {
//     let hobby = prompt("Tell me one of your hobbies!");
//     $("body").append("<p>" + hobby + "</p>");
// }

// fading a text until it dissapears
// 3000 is the number of milliseconds and is equal with 9 seconds
// observation: after slowly fading out, when the time finishes,
// the DISPLAY of the element becomes NONE
// so it will no longer ocuppy space in the page
// >>>
// $('h1').fadeOut(8000);

// hiding and displaying again the text of h1 - chaining
// >>>
// $('h1').fadeOut(3000).fadeIn(3000);

// sliding up and down
// >>>
// $('h1').slideUp(1000).slideDown(1000);

// fade in when the element is already visible => nothing happens, not even in console
// fade out will work
// >>>
// $('p').fadeIn(6000);

// calling without chaining => same result as the chained call
// >>>
// $('p').fadeOut(1500);
// $('p').fadeIn(1500);


// for (let i = 0; i < 5; i++) {
//     $('p').fadeOut(500);
//     $('p').fadeIn(500);
// }

// first argument is the number of seconds
// second argument is a number between 0 and 1
// the second one will help it have a specific opacity - it turns gray
// >>>
// $("h1").fadeTo(2000, 0.3);


let fadeFunction = function(color, milliseconds) {
    $(color).fadeOut(0).fadeIn(milliseconds);
}
// fadeFunction('.color1', 4000);
// fadeFunction('.color2', 4000);
// fadeFunction('.color3', 4000);
// fadeFunction('.color4', 4000);
// fadeFunction('.color5', 4000);
// fadeFunction('.color6', 4000);
// fadeFunction('.color7', 4000);