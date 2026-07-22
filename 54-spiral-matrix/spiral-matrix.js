/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const result = [];
    if(matrix.length === 0) return result

    let top = 0;
    let left = 0;
    let right = matrix[0].length-1;
    let bottom = matrix.length-1;

    while(top<=bottom && left<=right){

        for(i=left; i<=right; i++){
            result.push(matrix[top][i])
        }
        top++;

        for(i=top; i<=bottom; i++){
            result.push(matrix[i][right])
        }
        right--;

        if(top<=bottom){
            for(i=right; i>=left; i--){
                result.push(matrix[bottom][i])
            }
            bottom--;
        }

        if(left<=right){
            for(i=bottom; i>=top; i--){
                result.push(matrix[i][left]);
            }
            left++
        }
    }
    return result
};