const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  // if (typeof date == Date) {
  //   console.log("1 :>> ", 1);
  // }
  console.log(" :>> ", typeof date);
}
getSeason(new Date(83, 9, 25, 16, 20, 23, 544));

module.exports = {
  getSeason,
};
