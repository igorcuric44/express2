class Waiter {
  async wait() {
    return await Promise.resolve(1);
  }
}

new Waiter()
  .wait()
  .then(console.log("new promise")); // 1 (this is the same as (result => alert(result)))
