function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let searchField = document.getElementById("searchField") ;

      let searchString = searchField.value ;

      searchField.value = "" ;

      let tbody = document.getElementsByTagName("tbody")[0] ;
      let rowList = tbody.getElementsByTagName("tr") ;

      for(let i = 0; i < rowList.length; i++){
         rowList[i].classList.remove("select") ;
      }

      for(let i = 0; i < rowList.length; i++){
         let currRow = rowList[i] ;
         if(currRow.innerText.includes(searchString)){
            currRow.classList.add("select")
         }
      }

   }
}