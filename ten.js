//1. 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
  document.write(i + "<br>");
}

console.log("*********************************");
let a = 23;
console.log(`${a} value`);

//2. 5 ki table
for (let i = 1; i <= 10; i++) {
  console.log(` 7  x ${i} = ${i * 7}`);
}

console.log("************************************");
//3. odd number 1 to 100
for (let i = 1; i <= 100; i++) {
  if (i % 2 == 1) {
    console.log(`odd values are ${i}`);
  }
}

let ag = 23;

console.log("************************************");
for (let i = 1; i <= 10; console.log(i)) {
  i++;
}

// i =1 , 1 <=10 , i =2 , 2 
// i =2,  2 <=10 , i =3, 3 
//............
// i=10, 10<=10 , i=11, 11

// prime number - 1 , self (2,3,5,7,11 .....)
console.log("************************************")
let ar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 3, 4,76,76];
console.log(ar);
document.write(ar)

for(let i=0; i<ar.length; i++){
    console.log(ar[i]);
}