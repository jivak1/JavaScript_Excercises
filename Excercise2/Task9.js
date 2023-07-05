function loadingBar(num){
    let answer = num !== 100? `${num}% ` : "" ;
    answer += "["

    answer += '%'.repeat(num / 10) ;
    answer += '.'.repeat(10 - num/10) ;
    answer += ']' ;

    if(100 - num === 0){
        console.log("100% Complete!")
        console.log(answer) ;
    }else{
        console.log(answer) ;
        console.log("Still loading...")
    }
}

loadingBar(10) ;