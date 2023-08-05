function  vacation(){
    let nameInputField = document.getElementById("name")
    let numDaysInputField = document.getElementById("num-days") ;
    let fromDateInputField = document.getElementById("from-date") ;
    let addVacationBtn = document.getElementById("add-vacation") ;
    let editVacationBtn = document.getElementById("edit-vacation") ;
    let loadVacationsBtn = document.getElementById("load-vacations") ;
    let vacationList = document.getElementById("list") ;

    let vacationIdHolder = null ;

    addVacationBtn.addEventListener("click", addVacationEventHandler) ;
    editVacationBtn.addEventListener("click", editVacationEventHandler) ;
    loadVacationsBtn.addEventListener("click", loadVacationEventHandler) ;

    function addVacationEventHandler(event){
        event.preventDefault() ;

        let newVacation = {} ;

        newVacation.name = nameInputField.value ;
        newVacation.days = numDaysInputField.value ;
        newVacation.date = fromDateInputField.value ;

        clearInputFields() ;

        fetch("http://localhost:3030/jsonstore/tasks/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newVacation) 
        })
        .then(response => {
            loadVacations() ;
        })
    }

    function editVacationEventHandler(event){
        event.preventDefault() ;

        let edditedVacation = {} ;
        
        edditedVacation.name = nameInputField.value ;
        edditedVacation.days = parseInt(numDaysInputField.value) ;
        edditedVacation.date = fromDateInputField.value ;

        clearInputFields() ;

        fetch(`http://localhost:3030/jsonstore/tasks/${vacationIdHolder}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(edditedVacation) 
        })
        .then(response => {
            editVacationBtn.disabled = true ;
            addVacationBtn.disabled = false ;

            loadVacations() ;
        })
        
    }

    function loadVacationEventHandler(){
        loadVacations() ;
    }

    function loadVacations(){
        fetch("http://localhost:3030/jsonstore/tasks/")
        .then(response => response.json())
        .then(data => {
            vacationList.innerHTML = "" ;
            Object.entries(data).forEach(([key, value]) => {
                let div = document.createElement("div") ;

                div.classList.add("container") ;

                let h2 = document.createElement("h2") ;
                let h3First = document.createElement("h3") ;
                let h3Second = document.createElement("h3") ;
                let changeBtn = document.createElement("button") ;
                let doneBtn = document.createElement("button") ;

                h2.innerText = value.name ;
                h3First.innerText = value.date ;
                h3Second.innerText = value.days ;

                changeBtn.innerText = "Change" ;
                doneBtn.innerText = "Done" ;

                changeBtn.classList.add("change-btn") ;
                doneBtn.classList.add("done-btn") ;

                changeBtn.value = key ;
                doneBtn.value = key ;

                changeBtn.addEventListener("click", changeEventHandler) ;
                doneBtn.addEventListener("click", doneEventHandler) ;

                div.appendChild(h2) ;
                div.appendChild(h3First) ;
                div.appendChild(h3Second) ;
                div.appendChild(changeBtn) ;
                div.appendChild(doneBtn) ;

                vacationList.appendChild(div) ;

            });
        })
    }

    function changeEventHandler(event){
        let changeBtn = event.target ;
        let div = changeBtn.parentElement ;

        nameInputField.value = div.children[0].innerText ;
        fromDateInputField.value = div.children[1].innerText ;
        numDaysInputField.value = parseInt(div.children[2].innerText) ;

        vacationList.removeChild(div) ;

        vacationIdHolder = changeBtn.value ;

        addVacationBtn.disabled = true ;
        editVacationBtn.disabled = false ;
    }
    function doneEventHandler(event){
        
        fetch(`http://localhost:3030/jsonstore/tasks/${event.target.value}`, {
            method: "DELETE"
        })
        .then(response => {
            loadVacations() ;
        })

    }

    function clearInputFields(){
        nameInputField.value = "" ;
        numDaysInputField.value = "" ;
        fromDateInputField.value = "" ;

    }
}

vacation() ;