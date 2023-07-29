function attachEvents() {
    let locationTextField = document.getElementById("location") ;
    let getWeatherButton = document.getElementById("submit") ;

    getWeatherButton.addEventListener("click", buttonClickHandler)

    function buttonClickHandler(button){
        fetch("http://localhost:3030/jsonstore/forecaster/locations")
        .then(response => {
            if(!response.ok){
                throw new Error("invalid response") ;
            }

            return response.json() ;
        })
        .then(data => {
            let locationName  ;
            let locationCode ;

            for(let i = 0; i < data.length; i++){
                if(locationTextField.value === data[i].name)
                {
                    locationName = data[i].name ;
                    locationCode = data[i].code ;
                    break ;
                }
            }

            let forecastDiv = document.getElementById("forecast") ;
            forecastDiv.style.display = "block" ;

            fetch(`http://localhost:3030/jsonstore/forecaster/today/${locationCode}`)
            .then(response => {
                if(!response.ok){
                    throw new Error("invalid response") ;
                }
    
                return response.json() ;
            })
            .then(data => {
                let currentDiv = document.getElementById("current") ;

                let weatherIcon = document.createElement("span") ;
                weatherIcon.innerText = returnConditionSymbol(data.forecast.condition) ;

                currentDiv.appendChild(weatherIcon) ;

                let conditionSpan = document.createElement("span") ;

                let forecastdata1 = document.createElement("span") ;
                let forecastdata2 = document.createElement("span") ;
                let forecastdata3 = document.createElement("span") ;

                forecastdata1.innerText = data.name ;
                forecastdata2.innerText = `${data.forecast.low}/${data.forecast.high}` ;
                forecastdata3.innerText = data.forecast.condition ;

                conditionSpan.appendChild(forecastdata1) ;
                conditionSpan.appendChild(forecastdata2) ;
                conditionSpan.appendChild(forecastdata3) ;

                currentDiv.appendChild(conditionSpan) ;
            })
            .catch(error => {

            })

            fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${locationCode}`)
            .then(response => {
                if(!response.ok){
                    throw new Error("invalid response") ;
                }

                return response.json() ;
            })
            .then(data => {
                let upcomingDiv = document.getElementById("upcoming") ;

                for(let i = 0; i < data.forecast.length; i++){
                    let upcomingSpan = document.createElement("span") ;

                    let iconSpan = document.createElement("span") ;
                    let forecastdata1 = document.createElement("span") ;
                    let forecastdata2 = document.createElement("span") ;

                    iconSpan.innerText = returnConditionSymbol(data.forecast[i].condition) ;
                    forecastdata1.innerText = `${data.forecast[i].low}/${data.forecast[i].high}` ;
                    forecastdata2.innerText = data.forecast[i].condition ;

                    upcomingSpan.appendChild(iconSpan) ;
                    upcomingSpan.appendChild(forecastdata1) ;
                    upcomingSpan.appendChild(forecastdata2) ;

                    upcomingDiv.appendChild(upcomingSpan) ;
                }
            })
            .catch(error => {
                
            })
        })
        .catch(error => {

        }) ;

    }

    function returnConditionSymbol(condition){
        switch(condition){
            case "Sunny":
                return "☀" ;
                
            case "Partly sunny":
                return "⛅" ;
            case "Overcast":
                return "☁" ;
            case "Rain":
                return "☂" ;
        }
    }
    
}

attachEvents();