const text = "nama saya adalah budi, saya bekerja sebagai frontend engineer";

let pattern = /frontend/gi;
let replacement = "javascript";

let my_new_string = text.replaceAll(pattern,replacement);
console.log(my_new_string);

let my_new_string_sub = text.substring(text);
console.log(my_new_string_sub);

let my_new_string_up = text.toUpperCase(text);
console.log(my_new_string_up);

const array = [1000, 20, 15, 18, 1, 9, 35];
let descending = array.sort((a,b)=> b-a);
console.log(descending);
let ascending = array.sort((a,b)=> a-b);
console.log(ascending);


let index1 = text.indexOf('frontend engineer');
console.log(index1);

let index2 = text.includes('frontend engineer');
console.log(index2);

let index3 = array.indexOf(18);
console.log(index3);

let index4 = array.includes(2000);
console.log(index4);

const return1 = array.filter((nilai)=>nilai <1000);
console.log(return1);

const return2 = array.filter((nilai2)=>nilai2 == 1000);
console.log(return2);

const isObject = {
    nama_mobil: "ferrari",
    kecepatan: "6000 cc",
    harga: 20000000000,
    tipe: "tidak diketahui"
}
const arrayOf = [{
    nama_mobil: "lamborgini",
    kecepatan: "8000 cc",
    harga: 70000000000,
    tipe: "aventador"
}]

let description = Object.assign(isObject,arrayOf);
console.log(description);

let x = myfunction(4,3);
function myfunction(a,b){
   return a*b;
}
console.log(x);
