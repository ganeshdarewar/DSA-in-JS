// binary in nearly sorted array
// let arr = [10, 3, 40, 20, 50, 80, 70];
// let target = 70;
// let ans = binarySearch(arr, target);
// console.log(ans);
// function binarySearch(arr, target) {
//   let s = 0,
//     e = arr.length - 1,
//     mid;
//   while (s <= e) {
//     mid = Math.floor((s + e) / 2);
//     if (arr[mid] === target) {
//       return mid;
//     } else if (mid + 1 <= e && arr[mid + 1] === target) {
//       return mid + 1;
//     } else if (mid - 1 >= s && arr[mid - 1] === target) {
//       return mid - 1;
//     } else if (target > arr[mid]) {
//       s = mid + 2;
//     } else {
//       e = mid - 2;
//     }
//   }
//   return -1;
// }

// divide 2 numbers using binary search
// function integerDivision(dividend, divider) {
//   let s = 0,
//     e = dividend,
//     mid,
//     ans = 0;

//   while (s <= e) {
//     mid = Math.floor((s + e) / 2);

//     if (mid * divider > dividend) {
//       e = mid - 1;
//     } else {
//       ans = mid;
//       s = mid + 1;
//     }
//   }

//   return ans;
// }

// function preciseDivision(dividend, divider, precision) {
//   let absDividend = Math.abs(dividend);
//   let absDivider = Math.abs(divider);
//   let integerPart = integerDivision(absDividend, absDivider);

//   // Determine the sign of the result
//   let result =
//     (dividend < 0 && divider > 0) || (dividend > 0 && divider < 0)
//       ? -integerPart
//       : integerPart;

//   // Calculate the fractional part with the given precision
//   let fractionalPart = 0;
//   let step = 0.1;

//   for (let i = 0; i < precision; i++) {
//     while ((integerPart + fractionalPart + step) * absDivider <= absDividend) {
//       fractionalPart += step;
//     }
//     step /= 10;
//   }

//   // Apply the sign to the fractional part if necessary
//   if (result < 0) {
//     result -= fractionalPart;
//   } else {
//     result += fractionalPart;
//   }

//   return result.toFixed(precision);
// }
// let dividend = -22;
// let divider = 7;
// let precision = 2;
// let result = preciseDivision(dividend, divider, precision);
// console.log(result); // Should output the division result of -22 / 7 with the specified precision

// find odd occouring element in array

let arr = [1, 1, 2, 2, 3, 3, 4, 4, 3, 600, 600, 4, 4];
let ans = solved(arr);
console.log(arr[ans]);
function solved(arr) {
  let s = 0,
    e = arr.length - 1,
    mid;
  while (s <= e) {
    mid = Math.floor((s + e) / 2);
    if (s === e) {
      return s;
    } else if (mid % 2 == 0) {
      if (arr[mid] == arr[mid + 1]) {
        s = mid + 2;
      } else {
        e = mid;
      }
    } else {
      if (arr[mid] == arr[mid - 1]) {
        s = mid + 1;
      } else {
        e = mid - 1;
      }
    }
  }
  return -1;
}

/*
find pairs diffent k in array
find k closest element to a given value in array
exponential search
unbounded search
book allocation
painter partition
aggresive cows
roti/paratha spoj
eko spoj
*/

/*
Binary search 3 types of question 
1 classical
2 search space
3 index space
*/
