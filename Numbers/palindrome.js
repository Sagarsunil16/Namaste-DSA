let num =  1221

function palindorme(num){
    if(num<10){
        return true
    }
    let actualNum = num
    let reverse = ""
    while(num>0){
        let rem = num%10;
        reverse+=rem;
        num = Math.floor(num/10)
    }
    console.log(actualNum,reverse)
    return actualNum === Number(reverse)?true:false
}


console.log(palindorme(num))