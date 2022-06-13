

let arr=[1,2,3,4];
Object.freeze(arr);
function copydata(arr){
    arr=[4,4,4,4];
    arr[0]=54;
    console.log(arr);
}
copydata(arr);
console.log(arr);

let n=arr.length;
let i=0;
function array(arr,n,i){
    if(i==n){
        return false;
    }
    console.log(i);
    array(arr,n,i+1);
}
array(arr,n,i);


function factorial(n){
    if(n==0 || n==1){
        return n;
    }

    return n*factorial(n-1);
}

console.log(factorial(5));