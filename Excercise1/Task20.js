function pascalSplitter(word){
    let arr = word.match(/[A-Z][a-z]+/g)
    let finalStr = "" ;
    arr.forEach(element => {
        finalStr += element + ", " ;
    });

    finalStr = finalStr.substring(0, finalStr.length - 2) ;

    console.log(finalStr) ;
}

pascalSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan') ;