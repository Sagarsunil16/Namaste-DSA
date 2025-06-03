// write a function that returns the largest number in an array

let arr = [-12,-433,-12,-454,-12,-5]

function findLargest(arr){
    let largest = arr[0]
    for(let i=0;i<arr.length;i++){
        if(arr[i]>largest){
            largest = arr[i]
        }
    }
    return largest
}

console.log(findLargest(arr))