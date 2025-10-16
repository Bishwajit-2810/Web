function outer() {
    let a = 10;
    function inner() {
        console.log(a);
    }
    inner()
}
outer()

function outer_counter() {
    let counter = 20
    return function InnerCounter() {
        counter += 20
        return counter
    }
}
let ans = outer_counter()
console.log(ans);
console.log(ans()); // 40
console.log(ans()); // 60
console.log(ans()); // 80
