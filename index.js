// for 1

// let n=prompt("a ga qiymat kiriting:");
// let k
// for (let i=1; n>=i; i++){
// console.log(k);
// }

// // for-2.

// let a=+prompt("a ga qiymat kiriting");
// let b=+prompt("b ga qiymat kiriting (a dan katta bo'lishi kerak)");
// if (a < b) {
//     for (let i = a + 1; i < b; i++)
//         console.log(i);
//     }

// // for-3

// let a=+prompt("a ga qiymat kiriting");
// let b=+prompt("b ga qiymat kiriting (a dan katta bo'lishi kerak)");
// if (a < b) {
//     console.log(a);
//     for (let i = a + 1; i <= b; i++) {
//         console.log(i);
//     }
//     console.log(b);
// }

// for-4

// // let narx=13000;
// //     for (let i = 1; i <= 10; i++) {
// //         console.log(i + " kg kartoshka narxi: " + (i * narx) + " so'm");
// //     }

// // for-5

// let narx = parseFloat(prompt("konfet narxini kiriting "));

// for (let i = 1; i <= 10; i++) {
//   console.log(i / 10 + " kg konfet narxi: " + narx * (i / 10));
// }

// // for-6

// let narx = parseFloat(prompt("konfet narxini kiriting "));

// for (let i = 12; i <= 20; i += 2) {
//   console.log(i/10 + " kg konfet narxi - " + narx * (i / 10));
// }

// for-7

// let a=+prompt("a ga qiymat kiriting");
// let b=+prompt("b ga qiymat kiriting (a dan katta bo'lishi kerak)");

// let c = 0;

// for (let i = a; i <= b; i++) {
//     c += i;
// }
// console.log(c);

// for-8

// let a=+prompt("a ga qiymat kiriting");
// let b=+prompt("b ga qiymat kiriting (a dan katta bo'lishi kerak)");

// let c = 1;

// for (let i = a; i <= b; i++) {
//     c *= i;
// }
// console.log(c);

// // for-9

// let a = parseInt(prompt("a ga qiymat kiriting: "));
// let b = parseInt(prompt("b ga qiymat kiriting: "));

//     for (let i = a; i <= b; i++) {
//         console.log(i + " ni kvadrati - " + i * i);
//     }

// for-10
// let n = parseInt(prompt("n ga qiymat kiriting "));
// let s = 0;

// for (let i = 1; i <= n; i++) {
//   s += 1 / i;
// }
// console.log(s);


// --------------------------------While---------------------------------------


// while-1

// let a = parseInt(prompt("a kesmaga qiymat kiriting "));
// let b = parseInt(prompt("b kesmaga qiymat kiriting "));


//     while (a >= b) {
//         a -= b;
//     }
//     console.log("bo'sh joy - " + a);


// while-2

// let a = parseFloat(prompt("a kesmani uzunligini kiriting: "));
// let b = parseFloat(prompt("b kesmani uzunligini kiriting: "));

//     let c = 0;
//     while (a >= b) {
//         a -= b; 
//         c++; 
//     }
//     console.log("b kesma a kesmada " + c + " marta joylashgan");

// while-3

// let n = parseInt(prompt("n sonini kiriting: "));
// let k = parseInt(prompt("k sonini kiriting: "));

// let butun = 0;
// let qoldiq = n;

//     while (qoldiq >= k) {
//         qoldiq -= k;
//         butun++;   
//     }
//     console.log("Butun qismi: " + butun);
//     console.log("Qoldiq qismi: " + qoldiq);

// while-4

// let n = parseInt(prompt("n sonini kiriting (n > 0): "));

// if (n > 0) {
//     let f = 1;
    
//     while (power < n) {
//         let s = 0;
//         for (let i = 0; i < 3; i++) 
//         s += f; }
//         f = s;
//     }
    
//     if (f === n) {
//         console.log("3 ning darajasi");
//     } else {
//         console.log("3 ning darajasi emas.");
//     }