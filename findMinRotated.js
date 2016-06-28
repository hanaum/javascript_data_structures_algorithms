function findMinRotated(a) {
  var low = 0;
  var high = a.length - 1;

  while (a[low] > a[high] && (high - low) > 1) {
    var mid = Math.floor((low + high) / 2);
    if (a[mid] > a[low]) {
      low = mid + 1;
    } else {
      low = low + 1;
      high = mid;
    }
  }
  return a[low];
}


var a = [16,17,18,1,2,3,5,6,7,8];
console.log(findMinRotated(a));
a = [1, 2, 3, 4, 5];
console.log(findMinRotated(a));
a = [1, 2, 3, 4, 5, 0];
console.log(findMinRotated(a));