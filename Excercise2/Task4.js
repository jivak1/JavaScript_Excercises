function evenAndOddSum(num){
    let evenSum = 0 ;
    let oddSum = 0 ;
    for(let i = 1; num !== 0; i++ ){
        let digit = num % 10 ;
        num = Math.floor(num / 10) ;
        if(digit % 2 === 0){
            evenSum += digit ;
        }else{
            oddSum += digit ;
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`) ;
}

evenAndOddSum(1000435) ;