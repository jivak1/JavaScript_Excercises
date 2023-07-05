function passwordChecker(password){

    function isOnlyLettersAndDigits(password){
        let isValid = true ;
        let passwordArr = [...password] ;

        passwordArr.forEach(element => {
            if((element >= 0 && element <= 9) || (element >= 'A' && element <= 'Z') || (element >= 'a' && element <= 'z')){
                
            }else{
                isValid = false ;
            }
        });

        return isValid ;
    }

    function has2DigitsOrMore(password){
        let digitCounter = 0 ;
        let passwordArr = [...password] ;

        passwordArr.forEach(element => {
            if(element >= 0 && element <= 9){
                digitCounter++ ;
            }
        });

        if(digitCounter >= 2){
            return true ;
        }
    }

    let isValid = true ;

    if(password.length >= 6 && password.length <= 10){

    }else{
        isValid = false ;
        console.log("Password must be between 6 and 10 characters") ;
    }

    if(isOnlyLettersAndDigits(password)){

    }else{
        isValid = false ;
        console.log("Password must consist only of letters and digits") ;
    }

    if(has2DigitsOrMore(password)){

    }else{
        isValid = false ;
        console.log("Password must have at least 2 digits") ;
    }

    if(isValid){
        console.log("Password is valid") ;
    }
}

passwordChecker("jqfnoij12") ;

