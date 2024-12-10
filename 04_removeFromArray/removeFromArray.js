const removeFromArray = function(array, ...arg) {
    return array.filter(val => !arg.includes(val));
};

// Do not edit below this line
module.exports = removeFromArray;
