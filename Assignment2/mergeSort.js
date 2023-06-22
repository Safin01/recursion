const mergerSort = (arr) =>{
    if(arr.length <= 1){
        return arr;
    }

    const middle = Math.floor(arr.length / 2);

    const leftHalf = arr.slice(0, middle);
    const rightHalf = arr.slice(middle);

    const sortedLeft = mergerSort(leftHalf);
    const sortedRight = mergerSort(rightHalf);

    return merge(sortedLeft, sortedRight);
}

const merge = (left, right) =>{
    let mergeArray = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while(leftIndex < left.length && rightIndex < right.length){
        if(left[leftIndex] <= right[rightIndex]){
            mergeArray.push(left[leftIndex]);
            leftIndex++;
        }else{
            mergeArray.push(right[rightIndex]);
            rightIndex++;
        }
    }

    while(leftIndex < left.length){
        mergeArray.push(left[leftIndex]);
        leftIndex++;
    }

    while(rightIndex < right.length){
        mergeArray.push(right[rightIndex]);
        rightIndex++;
    }

    return mergeArray;
}


const myArray = [10, 4, 3,2, 1, 6, 8, 4, 3];
const sortedArray = mergerSort(myArray);
console.log(sortedArray);