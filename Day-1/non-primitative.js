
let array=[1,3,5,6,9,15];

let copy=[];

array.map(function(elem){
    copy.push(elem);
})


copy[0]=99;

console.log(copy);

console.log(array);