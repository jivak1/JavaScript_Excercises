function getInfo() {
    let busId = document.getElementById("stopId").value ;

    let stopJson = fetch(`http://localhost:3030/jsonstore/bus/businfo/${busId}`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json() ;
    })
    .then(data => {
        let busUl = document.getElementById("buses") ;
        busUl.innerHTML = "" ;

        let stopNameDiv = document.getElementById("stopName") ;
        stopNameDiv.innerText = data.name ;

        Object.entries(data.buses).forEach(([key, value]) => {
            let newLi = document.createElement("li") ;
            newLi.innerText = `Bus ${key} arrives in ${value} minutes` ;
            busUl.appendChild(newLi) ;
        });
    })
    .catch(error => {
        let busUl = document.getElementById("buses") ;
        busUl.innerHTML = "" ;

        let stopNameDiv = document.getElementById("stopName") ;
        stopNameDiv.innerText = "Error" ;
    });
}