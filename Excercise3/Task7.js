function oddOccurances(arr){
    arr = arr.split(" ") ;

    let wordTrackerObj = {} ;

    arr.forEach(element => {
        wordTrackerObj[element.toLowerCase()] = (wordTrackerObj[element] === undefined ? 0 : wordTrackerObj[element]) + 1 ;
    });

    let wordsToOutput = [] ;

    Object.entries(wordTrackerObj).forEach(([key, value]) => {
        if(value % 2 !== 0){
            wordsToOutput.push(key) ;
        }
    })

    wordsToOutput = wordsToOutput.join(" ") ;

    console.log(wordsToOutput) ;
}

oddOccurances('Java C# Php PHP Java PhP 3 C# 3 1 5 C#') ;