// break & continue
// labels --> It enables us to designate names to tags for & while

// Examples without tags
let units = 0;
let dozens = 0;

dozensLoop: while (true) { // 'dozensLoop' is a label // Adding tags serves to give specific instructions to the 'break' that 'while' should point to
    unitsLoop: while (true) {
        console.log(`The actual number is: ${dozens}${units}`)
        units++
        if (units === 10) {
            units = 0
            break unitsLoop
        }
        if (dozens === 2) {
            break dozensLoop
        }
    }
    dozens++
}
console.log("We finish");