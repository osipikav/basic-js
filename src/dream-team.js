const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (Array.isArray(members)) {
    let q = [];
    // let bool = true;
    members.forEach((element) => {
      if (typeof element == "string") {
        let x = element.trim().split("");

        q.push(x[0].toUpperCase());
      } else {
        //   bool = false;
        return false;
      }
    });
    // console.log("object :>> ", q.sort().join(""));
    // if (bool == false) {
    //   return false;
    // }
    return q.sort().join("");
  } else {
    return false;
  }
}

// createDreamTeam(["Olivia", 1111, "Lily  poij", "    Oscar ", true, null]);

module.exports = {
  createDreamTeam,
};
