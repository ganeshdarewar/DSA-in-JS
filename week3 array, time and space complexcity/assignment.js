
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

