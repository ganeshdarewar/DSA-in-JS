// https://leetcode.com/problems/sort-colors/
// /**
//  * @param {number[]} nums
//  * @return {void} Do not return anything, modify nums in-place instead.
//  */
// var sortColors = function(nums) {
//     let low=0, medium=0;
//     let high = nums.length-1;
//     while(medium<=high){
//         if(nums[medium]==0){
//             let temp = nums[low]
//             nums[low] = nums[medium]
//             nums[medium]=temp
//             low++
//             medium++
//         }
//         else if(nums[medium]==1){
//             medium++
//         }
//         else{
//             let temp = nums[high]
//             nums[high] = nums[medium]
//             nums[medium]=temp
//             high--
//         }
//     }
// };

// move all negative nums left

// let nums=[1,2,-3,4,-5,6]
// let low=0
// let medium = 0
// let high = nums.length-1
// while(nums[medium]<=nums[high]){
//     if(nums[medium]<0){
//         let temp= nums[low]
//         nums[low]=nums[medium]
//         nums[medium]=temp
//         low++
//         medium++
//     }else if(nums[medium]>0){
//         medium++
//     }else{
//         let temp = nums[medium]
//         nums[medium]=nums[high]
//         nums[high]=temp
//         high--
//     }
// }

// another logic
// let low=0;
// let high = nums.length-1
// while(low<=high){
//     if(nums[low]<0){
//         low++
//     }
//     else if(nums[high]>0){
//         high--
//     }
//     else{
//         let temp=nums[low]
//         nums[low]=nums[high]
//         nums[high]=temp
//         low++
//         high--
//     }
// }
// console.log(nums);

// https://leetcode.com/problems/find-the-duplicate-number/
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var findDuplicate = function(nums) {
//     // nums.sort();
//     // for(let i=0; i<nums.length; i++){
//     //     if(nums[i]=== nums[i+1]){
//     //         return nums[i]
//     //     }
//     // }

//     // negative marking method
//     // let ans=-1
//     // for(let i=0; i<nums.length; i++){
//     //     let index=Math.abs(nums[i])
//     //     if(nums[index]<0){
//     //         ans=index
//     //     }
//     //     nums[index] *=-1
//     // }
//     // return ans

//     // positioning method

//     while(nums[0]!= nums[nums[0]]){
//         let temp=nums[0]
//         nums[0]=nums[nums[0]]
//         nums[nums[0]]=temp
//     }
//     return nums[0]
// };

// missing element with duplicates

// let nums=[1,3,5,3,4]

// visited
// for(let i=0; i<nums.length; i++){
//     let index= Math.abs(nums[i])
//     if(nums[index-1]>0){
//         nums[index-1] *= -1
//     }
// }
// duplicates ans missing
// for(let i=0; i<nums.length; i++){
//     if(nums[i]>0){
//         console.log(`duplicates ${nums[i]} and missing ${i+1}`);
//     }
// }

// method 2
// let i=0

// while(i<nums.length){
//     let index = nums[i]-1
//     if(nums[i]!==nums[index]){
//         let temp = nums[i]
//         nums[i]= nums[index]
//         nums[index] =temp

//     }else{
//         i++
//     }
// }
// duplicates ans missing
// for(let i=0; i<nums.length; i++){
//     if(nums[i]!==i+1){
//         console.log(`duplicates ${nums[i]} and missing ${i+1}`);
//     }
// }

// console.log(nums);

// find first repeating number

// class Solution {
//     // Function to return the position of the first repeating element.
//     firstRepeated(arr, n) {
//         for(let i=0; i<n; i++){
//             for(let j=i+1;j<n; j++){
//                 if(arr[i]==arr[j]){
//                     return i+1
//                 }
//             }
//         }
//         return -1
//     }
// }

// let arr=[1, 5, 3, 4, 3, 5, 6]
// let n=arr.length
// console.log(firstRepeated(arr, n));
// function firstRepeated(arr, n) {
//     let elementIndexMap = new Map();
//     let firstRepeatingIndex = n;

//     for (let i = 0; i < n; i++) {
//         if (elementIndexMap.has(arr[i])) {
//             console.log(elementIndexMap);
//             // Update the firstRepeatingIndex with the smallest index of first occurrence
//             firstRepeatingIndex = Math.min(firstRepeatingIndex, elementIndexMap.get(arr[i]));
//         } else {
//             elementIndexMap.set(arr[i], i); // Store the 0-based index of the element
//         }
//     }

//     // If no repeating element is found, return -1
//     return firstRepeatingIndex === n ? -1 : firstRepeatingIndex + 1; // Convert to 1-based index
// }

// find common element in sorted array

//{ Driver Code Starts
//Initial Template for javascript

"use strict";

// process.stdin.resume();
// process.stdin.setEncoding("utf-8");

// let inputString = "";
// let currentLine = 0;

// process.stdin.on("data", (inputStdin) => {
//   inputString += inputStdin;
// });

// process.stdin.on("end", (_) => {
//   inputString = inputString
//     .trim()
//     .split("\n")
//     .map((string) => {
//       return string.trim();
//     });

//   main();
// });

// function readLine() {
//   return inputString[currentLine++];
// }

// function printList(res, n) {
//   let s = "";
//   for (let i = 0; i < n; i++) {
//     s += res[i];
//     s += " ";
//   }
//   console.log(s);
// }

// function main() {
//   let t = parseInt(readLine());
//   let i = 0;
//   for (; i < t; i++) {
//     let input_ar1 = readLine()
//       .split(" ")
//       .map((x) => parseInt(x));
//     let n1 = input_ar1[0];
//     let n2 = input_ar1[1];
//     let n3 = input_ar1[2];
//     let arr1 = new Array(n1);
//     input_ar1 = readLine()
//       .split(" ")
//       .map((x) => parseInt(x));
//     for (let i = 0; i < n1; i++) {
//       arr1[i] = input_ar1[i];
//     }
//     let arr2 = new Array(n2);
//     input_ar1 = readLine()
//       .split(" ")
//       .map((x) => parseInt(x));
//     for (let i = 0; i < n2; i++) {
//       arr2[i] = input_ar1[i];
//     }
//     let arr3 = new Array(n3);
//     input_ar1 = readLine()
//       .split(" ")
//       .map((x) => parseInt(x));
//     for (let i = 0; i < n3; i++) {
//       arr3[i] = input_ar1[i];
//     }
//     let obj = new Solution();
//     let res = obj.commonElements(arr1, arr2, arr3, n1, n2, n3);
//     if (res.length === 0) {
//       console.log(-1);
//     } else {
//       printList(res, res.length);
//     }
//   }
// } // } Driver Code Ends

// } Driver Code Ends

//User function Template for javascript
// class Solution{
//     commonElements(arr1, arr2, arr3, n1, n2,n3){
//       let i = 0, j = 0, k = 0;
//     let common = [];

//     while (i < n1 && j < n2 && k < n3) {
//         if (arr1[i] === arr2[j] && arr2[j] === arr3[k]) {
//             if (!common.includes(arr1[i])) {
//                 common.push(arr1[i]);
//             }
//             i++;
//             j++;
//             k++;
//         } else if (arr1[i] < arr2[j]) {
//             i++;
//         } else if (arr2[j] < arr3[k]) {
//             j++;
//         } else {
//             k++;
//         }
//     }

//     return common.length > 0 ? common : [-1];
//     }
// }

// wave print of matrix

// let arr = [
//   [1, 6, 7],
//   [2, 5, 8],
//   [3, 4, 9],
// ];

// for (let i = 0; i < arr[0].length; i++) {
//   if (i % 2 === 0) {
//     for (let j = 0; j < arr.length; j++) {
//       console.log(arr[j][i]);
//     }
//   } else {
//     for (let j = arr.length - 1; j >= 0; j--) {
//       console.log(arr[j][i]);
//     }
//   }
// }

// spiral matrix
// /**
//  * @param {number[][]} matrix
//  * @return {number[]}
//  */
// var spiralOrder = function (matrix) {
//   let res = [];
//   let startingRow = 0,
//     startingCol = 0,
//     endingCol = matrix[0].length - 1,
//     endingRow = matrix.length - 1;
//   let total = matrix.length * matrix[0].length,
//     count = 0;
//   while (count < total) {
//     //left to right
//     for (let i = startingCol; i <= endingCol && count < total; i++) {
//       res.push(matrix[startingRow][i]);
//       count++;
//     }
//     startingRow++;
//     //top to bottom
//     for (let i = startingRow; i <= endingRow && count < total; i++) {
//       res.push(matrix[i][endingCol]);
//       count++;
//     }
//     endingCol--;
//     for (let i = endingCol; i >= startingCol && count < total; i--) {
//       res.push(matrix[endingRow][i]);
//       count++;
//     }
//     endingRow--;
//     for (let i = endingRow; i >= startingRow && count < total; i--) {
//       res.push(matrix[i][startingCol]);
//       count++;
//     }
//     startingCol++;
//   }
//   return res;
// };

// addition two array

// let a = [9, 5, 4, 9];
// let b = [2, 1, 4];
// let i = a.length - 1;
// let j = b.length - 1;
// let carry = 0;
// let ans = [];
// while (i >= 0 || j >= 0) {
//   let x = (i >= 0 ? a[i] : 0) + (j >= 0 ? b[j] : 0) + carry;
//   let digit = x % 10;
//   ans.push(digit);
//   carry = Math.floor(x / 10);
//   i--;
//   j--;
// }
// console.log(ans.reverse());

// large num factorial num like 50

// let num = 5;
// let fact = 1;
// let ans = [];
// for (let i = 1; i <= num; i++) {
//   fact *= i;
//   ans.push(fact);
// }
// console.log(fact);
// console.log(ans);

const factorial = (N) => {
  let ans = [1];
  let carry = 0;
  for (let i = 2; i <= N; i++) {
    for (let j = 0; j < ans.length; j++) {
      let x = ans[j] * i + carry;
      ans[j] = x % 10;
      carry = Math.floor(x / 10);
    }
    if (carry > 0) {
      ans.push(carry);
    }
    carry = 0;
  }
  return ans.reverse();
};
console.log(factorial(5));
