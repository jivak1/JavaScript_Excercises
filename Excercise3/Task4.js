function moviesToObj(arr){
    let movieObjArr = [] ;

    arr.forEach(element => {
        switch(true){
            case element.includes("addMovie") :
            {
                let movieObj = {} ;
                movieObj.name = element.split(" ").slice(1).join(" ") ;
                movieObjArr.push(movieObj) ;
            }
            break ;
            case element.includes("directedBy"):
            {   
                let movieInfo = element.split(" directedBy ") ;

                let movieObj = movieObjArr.find(obj => obj.name === movieInfo[0]) ;

                if(movieObj !== undefined){
                    movieObj.director = movieInfo[1] ;
                }
            }
            break ;
            case element.includes("onDate"):
            {
                let movieInfo = element.split(" onDate ") ;

                let movieObj = movieObjArr.find(obj => obj.name === movieInfo[0]) ;

                if(movieObj !== undefined){
                    movieObj.date = movieInfo[1] ;
                }
            }
            break ;
        }
    });

    for(let i = 0; i < movieObjArr.length; i++){
        let element = movieObjArr[i] ;

        if(element.name === undefined || element.director === undefined || element.date === undefined)
            continue ;
            
        console.log(JSON.stringify(element)) ;
    }
}

moviesToObj([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis FordCoppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]) ;