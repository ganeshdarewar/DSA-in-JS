// let arr=[1,2,3];
// console.log(arr);
// console.log(arr.length);

// for(let i=0; i<arr.length; i++){
//     console.log(arr[i]*2);
// }

// assign all item to 1
// for(let i=0; i<arr.length; i++){
//     arr[i]=1
// }
// console.log(arr);

// // pass by reference
// let arr=[1,2,3]
// function printArray(arr){
//     console.log(arr);
// }

// function inc(arr){
//     arr[0]=arr[0]+10
//     printArray(arr)
// }

// inc(arr) // pass by reference
// printArray(arr)

// // linear search

// let arr =[1,2,3]
// let key=1;
// let flag=false;
// // for(let i=0; i<arr.length; i++){
// //     if(arr[i]=== key){
// //         flag = true
// //     }
// // }

// // or

// arr.forEach((item)=>{
//     if(item=== key){
//         flag=true
//     }
// })
// if(flag){
//     console.log("found");
// }
// else{
//     console.log("not found");
// }

// count 0s and 1s in array

// let arr = [0, 1, 0, 0, 0, 0, 0];
// let countOne = 0;
// let countZero = 0;
// // for(let i=0; i<arr.length; i++){
// //     if(arr[i]===1){
// //         countOne++
// //     }
// //     if(arr[i]===0){
// //         countZero++
// //     }
// // }

// arr.map((i) => {
//   if (arr[i] === 1) {
//     countOne++;
//   }
//   if (arr[i] === 0) {
//     countZero++;
//   }
// });

// console.log(`no of zero: ${countZero} no of one: ${countOne}`);




// max and min in array

// let max = Number.MIN_SAFE_INTEGER
// let min = Number.MAX_SAFE_INTEGER
// let arr=[1,2,3,2]

// for(let i=0; i<arr.length; i++){
//     if(max<arr[i]){
//         max = arr[i]
//     }
//     if(min>arr[i]){
//         min = arr[i]
//     }
// }
// console.log(max);
// console.log(min);


// extreme print in array
// let arr=[1,2,3,4,5]
// let start =0
// let end =arr.length-1
// while(start<=end){
//     if(start==end){
//         console.log(arr[start++]);
//     }else{
//         console.log(arr[start++]);
//         console.log(arr[end--]);
//     }
// }


// reverse array

let arr=[1,2,3,4]
let start=0
let end=arr.length-1
while(start<=end){
    let temp = arr[start]
    arr[start] = arr[end]
    arr[end]=temp
    start++
    end--
}
console.log(arr);