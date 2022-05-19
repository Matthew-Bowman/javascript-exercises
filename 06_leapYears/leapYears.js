const leapYears = function(year) {
    // Is a Century
    if (year % 100 == 0) {
        if (year % 400 == 0)
            return true;
        else
            return false;
    } 
    // Not a Century
    else {
        if (year % 4 == 0)
            return true;
        else
            return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
