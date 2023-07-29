function parseTableToObj(tableArr){
    let townArr = [] ;

    for(let i = 0; i < tableArr.length; i++){
        let townStrArr = tableArr[i].split(" | ") ;

        let townObj = {} ;

        townObj.town = townStrArr[0] ;
        townObj.latitude = parseFloat(townStrArr[1]).toFixed(2) ;
        townObj.longitude = parseFloat(townStrArr[2]).toFixed(2) ;

        townArr.push(townObj) ;
    }

    townArr.forEach(element => {
        console.log(element) ;
    });
}

parseTableToObj(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']) ;