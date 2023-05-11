/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
    
    const kelvin = val => val + 273.15;
    const fahrenheit = val => val * 1.80 + 32.00;
    
    return [kelvin(celsius), fahrenheit(celsius)];
};