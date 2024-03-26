const swap = require('./swap');

/* Define partition() here */
const partition = (array, leftIndex, rightIndex) => {
  const pivot = array[Math.floor((leftIndex + rightIndex) / 2)];
  return pivot;
}

module.exports = {
  partition
};