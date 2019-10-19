module.exports = function solveSudoku(matrix) {
    for(let i = 0; i < 9; i++){
        for(let j = 0; j < 9; j++){
            if(matrix[i][j] == 0){
                for(let num = 1; num <= 9; num++){
                    if(check(i, j, matrix, num)){
                        matrix[i][j] = num;
                        if(solveSudoku(matrix)){
                            return matrix;
                        }
                        matrix[i][j] = 0;
                    } 
                }
                return false;
            } 
        }
    }
     return matrix;
   
}

function check(i, j, matrix, num){
  for(let k = 0; k < 9; k++){
    if((matrix[i][k] === num)||(matrix[k][j] === num)){
      return false;
    }
  }

  let rowBegin = Math.floor(i / 3) * 3;
  let colBegin = Math.floor(j / 3) * 3;
  let rowEnd = rowBegin + 3;
  let colEnd = colBegin + 3;

  for(let row = rowBegin; row < rowEnd; row++){
    for(let col = colBegin; col < colEnd; col++){
      if(matrix[row][col] === num){
        return false;
      }
    }
  }
  return true;

}
