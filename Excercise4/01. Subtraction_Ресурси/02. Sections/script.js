function create(words) {
   let content = document.getElementById("content") ;

   words.forEach(word => {
      let element = document.createElement("div") ;

      let paragraph = document.createElement("p") ;

      paragraph.textContent = word ;

      paragraph.style.display = "none" ;


      element.appendChild(paragraph) ;

      element.onclick = () => {
         paragraph.style.display = "block" ;
      }

      content.appendChild(element) ;
   });
}