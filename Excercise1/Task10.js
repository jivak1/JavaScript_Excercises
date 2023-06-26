function sameNumbers(num)
{
    let firstDigit = num % 10 ;
    let sum = 0 ;
    let isSame = true;

    for(; num !== 0; ){
        let digit = num % 10 ;
        if(firstDigit !== digit)
        {
            isSame = false ;
        }
        sum += digit ;

        num = Math.floor(num / 10) ;
    }

    console.log(isSame) ;
    console.log(sum) ;
}

sameNumbers(2222222) ;