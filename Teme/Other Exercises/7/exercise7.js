let transitions = function() {

    $('.titleDiv').fadeOut(0).delay(500).fadeIn(3000).delay(1500).slideUp(2000);
    $('.title').fadeOut(0).delay(1500).fadeIn(3000);

    $('.lotusPose').fadeOut(0).delay(7000).fadeIn(3000);
    
    $('.color1').fadeOut(0).delay(9000).fadeIn(3000);
    $('.chakra1').fadeOut(0).delay(11000).fadeIn(3000);
    $('.meaning1').fadeOut(0).delay(13000).fadeIn(3000);

    $('.color2').fadeOut(0).delay(15000).fadeIn(3000);
    $('.chakra2').fadeOut(0).delay(17000).fadeIn(3000);
    $('.meaning2').fadeOut(0).delay(19000).fadeIn(3000);

    $('.color3').fadeOut(0).delay(21000).fadeIn(3000);
    $('.chakra3').fadeOut(0).delay(23000).fadeIn(3000);
    $('.meaning3').fadeOut(0).delay(25000).fadeIn(3000);

    $('.color4').fadeOut(0).delay(27000).fadeIn(3000);
    $('.chakra4').fadeOut(0).delay(29000).fadeIn(3000);
    $('.meaning4').fadeOut(0).delay(31000).fadeIn(3000);

    $('.color5').fadeOut(0).delay(33000).fadeIn(3000);
    $('.chakra5').fadeOut(0).delay(35000).fadeIn(3000);
    $('.meaning5').fadeOut(0).delay(37000).fadeIn(3000);

    $('.color6').fadeOut(0).delay(39000).fadeIn(3000);
    $('.chakra6').fadeOut(0).delay(41000).fadeIn(3000);
    $('.meaning6').fadeOut(0).delay(43000).fadeIn(3000);

    $('.color7').fadeOut(0).delay(45000).fadeIn(3000);
    $('.chakra7').fadeOut(0).delay(47000).fadeIn(3000);
    $('.meaning7').fadeOut(0).delay(49000).fadeIn(3000);

}

transitions();


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