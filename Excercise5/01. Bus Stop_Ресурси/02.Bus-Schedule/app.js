function solve() {
    let currStop = "" ;
    let nextStop = "depot" ;
    function depart() {
        let infoSpan = document.getElementById("info") ;
        
        let departButton = document.getElementById("depart") ;

        let arriveButton = document.getElementById("arrive") ;

        departButton.disabled = true ;

        arriveButton.disabled = false ;

        fetch(` http://localhost:3030/jsonstore/bus/schedule/${nextStop}`) 
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            currStop = data.name ;
            nextStop = data.next ;

            console.log(data) ;

            infoSpan.innerText = `Next stop ${currStop}`
        })
        .catch(error => {
            infoSpan.innerText = "Error" ;
        }) ;
    }

    async function arrive() {
        let infoSpan = document.getElementById("info") ;
        
        let departButton = document.getElementById("depart") ;

        let arriveButton = document.getElementById("arrive") ;

        departButton.disabled = false ;

        arriveButton.disabled = true ;

        infoSpan.innerHTML = `Arriving at ${currStop}` ;

    }

    return {
        depart,
        arrive
    };
}

let result = solve();