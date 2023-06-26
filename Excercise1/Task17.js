function replacer(words, sentance){
    let wordArr = words.split(", ") ;

    wordArr.forEach(element => {
        sentance = sentance.replace("*".repeat(element.length), element) ;
    });

    console.log(sentance) ;
}

replacer('great, learning',
'softuni is ***** place for ******** new programming languages') ;