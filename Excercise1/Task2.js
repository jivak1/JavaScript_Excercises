function priceCalculator(guestNumber, guestType, day){
    let price ;
    let cost ;
    let discount = 0.00 ;
    switch(true){
        case guestType === "Students":
            switch(day){
                case "Friday":
                    price = 8.45 ;
                break ;
                case "Saturday":
                    price = 9.80 ;
                break ;
                case "Sunday":
                    price = 10.46 ;
                break ;
            }
            if(guestNumber >= 30)
            {
                discount = 0.15 ;
            }
        break ;
        case guestType === "Business":
            switch(day){
                case "Friday":
                    price = 10.90 ;
                break ;
                case "Saturday":
                    price = 15.60 ;
                break ;
                case "Sunday":
                    price = 16.00 ;
                break ;
            }
            if(guestNumber >= 100)
            {
                guestNumber -= 10 ;
            }
        break ;
        case guestType === "Regular":
            switch(day){
                case "Friday":
                    price = 15.00 ;
                break ;
                case "Saturday":
                    price = 20.00 ;
                break ;
                case "Sunday":
                    price = 22.50 ;
                break ;
            }
            if(guestNumber >= 10 && guestNumber <= 20)
            {
                discount = 0.05 ;
            }
        break ;
    }

    cost = (guestNumber * price) * (1.00 - discount) ;

    console.log("Total price: " + cost.toFixed(2)) ;
}

priceCalculator(40,
    "Regular",
    "Saturday") ;