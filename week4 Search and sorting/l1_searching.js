// Binary search (element should be sorted (accending or descending))

// let arr = [2, 3, 4, 5, 6, 7, 8];
// let target = 0;

// let start = 0;
// let end = arr.length - 1;
// let mid;

// while (start <= end) {
//   mid = Math.floor((start + end) / 2);
//   if (arr[mid] === target) {
//     console.log(`found at ${mid}`);
//     break;
//   } else if (target < arr[mid]) {
//     end = mid - 1;
//   } else {
//     start = mid + 1;
//   }
//   if (start > end) {
//     console.log(`not found`);
//   }
// }

// find first occurance using binary search

// let arr = [1, 2, 3, 4, 4, 5, 6, 7];
// let start = 0;
// let end = arr.length - 1;
// let mid;
// let target = 4;
// let ans = -1;
// while (start <= end) {
//   mid = Math.floor((start + end) / 2);
//   if (arr[mid] == target) {
//     ans = mid;
//     end = mid - 1;
//   } else if (target < arr[mid]) {
//     end = mid - 1;
//   } else {
//     start = mid + 1;
//   }
// }
// console.log(ans);

// last occurance

// let arr = [1, 2, 3, 4, 4, 5, 6, 7];
// let start = 0,
//   end = arr.length - 1,
//   mid,
//   ans = -1,
//   target = 4;
// while (start <= end) {
//   mid = Math.floor((start + end) / 2);
//   if (arr[mid] == target) {
//     ans = mid;
//     start = mid + 1;
//   } else if (target < end) {
//     end = mid - 1;
//   } else {
//     start = mid + 1;
//   }
// }
// console.log(ans);

// total number of occurance
// let arr = [1, 2, 3, 4, 4, 4, 4, 5, 6, 7];

// function findFirstOccurance() {
//   let start = 0,
//     end = arr.length - 1,
//     mid,
//     target = 4,
//     ans;

//   while (start <= end) {
//     mid = Math.floor((start + end) / 2);
//     if (arr[mid] === target) {
//       ans = mid;
//       end = mid - 1;
//     } else if (target < arr[mid]) {
//       end = mid - 1;
//     } else {
//       start = mid + 1;
//     }
//   }
//   return ans;
// }
// function lastFirstOccurance() {
//   let start = 0,
//     end = arr.length - 1,
//     mid,
//     target = 4,
//     ans;

//   while (start <= end) {
//     mid = Math.floor((start + end) / 2);
//     if (arr[mid] === target) {
//       ans = mid;
//       start = mid + 1;
//     } else if (target < arr[mid]) {
//       end = mid - 1;
//     } else {
//       start = mid + 1;
//     }
//   }
//   return ans;
// }

// console.log(lastFirstOccurance() - findFirstOccurance() + 1);

//  find missing element in array using bnary

// peak element in mountain array
/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
  let start = 0,
    end = arr.length - 1,
    mid;
  while (start < end) {
    mid = Math.floor((start + end) / 2);
    if (arr[mid] < arr[mid + 1]) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }
  return start;
};

// homework
// 1 find pivot usng binary search
// 2 search in a rotated and sorted
// 3 square root in binary search
