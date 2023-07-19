function parkingLot(arr){

    let trackerObj = {} ;

    arr = arr.map( element => {
        return element.split(", ") ;
    })

    arr = arr.flat() ;

    for(let i = 0; i < arr.length - 1; i += 2){
        trackerObj[arr[i + 1]] = arr[i] ;
    }

    let trackerArray = Object.entries(trackerObj).filter(([key, value]) => {
        if(value === "IN")
            return true ;
        else
            return false ;
    }).map(([key, value]) => {
        return key ;
    }) ;

    trackerArray.sort()

    trackerArray.forEach(element => {
        console.log(element) ;
    })
}

parkingLot(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']) ;