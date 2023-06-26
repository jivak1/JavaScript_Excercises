function specialWords(str)
{
    let matches = str.matchAll(/#[^ ]+/g) ;

    for(let match of matches){
        let word = match[0] ;
        word = word.substring(1, word.length) ;
        let regex = /^[a-zA-Z]+$/ ;
        if(regex.test(word))
        {
            console.log(word) ;
        }
    }

}

specialWords('Nowadays everyone uses # to tag a #special word in #socialMedia')