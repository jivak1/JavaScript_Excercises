function attachEvents() {
  let addButton = document.getElementById("add-button") ;
  let loadButton = document.getElementById("load-button") ;
  let todoListUl = document.getElementById("todo-list") ;
  let titleInput = document.getElementById("title") ;

  addButton.addEventListener("click", addEventHandler) ;
  loadButton.addEventListener("click", loadEventHandler) ;

  function addEventHandler(event){
    event.preventDefault();

    let newToDo = {} ;
    newToDo.name = titleInput.value ;

    fetch("http://localhost:3030/jsonstore/tasks/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newToDo) 
    })
    .then(response => {
        loadItems() ;
    })
    .catch(error => {

    })

  }

  function loadEventHandler(event){
    event.preventDefault();
    loadItems() ;
  }

  function removeEventHandler(event){
    fetch(`http://localhost:3030/jsonstore/tasks/${event.target.value}`, {
        method: "DELETE"
    })
    .then(response => {
        loadItems() ;
    })
    .catch(error => {

    })
  }
  let submitTextStr = "" ;
  function editEventHandler(event){
    let li = event.target.parentElement ;
    
    let newInput = document.createElement("input") ;

    newInput.value = li.children[0].innerText ;

    li.replaceChild(newInput, li.children[0]) ;

    let edditButton = li.children[2] ;


    edditButton.innerText = "Submit"
    edditButton.addEventListener("click", function(event){
        submitTextStr = newInput.value ;
        submitEventHandler(event) ;
     }) ;

  }

  function submitEventHandler(event){
    fetch(`http://localhost:3030/jsonstore/tasks/${event.target.value}`, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify({
            name: submitTextStr
        })
    })

    loadItems() ;
  }

  function loadItems(){
    todoListUl.innerHTML = '' ;

    fetch("http://localhost:3030/jsonstore/tasks/")
    .then(response => response.json())
    .then(data => {
        Object.values(data).forEach((value) => {
            let newLi = document.createElement("li") ;
            let newSpan = document.createElement("span") ;
            let newRemoveBtn = document.createElement("button") ;
            let newEditBtn = document.createElement("button") ;

            newSpan.innerText = value.name ;

            newRemoveBtn.innerText = "Remove" ;
            newRemoveBtn.value = value["_id"] ;
            newEditBtn.innerText = "Edit" ;
            newEditBtn.value = value["_id"] ;

            newRemoveBtn.addEventListener("click", removeEventHandler) ;
            newEditBtn.addEventListener("click", editEventHandler) ;

            newLi.appendChild(newSpan) ;
            newLi.appendChild(newRemoveBtn) ;
            newLi.appendChild(newEditBtn) ;

            todoListUl.appendChild(newLi) ;
            
        }) ;

        
    })
    .catch(error => {
        console.log("Error") ;
    })


  }
}

attachEvents();
