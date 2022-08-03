// Get a random number from 0 to size
let getRandomNumber = function (size) {
    return Math.floor(Math.random() * size);
};

// Calculate distance between click event and target
let getDistance = function (event, target) {
    let diffX = event.offsetX - target.x;
    let diffY = event.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
};

// Get a string representing the distance
let getDistanceHint = function (distance) {
    if (distance < 10) {
        return 'Boiling hot!';
    } else if (distance < 20) {
        return 'Really hot';
    } else if (distance < 40) {
        return 'Hot';
    } else if (distance < 80) {
        return 'Warm';
    } else if (distance < 160) {
        return 'Cold';
    } else if (distance < 320) {
        return 'Really cold';
    } else {
        return 'Freezing!';
    }
};

// Set up our variables
let width = 400;
let height = 400;
let clicks = 0;

// Create a random target location
let target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
};

// Add a click handler to the img element
$('#map').click(function (event) {
    clicks++;

    // Get distance between click event and target
    let distance = getDistance(event, target);

    // Convert distance to a hint
    let distanceHint = getDistanceHint(distance);

    // Update the #distance element with the new hint
    $('#distance').text(distanceHint);

    // If the click was close enough, tell them they won
    if (distance < 8) {
        alert('Found the treasure in ' + clicks + ' clicks!');
    }
});