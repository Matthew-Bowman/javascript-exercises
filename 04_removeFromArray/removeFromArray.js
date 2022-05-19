const removeFromArray = function(arr, val) {
    // Get values to remove
    let toRemove = Object.values(arguments);
    toRemove.shift(); // Removes the array from argument list

    console.log(toRemove);
    console.log(arr);
    console.log(`-----------------`)
    
    // Loop through array and remove values
    toRemove.forEach(val => {
        let index = arr.indexOf(val);

        if(index >= 0)
            arr.splice(index, 1);
    })

    return arr;
};

console.log(removeFromArray([1, 2, 3, 4], 3, 2));

// Do not edit below this line
module.exports = removeFromArray;
