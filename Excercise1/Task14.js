function nthArray(arr, n){
    let returnArr = []  ;
    
    for(let i = 0; i < arr.length; i += n){
        returnArr.push(arr[i]) ;
    }

    return returnArr ;
}

nthArray(['5',
'20',
'31',
'4',
'20'],
2) ;