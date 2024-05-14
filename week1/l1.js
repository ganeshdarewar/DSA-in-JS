// #multiply 2 num taking input

// console.log(2*3);

// perimeter of triangle

// let a=2
// let b=2
// let c=2
// console.log(a+b+c);


// simple intrest

// let p =10
// let r =10
// let t =10
// console.log(p*r*t);


// counting num n to 1

// let n=100

// for(let i =0; i<100; i++){
//     console.log(n-i);
// }


// // factorial 

// let n=5
// let fact =1
// for(let i=0; n>=1; i++){
//     fact = fact*n
//     n--
// }
// console.log(fact);


// 1 to N but only even

// let n=100

// for(let i=1; i<=n; i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }


// greater number of 3
// let a=2
// let b=2
// let c=2

// if(a>b && a>c){
//     console.log('a is greater');
// }
// else if(b>c){
//     console.log('b is greater');
// }
// else if(a===b && b==c){
//     console.log("equal");
// }
// else{
//     console.log("c is greater");
// }



// valid triangle
// let a=2
// let b=2
// let c=2

// if((a+b)>c && (b+c)> a && (a+c)>b){
//     console.log('valid triangle');
// }
// else{
//     console.log('Invalid triangle');
// }


// check prime

let n=2
let flag=false
for(let i=0; i<n; i++){
    if(n%i===0){
        flag=true
        console.log('no prime');
        break
    }
}
!flag ? console.log('prime'): null 
