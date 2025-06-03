function printPattern(n){
    for(let i=0;i<n;i++){
        let row = ""
        for(let j=0;j<=i;j++){
            row = row +" "+  (j%2!=0?0:1)
        }
        console.log(row)
    }
}

printPattern(5)