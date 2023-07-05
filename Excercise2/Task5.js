// function isPolindrome(element){
//     let elementStr = "" + element ;
//     if(elementStr === [...elementStr].reverse().join('')){
//         return true ;
//     }else{
//         return false ;
//     }
// }

function polindromeChecker(arr){
    function isPolindrome(element){
        let elementStr = "" + element ;
        if(elementStr === [...elementStr].reverse().join('')){
            return true ;
        }else{
            return false ;
        }
    }
    arr.forEach(element => {
        if(isPolindrome(element)){
            console.log(true) ;
        }else{
            console.log(false) ;
        }
    });
}

polindromeChecker([123,323,421,121]) ;