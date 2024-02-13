## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.
let counter = 0;
const updateCounter = () => {
  setTimeout(() => {
    console.log(counter++);
    updateCounter();
  },1000)
}
updateCounter();







































































(Hint: setTimeout)
