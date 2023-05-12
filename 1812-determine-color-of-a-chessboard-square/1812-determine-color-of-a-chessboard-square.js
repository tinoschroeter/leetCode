/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function(coordinates) {
    
    const map = {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8};
    
    let [a, b] = coordinates.split("");
    a = map[a];
    
    const c = +a + +b;
    
    return c % 2 === 0 ? false : true;
};