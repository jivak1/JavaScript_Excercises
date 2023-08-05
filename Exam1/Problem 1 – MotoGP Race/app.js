function motoRace(input){
    let n = parseInt(input[0]) ;
    let riders = [] ;

    for(let i = 1; i <= n; i++){
        let riderInfoStr = input[i].split("|") ;

        let rider = {} ;

        rider.name = riderInfoStr[0] ;
        rider.fuel = parseInt(riderInfoStr[1]) ;
        rider.position = parseInt(riderInfoStr[2]) ;

        riders.push(rider) ;
    }

    sortRidersByPosition() ;

    let riderIndex = null ;

    for(let i = n + 1 ; i < input.length; i++){
        let command = input[i].split(" - ") ;

        switch(command[0]){
            case "StopForFuel":
            {
                let rider = getRiderByName(command[1]) ;

                if(rider.fuel < parseFloat(command[2]))
                {
                    let pastPosition = rider.position ;

                    rider.position = parseInt(command[3]) ;

                    // for(let j = 0; j < riders.length; j++){
                    //     if(riders[j].position <= rider.position && riders[j].position >= pastPosition && riders[j].name !== rider.name){
                    //         riders[j].position-- ;
                    //     }
                    // }

                    sortRidersByPosition() ;

                    console.log(`${rider.name} stopped to refuel but lost his position, now he is ${rider.position}.`)
                }else{
                    console.log(`${rider.name} does not need to stop for fuel!`) ;
                }
                break ;
            }              
            case "Overtaking":
            {
                let rider1 =  getRiderByName(command[1]) ;
                let rider2 = getRiderByName(command[2]) ;

                if(rider1.position === rider2.position - 1){
                    {
                        let temp ;
                        temp = rider1.position ;
                        rider1.position = rider2.position ;
                        rider2.position = temp ;

                        sortRidersByPosition() ;

                        console.log(`${rider1.name} overtook ${rider2.name}!`)
                    }
                }

                break ;
            }
            case "EngineFail":
            {
                let rider = getRiderByName(command[1]) ;

                riders.splice(riderIndex, 1) ;

                // for(let j = riderIndex; j < riders.length; j++){
                //     riders[j].position-- ;
                // }

                console.log(`${command[1]} is out of the race because of a technical issue, ${command[2]} laps before the finish.`)
                break ;
            }
            case "Finish":
            {
                for(let j = 0; j < riders.length; j++){
                    console.log(riders[j].name) ;
                    console.log(`  Final position: ${riders[j].position}`) ;
                }
                return ;
            }
        }
    }

    function getRiderByName(name){
        for(let i = 0; i < riders.length; i++){
            if(riders[i].name === name)
            {
                riderIndex = i ;
                return riders[i] ;
             }
        }
    }

    function sortRidersByPosition(){
        riders.sort((a, b) => {
        return a.position - b.position ;
    })
    }
}

motoRace((["4",
"Valentino Rossi|100|1",
"Marc Marquez|90|3",
"Jorge Lorenzo|80|4",
"Johann Zarco|80|2",
"StopForFuel - Johann Zarco - 90 - 5",
"Overtaking - Marc Marquez - Jorge Lorenzo",
"EngineFail - Marc Marquez - 10",
"Finish"])) ;