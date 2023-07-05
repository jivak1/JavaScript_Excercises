function charRange(char1, char2){
    let startCode = char1.charCodeAt(0) ;
    let endCode = char2.charCodeAt(0) ;
    let answer = "" ;

    if(startCode > endCode){
        [startCode, endCode] = [endCode, startCode];
    }

    for(let i = startCode + 1; i < endCode; i++){
        answer += String.fromCharCode(i) + " " ;
    }

    console.log(answer) ;
}

charRange('C', '#') ;