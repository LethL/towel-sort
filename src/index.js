

module.exports = function towelSort (matrix) {
    if (!matrix || matrix.length === 0) {
        return [];
      }
      let startRow = 0;
      let startCol = 0;
    
      let ans = [];
      let endCol = matrix[0].length - 1;
      let endRow = matrix.length - 1;
    
      while (startRow <= endRow && startCol <= endCol) {
        for (let i = startCol; i <= endCol; i++) {
          ans.push(matrix[startRow][i]);
        }
    
        startRow++;
    
        for (let i = startRow; i <= endRow; i++) {
          ans.push(matrix[i][endCol]);
        }
        endCol--;
    
        if (startRow <= endRow) {
          for (let i = endCol; i >= startCol; i--) {
            ans.push(matrix[endRow][i]);
          }
          endRow--;
        }
    
        if (startCol <= endCol) {
          for (let i = endRow; i >= startRow; i--) {
            ans.push(matrix[i][startCol]);
          }
          startCol++;
        }
      }
      return ans;
}
