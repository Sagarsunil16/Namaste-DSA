// write a function that returns the number of negative numbers in an array

let arr = [12,34,-123,-23,-11,-1234,-2,0,12,4,1]
function countNegs(arr){
    let count = 0
    for(let i =0;i<arr.length;i++){
        if(arr[i]<0){
            count++
        }
    }
    return count
}

console.log(countNegs(arr))