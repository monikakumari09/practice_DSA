function rightRotate(arr, d, n){
    arr = reverseArray(arr, 0, n-1);
    arr = reverseArray(arr, 0, d-1);
    arr = reverseArray(arr, d, n-1);

    return arr;

}

function reverseArray(arr, start, end) {
    while(start<end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    return arr;
 
}

var arr = ['a','b','c','d','e']
arr = rightRotate(arr, 2, 5);
console.log(arr);

// for(let i = 0; i<5; i++){
// console.log(arr[i]);