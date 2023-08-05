window.addEventListener("load", solve);

function solve() {
    let studentInputField = document.getElementById("student") ;
    let universityInputField = document.getElementById("university") ;
    let scoreInputField = document.getElementById("score") ;
    let nextButton = document.getElementById("next-btn") ;
    let previewList = document.getElementById("preview-list")

    nextButton.addEventListener("click", nextEventHandler) ;


    function nextEventHandler(event){
      event.preventDefault ;


      let studentName = studentInputField.value ;
      let universityName = universityInputField.value ;
      let score = scoreInputField.value ;

      if(studentName === "" || universityName === "" || score === ""){
        return ;
      }

      let li = document.createElement("li") ;

      li.classList.add("application") ;

      let article = document.createElement("article") ;

      article.display = "flex" ;

      let h4 = document.createElement("h4") ;
      let p1 = document.createElement("p") ;
      let p2 = document.createElement("p") ;

      h4.innerText = studentName ;
      p1.innerText = `University: ${universityName}` ;
      p2.innerText = `Score: ${score}` ;

      article.appendChild(h4) ;
      article.appendChild(p1) ;
      article.appendChild(p2) ;

      let edditBtn = document.createElement("button") ;
      let applyBtn = document.createElement("button") ;

      edditBtn.classList.add("action-btn") ;
      edditBtn.classList.add("edit") ;
      applyBtn.classList.add("action-btn") ;
      applyBtn.classList.add("apply") ;

      edditBtn.innerText = "edit" ;
      applyBtn.innerText = "apply" ;

      edditBtn.addEventListener("click", editEventHandler) ;
      applyBtn.addEventListener("click", applyEventHandler) ;

      li.appendChild(article) ;

      li.appendChild(edditBtn) ;
      li.appendChild(applyBtn) ;

      nextButton.disabled = true ;

      previewList.appendChild(li) ;

      universityInputField.value = "" ;
      studentInputField.value = "" ;
      scoreInputField.value = "" ;
    }

    function editEventHandler(event){
      let li = event.target.parentElement;
      let article = li.children[0] ;
      studentInputField.value = article.children[0].innerText ;
      universityInputField.value = article.children[1].innerText.split(" ")[1] ;
      scoreInputField.value = article.children[2].innerText.split(" ")[1] ;

      nextButton.disabled = false ;

      previewList.removeChild(article.parentElement) ;


    }
    function applyEventHandler(event){
      let li = event.target.parentElement ;
      let article = li.children[0] ;

      let candidateslist = document.getElementById("candidates-list") ;

      li.removeChild(li.children[1]) ;
      li.removeChild(event.target) ;

      candidateslist.appendChild(li) ;

      nextButton.disabled = false ;
    }
  }
  