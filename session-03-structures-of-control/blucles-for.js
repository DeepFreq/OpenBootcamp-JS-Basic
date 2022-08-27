// Loops: for

// Example
// for (initialization; condition; update) {
//     // This is the loop
// }
// Initialization: On the start the loop, this part will be executed.
// Will be executed all inside on the keys while the 'condition' to be satisfied.
// On the final the executions of the loops, will be executed this 'update'.

for (let i = 0; i < 10; i++) {
    console.log(i)
}

// i = i + 1
// i += 1
// i++ <-- this is the way more used.

let list = [1, 4, 6, 2, 3, 6, 10, 12];


for (let i = 0; i < list.length; i++) {
    console.log(list[i] * 2)
}

// For... of - structure

for (let value of list) {
    console.log(value)
}

// forEach Structure

list.forEach(value => {
    console.log(value)
})

// for...in - Structure

let user = {
    name: "Alan",
    surname: "Acosta",
    age: "27",
    isDeveloper: true
}
console.log(user.name)

let prop = "age";
console.log(user[prop])

for (let property in user) {
    console.log(property);
    console.log(user[property]);
}