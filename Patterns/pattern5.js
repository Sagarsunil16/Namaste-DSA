function printPattern(n){
    for(let i=n;i>0;i--){
        let row = ""
        for(let j=0;j<i;j++){
            row = row +" "+  (j+1)
        }
        console.log(row)
    }
}

printPattern(5)