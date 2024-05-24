/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const w = grid.length, h = grid[0].length//获取到w多少行,h多少列
    for (let i = 0; i < w; i++) {//获取每一行
        for (let j = 0; j < h; j++) {//获取每一行的每一列
            if (i !== 0 && j !== 0) {
                grid[i][j] += Math.min(grid[i-1][j], grid[i][j-1])
            }
            else if (i !== 0) {//只有一列的情况
                grid[i][j] += grid[i-1][j];
            }
            else if (j !== 0){//只有一行的情况
                grid[i][j] += grid[i][j-1]
            } 
        }
    }
    return grid[w-1][h-1]
};
console.log(minPathSum([[1,2,3,4,54],
[1,4,7,4,56],
[8,5,3,4,54],
[1,9,3,4,54],
[5,2,6,4,54]]));
