function pianist(input){
    let pieceArr = [] ;

    let pieceInitNum = parseInt(input[0]) ;

    for(let i = 1; i < pieceInitNum + 1; i++){
        let pieceObj = {} ;

        let pieceSplited = input[i].split("|") ;

        pieceObj.name = pieceSplited[0] ;
        pieceObj.composer = pieceSplited[1] ;
        pieceObj.key = pieceSplited[2] ;

        pieceArr.push(pieceObj) ;
    }

    for(let i = pieceInitNum + 1; input[i] !== 'Stop'; i++){
        let commandSplited = input[i].split("|") ;

        switch(commandSplited[0]) {
            case "Add":
                let newPiece = {} ;
                newPiece.name = commandSplited[1] ;
                newPiece.composer = commandSplited[2] ;
                newPiece.key = commandSplited[3] ;

                if(hasPiece(pieceArr, newPiece.name) !== null){
                    console.log(`${newPiece.name} is already in the collection!`) ;
                }else{
                    pieceArr.push(newPiece) ;
                    console.log(`${newPiece.name} by ${newPiece.composer} in ${newPiece.key} added to the collection!`) ;
                }

                break ;
            case "Remove":
                let newPiece1 = {} ;
                newPiece1.name = commandSplited[1] ;
                

                let index = hasPiece(pieceArr, newPiece1.name) ;

                if(index !== null){
                    pieceArr.splice(index, 1) ;
                    console.log(`Successfully removed ${newPiece1.name}!`);
                }else{
                    console.log(`Invalid operation! ${newPiece1.name} does not exist in the collection.`);
                }
                break ;
            case "ChangeKey" :
                let pieceName = commandSplited[1] ;
                let pieceKey = commandSplited[2] ;

                let index1 = hasPiece(pieceArr, pieceName) ;

                if(index1 !== null){
                    pieceArr[index1].key = pieceKey ;
                    console.log(`Changed the key of ${pieceName} to ${pieceKey}!`) ;
                }else{
                    console.log(`Invalid operation! ${pieceName} does not exist in the collection.`) ;
                }
                break ;
        } ;
    }

    for(let i = 0; i < pieceArr.length; i++){
        console.log(`${pieceArr[i].name} -> Composer: ${pieceArr[i].composer}, Key: ${pieceArr[i].key}`) ;
    }


    function hasPiece(pieceArr, pieceName){
        for(let i = 0; i < pieceArr.length; i++){
            if(pieceArr[i].name === pieceName){
                return i ;
            }
        }

        return null ;
    }
}

pianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'  
  ]) ;