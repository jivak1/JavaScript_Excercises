function findAge(age)
{
    switch(true){
        case age < 0:
            console.log("out of bounds") ;
        break ;
        case age < 3:
            console.log("baby")
        break ;
        case age < 14:
            console.log("child")
        break ;
        case age < 20:
            console.log("teenager")
        break ;
        case age < 66:
            console.log("adult")
        break ;
        case age >= 66:
            console.log("elder")
        break ;
    }
}

let a = 65 ;
findAge(a) ;