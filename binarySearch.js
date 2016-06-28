function binarySearch(num, array) {
  var low = array[0];
  var high = array[array.length - 1];

  while (high - low > 0) {
    var mid = Math.floor((low + high) / 2);
    if (array[mid] === num) {
      return true;
    } else if (array[mid] < num) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return false;
}

var arr = [-2,1,2,9];
console.log(binarySearch(-2, arr));