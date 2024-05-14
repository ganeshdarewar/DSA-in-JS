// 1
// 12
// 1 3
// 1  4
// 12345

// const n=5
// for(let row=0; row<n; row++){
//     let stars =""
//     for(let col=0; col< row+1; col++){
//         col===0 || col==row || row == n-1 ? stars += col+1 : stars += " "
//     }
//     console.log(stars);
// }



// 12345
// 1  4 
// 1 3  
// 12   
// 1 

// const n=5
// for(let row=0; row<n; row++){
//     let stars =""
//     for(let col=0; col< n-row; col++){
//         col===0 || col==n-row-1 || row == 0 ? stars += col+1 : stars += " "
//     }
//     console.log(stars);
// }


//     1
//    121
//   12321
//  1234321
// 123454321


// const n=5
// for(let row=0; row<n; row++){
//     let stars = ""
//     for(let col=0; col< n-row; col++){
//         stars += " "
//     }
//     let col=0
//     for(; col<row+1; col++){
//         stars += col+1
//     }
//     col--
//     for(; col>=1; col--){
//         stars += col
//     }
//     console.log(stars);
// }



// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *

// const n=5
// for(let row=0; row<n; row++){
//     let stars = ''
//     for(let col=0; col< row+1; col++){
//         stars += "*"
//     }
//     console.log(stars);
// }
// for(let row=0; row<n; row++){
//     let stars = ''
//     for(let col=0; col< n-row-1; col++){
//         stars += "*"
//     }
//     console.log(stars);
// }


// ********1********
// *******1*2*******
// ******1*2*3******
// *****1*2*3*4*****
// ****1*2*3*4*5****

// const n=5
// for(let row=0; row<n; row++){
//     let stars=''
//     for(let col=0; col< n-row+3; col++){
//         stars += "*"
//     }
//     for(let col=0; col< row+1; col++){
//         stars += col+1
//         if(col != row) {
//             stars += "*"
//         }
//     }
//     for(let col=0; col< n-row+3; col++){
//         stars += "*"
//     }
//     console.log(stars);
// }




// 1
// 2*3
// 4*5*6
// 7*8*9*10
// 7*8*9*10
// 7*8*9
// 7*8
// 7

// const n=4
// let count =1
// for(let row=0; row<n; row++){
//     let stars =''
//     for(let col=0; col< row+1; col++){
//         stars += count++
//         col !== row ? stars += "*" : null
//     }
//     console.log(stars);
// }
// let temp = count-n
// for(let row=0; row<n; row++){
//     let k= temp
//     let stars =''
//     for(let col=0; col< n-row; col++){
//         stars += k--
//         col !== n-row-1 ? stars += "*" :null
//     }
//     console.log(stars);
// }



// 1
// 121
// 12321
// 1234321
// 12321
// 121
// 1

const n=4

for(let row=0; row<n; row++){
    let stars =""
    let col=0
    for(; col< row+1; col++){
        stars += col+1
    }
    col--
    for(; col>=1; col--){
        stars += col
    }
    console.log(stars);
}
for(let row=0; row<n; row++){
    let stars =''
    let col=0;
    for(; col<n-row-1; col++){
        stars += col+1
    }
    col--
    for(; col>=1; col--){
        stars += col
    }
    console.log(stars);
}


