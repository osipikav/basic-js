const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */

function countCats(matrix) {
  let i = 0;
  let m = [];
  matrix.forEach((element) => {
    element.forEach((el) => {
      if (el == "^^") {
        i++;
      }
    });
  });
  return i;
}

module.exports = {
  countCats,
};

// countCats([
//   [0, 1, "^^"],
//   [0, "^^", 2],
//   ["^^", 1, 2],
// ]);
