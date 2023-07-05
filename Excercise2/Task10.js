function factorialDivision(num1, num2){

    function findFactorial(num){
        let fact = 1 ;

        for(let i = 1 ; i <= num; i++){
            fact *= i ;
        }

        return fact ;
    }

    num1Factorial = findFactorial(num1) ;
    num2Factorial = findFactorial(num2) ;

    let devision = num1Factorial / num2Factorial ;

    console.log(devision.toFixed(2)) ;
}

factorialDivision(5, 2) ;