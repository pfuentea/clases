function exampleVar() {
    console.log(x); // undefined
    var x = 10;
    console.log(x); // 10
}
//exampleVar();

function exampleLet() {
    // console.log(y); // ReferenceError: Cannot access 'y' before initialization
    let y = 10;
    console.log(y); // 10
}
//exampleLet();
for (var j = 0; j < 3; j++) {
    console.log(j); // 0, 1, 2
}
console.log(j);