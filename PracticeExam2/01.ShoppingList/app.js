function groceryList(input){
    let groceryListArr = input[0].split("!") ;

    for(let i = 1; i < input.length; i++){
        let command = input[i].split(" ") ;

        switch(command[0]){
            case "Urgent":
            {
                if(!groceryListArr.includes(command[1])){
                    groceryListArr.unshift(command[1]) ;
                }
            }
            break ;
            case "Unnecessary":
            {
                if(groceryListArr.includes(command[1])){
                    groceryListArr = groceryListArr.filter(element => element === command[1] ? false : true) ;
                }
            }
            break ;
            case "Correct":
            {
                if(groceryListArr.includes(command[1])){
                    groceryListArr = groceryListArr.map(element => {
                        if(element === command[1]){
                            return command[2] ;
                        }else{
                            return element ;
                        }
                    })
                }
            }
            break ;
            case "Rearrange":
            {
                let isFiltered = false ;
                groceryListArr = groceryListArr.filter(element => {
                    if(element === command[1]){
                        isFiltered = true ;
                        return false ;
                    }
                    return true ;
                }) ;

                if(isFiltered){
                    groceryListArr.push(command[1]) ;
                }
            }
            break ;
            case "Go":
            {
                console.log(groceryListArr.join(", ")) ;
            }
            break ;
            
        }
    }
}

groceryList(["Milk!Pepper!Salt!Water!Banana",
"Unnecessary Milk",
"Go Shopping!"]) ;