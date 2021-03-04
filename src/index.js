

module.exports = function towelSort (matrix) {
  let arr = [];
    if (!matrix || matrix.length === 0) {
        return arr;
    }
    for (let i = 0; i < matrix.length; i++) {
      if (i % 2 === 0) {
        arr.push(...matrix[i]);
      } else {
        arr.push(...matrix[i].reverse());
      }
    }
    return arr;
}
