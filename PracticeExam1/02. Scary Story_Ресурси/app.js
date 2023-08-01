  window.addEventListener("load", solve) ;

  function solve() {
    let publishButton = document.getElementById("form-btn") ;

    let firstNameInputField = document.getElementById("first-name") ;
    let lastNameInputField = document.getElementById("last-name") ;
    let ageInputField = document.getElementById("age") ;
    let titleInputField = document.getElementById("story-title") ;
    let genreInputField = document.getElementById("genre") ;
    let storyInputField = document.getElementById("story") ;

    let previewList = document.getElementById("preview-list") ;

    let li = document.createElement("li") ;
    li.classList.add("story-info") ;
    let article = document.createElement("article") ;
    let h4 = document.createElement("h4") ;
    let p1 = document.createElement("p") ;
    let p2 = document.createElement("p") ;
    let p3 = document.createElement("p") ;
    let p4 = document.createElement("p") ;

    let button1 = document.createElement("button") ;
    button1.classList.add("save-btn") ;
    let button2 = document.createElement("button") ;
    button2.classList.add("edit-btn") ;
    let button3 = document.createElement("button") ;
    button3.classList.add("delete-btn") ;

    publishButton.addEventListener("click", publishClickHandler) ;



    function publishClickHandler(){
      if(firstNameInputField.value === "" 
          || lastNameInputField.value === ""
          || ageInputField.value === ""
          || titleInputField.value === ""
          || genreInputField.value === ""
          || storyInputField.value === ""
          || parseInt(ageInputField.value) <= 0)
      {
          return ;
      }
      
      createPreview() ;

      publishButton.disabled = true ;

      clearFormFields() ;
    }

    function createPreview(){

      h4.innerText = `Name: ${firstNameInputField.value} ${lastNameInputField.value}` ;
      p1.innerText = `Age: ${ageInputField.value}` ;
      p2.innerText = `Title: ${titleInputField.value}` ;
      p3.innerText = `Genre: ${genreInputField.value}` ;
      p4.innerText = storyInputField.value ;

      article.appendChild(h4) ;
      article.appendChild(p1) ;
      article.appendChild(p2) ;
      article.appendChild(p3) ;
      article.appendChild(p4) ;

      li.appendChild(article) ;

      button1.innerText = "Save Story" ;
      button2.innerText = "Edit Story" ;
      button3.innerText = "Delete Story" ;

      button1.addEventListener("click", saveStoryEventHandler) ;
      button2.addEventListener("click", editStoryEventHandler) ;
      button3.addEventListener("click", deleteStoryEventHandler) ;

      li.appendChild(button1) ;
      li.appendChild(button2) ;
      li.appendChild(button3) ;

      previewList.appendChild(li) ;
    }

    function saveStoryEventHandler(){
      let mainDiv = document.getElementById("main") ;

      let h1 = document.createElement("h1") ;
      h1.innerText = "Your scary story is saved!" ;

      mainDiv.innerHTML = '' ;

      mainDiv.appendChild(h1) ;
    }

    function editStoryEventHandler(){
      firstNameInputField.value = h4.innerText.split(" ")[1] ;
      lastNameInputField.value = h4.innerText.split(" ")[2] ;
      ageInputField.value = p1.innerText.split(" ")[1] ;
      titleArr = p2.innerText.split(" ") ;
      titleArr.shift() ;
      titleArr = titleArr.join(" ") ;
      titleInputField.value = titleArr ;
      genreInputField.value = p3.innerText.split(" ")[1] ;
      storyInputField.value = p4.innerText ;

      previewList.removeChild(li) ;

      publishButton.disabled = false ;
    }

    function deleteStoryEventHandler(){
      previewList.removeChild(li) ;

      publishButton.disabled = false ;
    }

    function clearFormFields(){
      firstNameInputField.value = "" 
      lastNameInputField.value = ""
      ageInputField.value = ""
      titleInputField.value = ""
      genreInputField.value = ""
      storyInputField.value = ""
    }
  }
