/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
    
    let idx = 0;
    const result = [0, 1, 1]
    
    while(true) {
        
        if (idx < result.length) {
            yield result[idx++];
        } else {
            result.push(result[idx - 2] + result[idx -1]);
            yield result[idx++];
        }
    }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */