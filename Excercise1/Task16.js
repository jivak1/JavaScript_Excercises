function specialSort(arr){
    let sortedArr = [...arr].sort(function(a,b){
        return a - b ;
    });
    let finalArr = [];

    for(let i = 0; i < arr.length / 2; i++){
        finalArr.push(sortedArr[i]) ;
        finalArr.push(sortedArr[arr.length - i - 1]) ;
        
    }
    if(arr.length % 2 !== 0){
        finalArr.pop() ;
    }
    return finalArr ;
}

specialSort([1, 65, 3, 52, 48, 63, 31, -3, 18, 56, -5]) ;