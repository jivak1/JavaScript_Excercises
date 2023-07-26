function solve() {
  let buttons = document.getElementsByTagName("button") ;
  let generateButton = buttons[0] ;
  let buyButton = buttons[1] ;
  
  generateButton.addEventListener("click", generateHandler) ;

  buyButton.addEventListener("click", buyHandler) ;


  function generateHandler(event){
    
    let textArea = document.getElementsByTagName("textarea")[0] ;

    let text = textArea.value ;

    let jsonStrArr = JSON.parse(text) ;

    let tableBody = document.getElementsByTagName("tbody")[0] ;

    jsonStrArr.forEach(element => {
      tableBody.innerHTML += `<tr>
      <td>
          <img src="${element.img}">
      </td>
      <td>
          <p>${element.name}</p>
      </td>
      <td>
          <p>${element.price}</p>
      </td>
      <td>
          <p>${element.decFactor}</p>
      </td>
      <td>
          <input type="checkbox" />
      </td>
  </tr>`
    });

    console.log(tableBody.innerHTML) ;
  }

  function buyHandler(event){
    let furnitureChecked = Array.from(document.querySelectorAll('input[type = "checkbox"]:checked'))
                                      .map((element) => {
                                        let parentObj = element.parentElement.parentElement ;

                                        return parentObj ;
                                      });

    let furnitureNames = "" ;
    let totalPrice = 0.00 ;
    let decorationSum = 0.00 ;
    let avgDecoration ;

    furnitureChecked.forEach(element => {
      let furnitureInfoArr = Array.from(element.children) ;

      furnitureNames += furnitureInfoArr[1].children[0].textContent + ',' ;
      totalPrice += furnitureInfoArr[2].children[0].textContent ;
      decorationSum += furnitureInfoArr[3].children[0].textContent ;
    });

    avgDecoration = decorationSum / furnitureChecked.length ;

    console.log(totalPrice) ;

    let outputField = document.getElementsByTagName("textarea")[1] ;

    outputField.innerText = `Bought furniture: ${furnitureNames}\nTotal price: ${totalPrice}\nAverage decoration factor: ${avgDecoration}` ;
  }
}