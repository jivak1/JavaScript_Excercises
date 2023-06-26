function findDigitSum(num){

    let digit ;
    let sum = 0 ;
    let numLength = num.toString().length ;

    for(let i = 1; i <= numLength; i++){
        digit = num % 10 ;
        num = Math.floor(num / 10) ;
        sum += digit ;
    }

    console.log(sum)
}

findDigitSum(245678) ;