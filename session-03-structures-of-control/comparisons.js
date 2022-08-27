// Comparison

// Equality
// if (5 = 5) {
//     console.log("5 is equal to 5");
// }

if (5 === 5) {
    console.log("5 is very equal to 5");
}

let a = 5;
let b = 5;

// == Just compare the valor
// === Compare the valor and the type

if (a == b) {
    console.log("a is equal to b - Weak");
}

if (a === b) {
    console.log("a is equal to b - Strong");
}

let c = 4;
let d = 10;

if (c != d) {
    console.log("c is different to d - Weak")
}

if (c !== d) {
    console.log("c is different to d - Strong")
}

// Comparisons greater than & less than

let max = 10;
let min = 5;

if (max > min) {
    console.log('max is greater than min')
}
if (max >= min) {
    console.log('max is greater than min')
}
