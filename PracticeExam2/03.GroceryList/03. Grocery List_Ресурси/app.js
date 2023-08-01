function groceryList(){
    let addProductButton = document.getElementById("add-product") ;
    let updateProductButton = document.getElementById("update-product") ;
    let loadProductButton = document.getElementById("load-product") ;
    let tbody = document.getElementById("tbody") ;

    let nameInputField = document.getElementById("product") ;
    let countInputField = document.getElementById("count") ;
    let priceInputField = document.getElementById("price") ;

    addProductButton.addEventListener("click", addProductEventHandler) ;
    updateProductButton.addEventListener("click", updateProductEventHandler) ;
    loadProductButton.addEventListener("click", loadProductEventHandler) ;

    function addProductEventHandler(event){
        event.preventDefault() ;

        let newProduct = {}

        newProduct.product = nameInputField.value ;
        newProduct.count = countInputField.value ;
        newProduct.price = priceInputField.value ;

        fetch("http://localhost:3030/jsonstore/grocery/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newProduct) 
        })
        .then(response => {
            clearInputFields() ;
            loadItems() ;
        }) ;
    }

    function clearInputFields(){
        nameInputField.value = "" ;
        countInputField.value = "" ;
        priceInputField.value = "" ;
    }

    let idToUpdate = null ;

    function updateProductEventHandler(){
        let productToUpdate = {} ;
        if(nameInputField.value !== ""){
            productToUpdate.product = nameInputField.value ;
        }
        if(countInputField.value !== ""){
            productToUpdate.count = countInputField.value ;
        }
       if(priceInputField.value !== ""){
            productToUpdate.price = priceInputField.value ;
       }
        

        fetch(`http://localhost:3030/jsonstore/grocery/${idToUpdate}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify(productToUpdate)
        })
        .then(response => {
            loadItems() ;
            addProductButton.disabled = false ;
            updateProductButton.disabled = true ;
            clearInputFields() ;
        })


        idToUpdate = null ;

    }
    function loadProductEventHandler(event){
        event.preventDefault() ;

        loadItems() ;
    }

    function clearProducts(){
        tbody.innerHTML = "" ;
    }

    function loadItems(){
        clearProducts() ;
        fetch("http://localhost:3030/jsonstore/grocery/")
        .then(response => response.json())
        .then(data => {
            Object.values(data).forEach(element => {
                let newTr = document.createElement("tr") ;

                let nameTd = document.createElement("td") ;
                let countTd = document.createElement("td") ;
                let priceTd = document.createElement("td") ;
                let buttonsTd = document.createElement("td") ;

                let updateBtn = document.createElement("button") ;
                let deleteBtn = document.createElement("button") ;

                nameTd.classList.add("name") ;
                countTd.classList.add("count-product") ;
                priceTd.classList.add("product-price") ;
                buttonsTd.classList.add("btn") ;
                updateBtn.classList.add("update") ;
                deleteBtn.classList.add("delete") ;

                nameTd.innerText = element.product ;
                countTd.innerText = element.count ;
                priceTd.innerText = element.price ;

                updateBtn.innerText = "Update" ;
                deleteBtn.innerText = "Delete" ;

                updateBtn.value = element["_id"] ;
                deleteBtn.value = element["_id"] ;

                updateBtn.addEventListener("click", updateBtnEventHandler) ;
                deleteBtn.addEventListener("click", deleteBtnEventHandler) ;

                buttonsTd.appendChild(updateBtn) ;
                buttonsTd.appendChild(deleteBtn) ;

                newTr.appendChild(nameTd) ;
                newTr.appendChild(countTd) ;
                newTr.appendChild(priceTd) ;
                newTr.appendChild(buttonsTd) ;

                tbody.appendChild(newTr) ;
            });
        })
        .catch(error => {

        })
    }

    function updateBtnEventHandler(event){
        updateProductButton.disabled = false ;
        addProductButton.disabled = true ;

        idToUpdate = event.target.value ;
    }

    function deleteBtnEventHandler(event){
        fetch(`http://localhost:3030/jsonstore/grocery/${event.target.value}`, {
            method: "DELETE"
        })
        .then(response => {
            loadItems() ;
        })
    }
}

groceryList() ;