const sumAll = function(a, b) {
    // Initialise variables
    let sum = 0;
    let min, max;

    // Check for errors
    if (!(typeof(a) == "number" && typeof(b) == "number")) return "ERROR"; // NaN Error
    if (a < 0 || b < 0) return "ERROR" // Negative Number Error

    // Set min and max variables with logic
    a < b ? (min = a, max = b) : (min = b, max = a);

    console.log(min)
    console.log(max);

    for(let i = min; i <= max; i++)
        sum += i;

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
