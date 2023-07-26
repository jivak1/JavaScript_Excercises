function solve() {
  let textField = document.getElementsByTagName("textarea")[0] ;

  let text = textField.value ;

  let sentences = text.split(".") ;

  sentences.pop() ;

  for(let i = 0; i < sentences.length; i++){
    sentences[i] += '.' ;
  }

  let output = document.getElementById("output") ;

  for(let i = 0; i < sentences.length; i += 3){
    let paragraph = document.createElement("p") ;

    if(sentences[i] !== undefined){
      paragraph.innerText += sentences[i] ;
    }

    if(sentences[i+1] !== undefined){
      paragraph.innerText += sentences[i+1] ;
    }

    if(sentences[i+1] !== undefined){
      paragraph.innerText += sentences[i+1] ;
    }

    output.appendChild(paragraph) ;
  }
}