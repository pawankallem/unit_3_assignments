
let arr=[2,4,3,5,1];
let n=5;

function printArray(arr,n, cur){
    if (cur == n) return ;
    // console.log(arr[cur]);
    printArray(arr,n,cur+1);
}

printArray(arr,n,0);

function sum(arr,n, cur){
    if (n== cur) return 0;
    return arr[cur] + sum(arr,n,cur+1);
}

console.log(sum(arr,n,0));

function sum1(arr,n){
    sum = 0;
    for (i = 0;i<n;i++){
        sum += arr[i]
    }
    return sum
}

console.log(sum1(arr,n));
