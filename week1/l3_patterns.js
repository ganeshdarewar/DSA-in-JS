
// 2 table
// const num=2
// for(let i=1; i<=10; i++){
//     console.log(`${num} x ${i} = ${num*i}`);
// }



// square pattern
// const n=5
// for(let row=0; row<n; row++){
//     let stars=''
//     for(let col=0; col<n ; col++){
//         stars +='*'
//     }
//     console.log(stars);
// }

// hollow rectangle

// const n=5; 
// for(let row=0; row<n; row++){
//     let stars=''
//     for(let col=0; col<n; col++){
//         row ===0 || row===n-1 || col=== n-1 || col===0 ? stars+= '*': stars+= ' '
//     }
//     console.log(stars);
// }


// half pyramid

// const n=5
// for(let row=0; row<n; row++){
//     stars=''
//     for(let col=0; col<row+1; col++){
//         stars += "*"
//     }
//     console.log(stars);
// }


// inverted half pyramid

// const n=5
// for(let row=0; row<n; row++){
//     let stars=''
//     for(let col=0; col<n-row; col++){
//         stars+="*"
//     }
//     console.log(stars);
// }


// numeric half

const n=5
for(let row=0; row<n; row++){
    let stars =''
    for(let col=0; col<row+1; col++){
        stars += col+1
    }
    console.log(stars);
}
