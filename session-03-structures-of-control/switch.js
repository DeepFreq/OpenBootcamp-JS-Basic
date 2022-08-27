// Switch sentences

let note = 5;

switch (note) {
    case 5:
        console.log('Congratulation, you have obtained an A!');
        break;
    case 4:
        console.log('Good job, but you could have done a better job.');
        break;
    case 3:
        console.log("You have obtained a 'sufficient'.");
        break;
    case 2:
        console.log('You narrowly passed.');
        break;
    case 1:
        console.log("You haven't studied, you work on it for the next one.");
        break;
    default:
        console.log('Error');
        break;
}