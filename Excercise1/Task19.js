function findSubstring(word, str){
    let lowerCasedStr = str.toLowerCase() ;
    let lowerCasedWord = word.toLowerCase() ;

    if(lowerCasedStr.includes(lowerCasedWord)){
        console.log(word) ;
    }else{
        console.log(`${word} not found!`)
    }
}

findSubstring('a','JavaScript is the best programming language')