function forEachCustom(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
}
// Example usage:
const numbers = [1, 2, 3, 4, 5];

function logElement(element, index, array) {
  console.log(`Element: ${element}, Index: ${index}, Array: [${array}]`);
}

forEachCustom(numbers, logElement);
