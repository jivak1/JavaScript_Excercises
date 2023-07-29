function wordsTracker(arr){
    let wordsToTrackArr = arr[0].split(" ") ;
    
    let wordsTrackerObj = {} ;

    for(let i = 1; i < arr.length; i++){
        if(wordsToTrackArr.includes(arr[i])){
            wordsTrackerObj[arr[i]] = (wordsTrackerObj[arr[i]] === undefined ? 0 : wordsTrackerObj[arr[i]]) + 1 ;
        }
    }

    let wordsCountArray = Object.entries(wordsTrackerObj).map(([key, value]) => {
        return { word: key, count: value };
      });

    wordsCountArray.sort((a, b) => {
        return b.count - a.count  ;
    })

    wordsCountArray.forEach(element => {
        console.log(`${element.word} - ${element.count}`) ;
    })
}

wordsTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
    ]) ;