const lengthOfLastWord = function(s) {
    const arr = s.trim().split(" ");
    return arr[arr.length-1].length;
};