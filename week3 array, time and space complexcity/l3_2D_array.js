//  row sum

let arr=[
    [1,2,3],
    [1,2,3],
    [1,2,3]
]

// for(let i=0; i<arr.length; i++){
//     let sum=0;
//     for(let j=0; j<arr[i].length; j++){
//         sum += arr[i][j]
//     }
//     console.log(sum);
// }



// linear search
// let key=3
// function checkNum(arr, key){
//     for(let i=0; i<arr.length; i++){
//         for(let j=0; arr[i].length; j++){
//             if(arr[i][j]===3){
//                 return true
//             }
//         }
//         console.log('not found');
//     }
//     return false
// }

// if(checkNum(arr, key)){
//     console.log('found');
// }
// else{
//     console.log('not found');
// }



// find min/max
// let max =Number.MIN_VALUE
// let min =Number.MAX_VALUE
// for(let i=0; i<arr.length;i++){
//     for(let j=0; j<arr[i].length; j++){
//         if(max<arr[i][j]){
//             max=arr[i][j]
//         }
//         if(min>arr[i][j]){
//             min=arr[i][j]
//         }
//     }
// }
// console.log(`max ${max}`);
// console.log(`min ${min}`);



// transpose matrix
// let transpose=[
//     [],
//     [],
//     []
// ]

// for(let i=0; i<arr.length; i++){
//     for(let j=0; j<arr[i].length; j++){
//         transpose[i][j]=arr[j][i]
//     }
// }
// for(let i=0; i<transpose.length; i++){
//     let row=''
//     for(let j=0; j<transpose[i].length; j++){
//         row+=`${transpose[i][j]} `
//     }
//     console.log(row);
// }



