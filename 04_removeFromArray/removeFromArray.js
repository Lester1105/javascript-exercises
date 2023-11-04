const removeFromArray = function(array,...Arg) {
    return array.filter(val=>!Arg.includes(val));

};

// Do not edit below this line
module.exports = removeFromArray;
