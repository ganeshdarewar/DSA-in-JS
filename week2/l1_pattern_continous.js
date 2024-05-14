
// full pyramid

// const n=5
// for(let row=0; row<n; row++){
//     let stars =''
//     // spaces
//     for(let col=0; col< n-row-1; col++){
//         stars += ' '
//     }
//     // stars
//     for(let col=0; col< row+1; col++){
//         stars += "* "
//     }
//     console.log(stars);
// }
//     *
//    * *
//   * * *
//  * * * *

// inverted full pyramid
// const n=5
// for(let row=0; row<n; row++){
//     let stars=""
//     for(let col=0; col<row; col++){
//         stars += " "
//     }
//     for(let col=0; col< n-row ; col++){
//         stars += "* "
//     }
//     console.log(stars);
// }
// * * * * * 
//  * * * * 
//   * * *
//    * *
//     *




// const n=5
// for(let row=0; row<n; row++){
//     let stars =''
//     // spaces
//     for(let col=0; col< n-row-1; col++){
//         stars += ' '
//     }
//     // stars
//     for(let col=0; col< row+1; col++){
//         stars += "* "
//     }
//     console.log(stars);
// }
// for(let row=0; row<n; row++){
//     let stars=""
//     for(let col=0; col<row; col++){
//         stars += " "
//     }
//     for(let col=0; col< n-row ; col++){
//         stars += "* "
//     }
//     console.log(stars);
// }

//     * 
//    * * 
//   * * *
//  * * * *
// * * * * *
// * * * * *
//  * * * *
//   * * *
//    * *
//     *


// const n=5
// for(let row=0; row<n; row++){
//     let stars = ""
//     for(let col =0; col< n-row; col++){
//         stars += " "
//     }
//     for(let col =0; col < row+1; col++){
//         col === 0 || col ===row ? stars += "* " : stars += "  "
//     }
//     console.log(stars);

// }

// for(let row=0; row<n; row++){
//     let stars = ""
//     for(let col =0; col< row+1; col++){
//         stars += " "
//     }
//     for(let col =0; col < n-row; col++){
//         col === 0 || col ===n-row-1 ? stars += "* " : stars += "  "
//     }
//     console.log(stars);
// }

//      * 
//     * * 
//    *   *
//   *     *
//  *       *
//  *       *
//   *     *
//    *   *
//     * *
//      *


// const n=5
// for(let row=0; row<n; row++){
//     let stars = ''
//     for(let col=0; col< n-row-1; col++){
//         stars +=" "
//     }
//     for(let col=0; col< (2*row)+1; col++){
//         col===0 || col=== 2*row ? stars +="*" : stars += " "
//     }
//     console.log(stars);
// }

// for(let row=0; row<n; row++){
//     let stars = ''
//     for(let col=0; col< row; col++){
//         stars +=" "
//     }
//     for(let col=0; col< 2*n - (2*row+1); col++){
//         col===0 || col=== 2*n - (2*row+1)-1 ? stars +="*" : stars += "9"
//     }
//     console.log(stars);
// }
//     *
//    * *
//   *   *
//  *     *
// *       *
// *       *
//  *     *
//   *   *
//    * *
//     *



// const n=5

// for(let row=0; row<n; row++){
//     let stars =''
//     for(let col=0; col<n-row;col++ ){
//         stars += "*"
//     }
//     for(let col=0; col< 2*row+1; col++){
//         stars += " "
//     }
//     for(let col=0; col<n-row;col++ ){
//         stars += "*"
//     }
//     console.log(stars);
// }

// for(let row=0; row<n; row++){
//     let stars =''
//     for(let col=0; col< row+1; col++){
//         stars += "*"
//     }
//     for(let col=0; col< 2*n - (2*row+1); col++){
//         stars += " "
//     }
//     for(let col=0; col< row+1; col++){
//         stars += "*"
//     }
//     console.log(stars);
// }

// ***** *****
// ****   ****
// ***     ***
// **       **
// *         *
// *         *
// **       **
// ***     ***
// ****   ****
// ***** *****




// const n=5
// for(let  row=0; row<n; row++){
//     let stars =''
//     for(let col=0; col<row+1; col++){
//         stars+=row+1
//         col !== row ? stars += "*" : null
//     }
//     console.log(stars);
// }
// for(let  row=0; row<n; row++){
//     let stars =''
//     for(let col=0; col<n-row; col++){
//         stars+=n-row
//         if(col !== n-row-1){
//             stars += "*"
//         }
//     }
//     console.log(stars);
// }

// 1
// 2*2
// 3*3*3
// 4*4*4*4
// 5*5*5*5*5
// 5*5*5*5*5
// 4*4*4*4
// 3*3*3
// 2*2
// 1



// const n=5
// for(let row=0; row<n; row++){
//     let stars =''
//     let col=0
//     for(; col<row+1; col++){
//         stars +=col+1
//     }
//     col--
//     for(; col>=1; col--){
//         stars+= col
//     }
//     console.log(stars);
// }

// 1
// 121
// 12321
// 1234321
// 123454321


// const n = 5;
// for (let row = 0; row < n; row++) {
//     let col = 0;
//     let stars = '';
//     for (; col < row + 1; col++) {
//         stars += String.fromCharCode(65 + col);
//     }
//     --col; 
//     for (; col >= 1; col--) {
//         stars += String.fromCharCode(64 + col);
//     }
//     console.log(stars);
// }

// A
// ABA
// ABCBA
// ABCDCBA
// ABCDEDCBA


// const n=5
// for(let row=0; row<n; row++){
//     let stars =''
//     for(let col=0; col< n-row; col++){
//         stars+= " "
//     }
//     for(let col=0; col< row+1; col++){
//         stars += col + row +1
//     }
//     let temp = 2*row
//     for(let col=0; col<row; col++){
//         stars += temp--
//     }
//     console.log(stars);
// }


//      1
//     232
//    34543
//   4567654
//  567898765



const n=5
for(let row=0; row<n; row++){
    let stars =''
    for(let col=0; col< n-row; col++){
        stars += " "
    }
    let temp=1
    for(let col=0; col< 2*row+1; col++ ){
        if(row=== 0 ||  row===n-1){
            col % 2 ==0 ? stars += temp++ : stars += " "
        }
        else{
            if(col ==0 ){
                stars += col+1
            }
            else if(col == 2*row){
                stars += row+1
            } 
            else{
                stars += " "
            }
        }
    }
    console.log(stars);
}


//      1
//     1 2
//    1   3
//   1     4
//  1 2 3 4 5