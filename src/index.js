
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr = [];
  if (matrix === null) return [];
  if (matrix  === undefined) return [];
  if (matrix === []) return [];
  if (matrix.length === 0) return [];
  for (let i = 0; i < matrix.length; i++) {
    for (let y = 0; y < matrix[i].length; y++){
      if (i%2==0) {
        arr.push(matrix[i][y])
      } else {
        arr.push(matrix[i][matrix[i].length-y-1])
      }
    }
  }
  return arr
}
