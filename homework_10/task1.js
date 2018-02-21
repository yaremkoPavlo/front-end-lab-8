/**
 * Your debounce function goes here
 * function(){}
 */
function debounce (callback, delay) {
  var timerId;
  return () => {
    clearTimeout(timerId);
    timerId = setTimeout(callback, delay);
  }
}
// Example

let iterator = 0;

function increaseIteratorBy1() {
  iterator++;

  printIteratorValue();
}

function printIteratorValue() {
  console.log('Iterator value ', iterator);
}

var increaseIterator = debounce(increaseIteratorBy1, 1000);

increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator(); // Should print 'Iterator value 1'
