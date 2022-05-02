const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  let optionsDefolt = {
    repeatTimes: 1,
    separator: "+",
    addition: "",
    additionRepeatTimes: 0,
    additionSeparator: "|",
  };
  let repeatTimes = options.repeatTimes;
  let separator = options.separator;
  let addition = options.addition;
  let additionRepeatTimes = options.additionRepeatTimes;
  let additionSeparator = options.additionSeparator;

  if (options.repeatTimes == undefined) {
    repeatTimes = optionsDefolt.repeatTimes;
  }
  // console.log("repeatTimes :>> ", repeatTimes);
  if (options.separator == undefined) {
    separator = optionsDefolt.separator;
  }
  // console.log("separator :>> ", separator);
  if (options.addition == undefined) {
    addition = optionsDefolt.addition;
  }
  // console.log("addition :>> ", addition);
  if (options.additionRepeatTimes == undefined) {
    additionRepeatTimes = optionsDefolt.additionRepeatTimes;
  }
  // console.log("additionRepeatTimes :>> ", additionRepeatTimes);
  if (options.additionSeparator == undefined) {
    additionSeparator = optionsDefolt.additionSeparator;
  }
  // console.log("additionSeparator :>> ", additionSeparator);

  let arr = [];

  for (let y = 0; y < repeatTimes; y++) {
    arr.push(str);
    arr.push(addition);
    for (let i = 1; i < additionRepeatTimes; i++) {
      arr.push(additionSeparator);
      arr.push(addition);
    }
    if (y < repeatTimes - 1) {
      arr.push(separator);
    }
  }

  return arr.join("");
  // console.log(arr.join(""));
}

module.exports = {
  repeater,
};
