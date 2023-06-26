function roadRadar(speed, area){
    let status ;
    let limit ;
    switch(area){
        case "city":
            limit = 50 ;
            switch(true){
                case speed <= limit:
                    status = "good" ;
                break ;
                case speed <= limit + 20:
                    status = "speeding" ;
                break ;
                case speed <= limit + 40:
                    status = "excessive speeding" ;
                break ;
                case speed > limit + 40:
                    status = "reckless driving" ;
                break ;
            }
        break ;
        case "interstate":
            limit = 90 ;
            switch(true){
                case speed <= limit:
                    status = "good" ;
                break ;
                case speed <= limit + 20:
                    status = "speeding" ;
                break ;
                case speed <= limit + 40:
                    status = "excessive speeding" ;
                break ;
                case speed > limit + 40:
                    status = "reckless driving" ;
                break ;
            }
        break ;
        case "motorway":
            limit = 130 ;
            switch(true){
                case speed <= limit:
                    status = "good" ;
                break ;
                case speed <= limit + 20:
                    status = "speeding" ;
                break ;
                case speed <= limit + 40:
                    status = "excessive speeding" ;
                break ;
                case speed > limit + 40:
                    status = "reckless driving" ;
                break ;
            }
        break ;
        case "residential":
            limit = 20 ;
            switch(true){
                case speed <= limit:
                    status = "good" ;
                break ;
                case speed <= limit + 20:
                    status = "speeding" ;
                break ;
                case speed <= limit + 40:
                    status = "excessive speeding" ;
                break ;
                case speed > limit + 40:
                    status = "reckless driving" ;
                break ;
            }
        break ;
    }

    if(status === "good"){
        console.log(`Driving ${speed} km/h in a ${limit} zone`) ;
    }else{
        console.log(`The speed is ${speed - limit} km/h faster than the allowed speed of ${limit} - ${status}`)
    }
}

roadRadar(21, 'residential') ;