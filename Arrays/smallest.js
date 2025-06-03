let arr = [-12,-433,-12,-454,-12,-5]

function findSmallest(arr){
      let smallest =arr[0]
    for(let i=0;i<arr.length;i++){
        if(arr[i]<smallest){
            smallest = arr[i]
        }
    }
    return smallest
}


console.log(findSmallest(arr))