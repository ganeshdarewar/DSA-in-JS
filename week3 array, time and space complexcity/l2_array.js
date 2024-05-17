// unique number in array
// [1,2,1] => 2

// let arr=[1,2,1]

// let ans=0
// for(let i=0; i<arr.length; i++){
//     ans=ans^arr[i]
// }
// console.log(`unique num: ${ans}`);


// union array
// [1,2,3] +[4,5] => [1,2,3,4,5]

// let a=[1,2,3]
// let b=[4,5]
// let ans= []
// for(let i=0; i<a.length; i++){
//     ans.push(a[i])
// }
// for(let i=0; i<b.length; i++){
//     ans.push(b[i])
// }
// console.log(ans);



// intersection of array (common item between 2 array)
// let a=[1,2,3,4,5,4]
// let b=[4,5,6,7,8,4]
// let ans=[]
// for(let i=0; i<a.length;i++){
//     for(let j=0; j<b.length; j++){
//         if(a[i]==b[j]){
//             b[j]=-1
//             ans.push(a[i])
//         }
//     }
// }
// console.log(ans);


// union with duplicates

// let a=[1,2,3,4,5]
// let b=[3,4,5,4,5,8]

// let ans=[]

// for(let i=0; i<a.length; i++){
//     for(let j=0; j<b.length; j++){
//         if(a[i]==b[j]){
//             b[j]=-1
//         }
//     }
// }

// for(let i=0; i<a.length; i++){
//     ans.push(a[i])
// }
// for(let i=0; i<b.length; i++){
//     if(b[i]!== -1){
//         ans.push(b[i])
//     }
// }
// console.log(ans);




// pair sum in array 3+5 =8

// let a=[1,2,3,4,5,6,7,8]
// let sum=8
// for(let i=0; i<a.length; i++){
//     for(let j=i+1; j<a.length; j++){
//         if(a[i]+a[j]===sum){
//             console.log(`${a[i]} ${a[j]}`);
//         }
//     }
// }


// triplet sum 10+20+30 => 50

// let a=[10,20,30,40,50,60,70,80,90]
// let sum=80
// for(let i=0; i<a.length; i++){
//     for(let j=i+1; j<a.length; j++){
//         for(let k=j+1; k<a.length; k++){
//             if(a[i]+ a[j]+ a[k]===sum){
//                 console.log(`${a[i]} ${a[j]} ${a[k]}`);
//             }
//         }
//     }
// }


let a=[1,0,1,0,1,0,0,0]
let start=0
let end=a.length-1
while(start<=end){
    if(a[start]===1  && a[end]===0){
        let temp=a[end]
        a[end]=a[start]
        a[start]=temp
        start++
        end--
    }else{
        if (a[start] === 0) {
            start++;
        }
        if (a[end] === 1) {
            end--;
        }
    }
}
console.log(a);


