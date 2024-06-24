// find pivot element
// let arr = [3, 4, 5, 6, 7, 1, 2];
// let start = 0,
//   end = arr.length - 1,
//   mid,
//   ans = -1;

// while (start <= end) {
//   mid = Math.floor((start + end) / 2);
//   if (mid < arr.length && arr[mid] > arr[mid + 1]) {
//     ans = mid;
//   } else if (mid >= 0 && arr[mid - 1] > arr[mid]) {
//     ans = mid - 1;
//   }
//   if (arr[start] > arr[mid]) {
//     end = mid - 1;
//   } else {
//     start = mid + 1;
//   }
// }

// console.log(ans);

// Search in a Rotated Array

// find square root of number
// function findSquareRoot(n) {
//   let target = n;
//   let s = 0,
//     e = n,
//     mid,
//     ans = -1;
//   while (s <= e) {
//     mid = Math.ceil((s + e) / 2);
//     if (mid * mid == target) {
//       return mid;
//     } else if (mid * mid > target) {
//       e = mid - 1;
//     } else {
//       ans = mid;
//       s = mid + 1;
//     }
//   }
//   return mid;
// }
// let n = 10;
// let ans = findSquareRoot(n);
// console.log(`ans is ${ans}`);

// let finalAns = ans;
// let step = 0.1;
// let precision = 2;
// for (let i = 0; i < precision; i++) {
//   while (finalAns * finalAns <= n) {
//     finalAns += step;
//   }
//   finalAns -= step; // Step back to the last valid value
//   step /= 10; // Increase precision by reducing the step size
// }

// console.log(finalAns.toFixed(precision));

// binary search in 2d matrix
function binarySearch(arr, target) {
  let rows = arr.length;
  let cols = arr[0].length;
  let s = 0,
    e = rows * cols - 1,
    mid;

  while (s <= e) {
    mid = Math.floor((s + e) / 2);
    let rowIndex = Math.floor(mid / cols);
    let colIndex = mid % cols;
    if (target == arr[rowIndex][colIndex]) {
      console.log(`${rowIndex} ${colIndex}`);
      return true;
    } else if (arr[rowIndex][colIndex] < target) {
      s = mid + 1;
    } else if (arr[rowIndex][colIndex] > target) {
      e = mid - 1;
    }
  }
  return false;
}

let arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
  [17, 18, 19, 20],
];
let target = 20;
console.log(binarySearch(arr, target));

// Homewok
/*
1 search in nearly sorted array in log time
2 division of 2 num in binary search
3 find odd occuring element using binary search
*/
