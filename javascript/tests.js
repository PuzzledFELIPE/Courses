function displayDone() {
  console.log('3 seconds has elapsed');
}
// timer value is in milliseconds
setTimeout(displayDone, 3000);

setTimeout(() => {
  console.log('2 seconds has elapsed');
}, 2000);