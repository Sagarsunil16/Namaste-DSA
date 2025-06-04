//write a funtion that returns the count of digits in a number;

function countDigits(num){
    let count = 0
    while(num>0){
        num = Math.floor(num/10);
        count++
    }
     return count
}

console.log(countDigits(124))