function fibs(n){
    let arr = [];
    arr[0] = 0;
    arr[1] = 1;
    for(let i = 2; i<=n; i++){
        arr[i] = arr[i - 1] + arr[i - 2];
    }

    for(let i = 0; i<n; i++){
        console.log(arr[i]);
    }
}

fibs(8);