function rotate(arr, rotation){
    for(let i = 0; i < rotation; i++){
        let num = arr.shift() ;
        arr.push(num) ;
    }

    let str = "" ;

    arr.forEach(element => {
        str += element + " " ;
    });
    
    console.log(str) ;
}

rotate([51, 47, 32, 61, 21], 2) ;