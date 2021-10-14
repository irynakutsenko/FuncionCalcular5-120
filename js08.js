let n = parseInt(prompt("Añade el numero"));

function factorial(n) {
    var total = 1;
    for (i = 1; i <= n; i++) {
        total = total * i;
    }
    return total;
}
console.log(factorial(n));