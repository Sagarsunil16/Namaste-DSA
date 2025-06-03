function eligibleToVote(age){
    if(age<1){
        return "Input a valid age"
    }
    if(age>=18){
        return true
    }else{
        return false
    }
}

console.log(eligibleToVote(-1))