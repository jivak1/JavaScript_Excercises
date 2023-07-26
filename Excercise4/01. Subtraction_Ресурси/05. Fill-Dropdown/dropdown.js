function addItem() {
    let textInputField = document.getElementById("newItemText") ;
    let valueInputField = document.getElementById("newItemValue") ;

    let textInput = textInputField.value ;
    let valueInput = valueInputField.value ;

    let newOption = document.createElement("option") ;

    newOption.textContent = textInput ;
    newOption.value = valueInput ;

    let menu = document.getElementById("menu") ;

    menu.appendChild(newOption) ;

    textInputField.value = "" ;
    valueInput.value = "" ;
}