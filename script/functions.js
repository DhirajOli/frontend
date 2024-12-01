/*
function abcd(name) {
    return(`hello, ${name} !`);
    
}
const x = abcd("ram")
console.log(x);


function add(x,y) {
    return x * y
}
const k = add(2, 3)
console.log(k);

console.log("hello from top");
setTimeout(() => {
    console.log("hello from middle");
}, 2000);


function sum(...numbers) {
    let total=0
    for(let num of numbers) {
        total += num
    }
    return total
}
console.log(sum(1,2,3,4));

console.log("hello world form buttom");
*/

const authorizedUser = ["Alice","Bob","charlie"]
const checkUser =()=> {
    const enteredName = prompt("enter your name")
    if(authorizedUser.includes(enteredName)) {
        alert("authorized user")
    }else {
        alert("Unauthorized user")
    }
}
checkUser()

