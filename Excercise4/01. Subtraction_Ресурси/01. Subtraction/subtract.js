function subtract() {
    let firstNumber = parseFloat(document.getElementById("firstNumber").value) ;
    let secondNumber = parseFloat(document.getElementById("secondNumber").value) ;

    let result = firstNumber - secondNumber ;

    let resultDiv = document.getElementById("result") ;
    resultDiv.textContent = result ;
}



