function perfectNumber(num){
    let divSum = 0 ;

    for(let i = 1; i <= Math.floor(num / 2); i++){
        if(num % i === 0){
            divSum += i ;
        }
    }

    if(num === divSum){
        console.log("We have a perfect number!") ;
    }else{
        console.log("It's not so perfect.") ;
    }
}