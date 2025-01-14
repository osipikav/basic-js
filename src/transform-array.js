const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */

function transform(arr) {
  if (!Array.isArray(arr))
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  if (arr == []) {
    return arr;
  } else {
    let a = [];

    for (let i = 0; i < arr.length; i++) {
      let el = arr[i];
      if (el == "--double-next") {
        if (arr[arr.length - 1] !== el) {
          a.push(arr[i + 1]);
        }
      } else if (el == "--discard-prev") {
        a.pop();
      } else if (el == "--double-prev") {
        if (arr[0] !== el) {
          a.push(arr[i - 1]);
        }
      } else if (el == "--discard-next") {
        i++;
      } else {
        a.push(arr[i]);
      }
    }

    return a;
  }
}

module.exports = {
  transform,
};
