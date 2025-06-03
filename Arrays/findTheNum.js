// write a fucntion that searches for an element in an array and return the index, if the element is not present then just return -1 

let arr = [12,433,12,454,12,5]

function findElem(arr,elem){
    for(let i=0;i<arr.length;i++){
        if(arr[i] == elem){
            return i
        }
    }
    return -1
}

console.log(findElem(arr,12))
console.log(findElem(arr,2))