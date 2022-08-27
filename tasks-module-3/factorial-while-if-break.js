let x = 1;
let y = 10;
let result = 1;

while (true) {
    if (x <= y) {
        result = result * x;
        x++;
    }
    else {
        break;
    }
}
console.log(result);
