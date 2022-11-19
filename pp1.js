async function f() {
  return 1;
}

let t=f().then(console.log("Hello")); // 1

console.log(t);
