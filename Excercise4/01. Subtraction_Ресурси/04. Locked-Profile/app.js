function lockedProfile() {
    let buttons = document.getElementsByTagName("button") ;

    for(let i = 0; i < buttons.length ; i++){
        element = buttons[i] ;
        element.addEventListener("click", clickHandler) ;
    }

    function clickHandler(event){
        let button = event.target ;
        let profile = button.parentNode ;
        
        let checkedButton = profile.querySelectorAll("input[type = 'radio']:checked")[0] ;

        let isLocked = null ;

        if(checkedButton.value === "lock"){
            isLocked = true ;
        }else{
            isLocked = false ;
        }

        if(isLocked){

        }else{
            let button = profile.getElementsByTagName("button")[0] ;

            let hiddenInfo = profile.getElementsByTagName("div")[0] ;

            if(button.textContent === "Show more"){
                hiddenInfo.style.display = "block" ;
                button.textContent = "Hide it" ;
            }else{
                hiddenInfo.style.display = "none" ;
                button.textContent = "Show more" ;
            }
        } ;


        
    }
}