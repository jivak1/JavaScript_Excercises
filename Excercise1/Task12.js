function cooking(numStr, ...param){
    let num = parseInt(numStr) ;
    for(let i = 0; i < param.length; i++){
        switch(param[i]){
            case "chop":
                num = num / 2 ;
            break ;
            case "dice":
                num = Math.sqrt(num) ;
            break ;
            case "spice":
                num += 1 ;
            break ;
            case "bake":
                num *= 3 ;
            break ;
            case "fillet":
                num = num * 0.8 ;
                num = num.toFixed(1) ;
            break ;
        }
        console.log(num) ;
    }
}

cooking('9', 'dice', 'spice', 'chop', 'bake',
'fillet') ;