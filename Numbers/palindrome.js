//try to solve the leetcode 9

let num =  1221

function palindorme(num){
    
    let actualNum = num
    let reverse = 0
    while(num>0){
        let rem = num%10;
        reverse = (10*reverse)+rem;
        num = Math.floor(num/10)
    }
    console.log(actualNum,reverse)
    return actualNum === Number(reverse)?true:false
}


console.log(palindorme(num))
