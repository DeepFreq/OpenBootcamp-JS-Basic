// Very specifics cases - break, continue

let list = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < list.length; i++) {
    if (list[i] === 3) {
        continue; // 'continue' Is a reserved word. // In this cases is used for...
    } // ... indicate to the code, that once he finds 'continue', must return to the top and skip X.
    console.log(list[i]); // If i is greater than X, must exit of the loop
    if (list[i] > 5) {
        break;
    }
}

// What is the scope of a loop
console.log(i)