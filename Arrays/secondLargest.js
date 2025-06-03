// write a fucntion to find out the second largest element in an array

let arr = [12,10,12, 12]

function secondLargest(arr){
    let largest = -Infinity
    let secondLargest = -Infinity
    for(let i=0;i<arr.length;i++){
        if(arr[i]>largest){
            secondLargest = largest
            largest =arr[i]
        }else if((arr[i]>secondLargest && arr[i]!=largest)) secondLargest =arr[i]
    }
    return secondLargest
}

console.log(secondLargest(arr))