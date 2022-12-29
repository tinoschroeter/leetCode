/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    
    const queue = [];
    queue.push([sr, sc]) 

    const start = image[sr][sc]
    
    
    while(queue.length) {

        if(start === color) return image
        
        const [x, y] = queue.shift()
         
        image[x][y] = color;
    
        if (x - 1 >= 0 && image[x-1][y] === start) {
            queue.push([x - 1, y])
        }
        if (x + 1 < image.length && image[x + 1][y] === start) {
            queue.push([x + 1, y])
        }
        if (y - 1 >= 0 && image[x][y-1] === start) {
            queue.push([x, y - 1])
        }
        if (y + 1 < image[x].length && image[x][y+1] === start) {
            queue.push([x, y + 1])
        }
    }
    
    
    return image;
};