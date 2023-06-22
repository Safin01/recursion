let arr = [0,1];
let k = 2;
const fibsRec = (n) => {
    if(arr.length >= n){
        return arr.slice(0,n);
    }else{
        arr[k] = arr[k-1] + arr[k-2];
        k++;
        return fibsRec(n);
    }
}

console.log(fibsRec(10));