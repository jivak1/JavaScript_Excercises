function storeProvision(...arr){
    arr = arr.flat() ;

    let stockObj = {} ;

    for(let i = 0; i < arr.length - 1; i += 2){

        stockObj[arr[i]] = (stockObj[arr[i]] === undefined ? 0 : stockObj[arr[i]]) + parseInt(arr[i + 1]);

    }


    Object.entries(stockObj).forEach(([key, value]) => {
        console.log(`${key} -> ${value}`) ;
    }) ;
    
}

storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7',
    'Tomatoes', '70', 'Bananas', '30'
    ]) ;