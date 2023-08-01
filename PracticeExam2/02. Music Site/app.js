window.addEventListener('load', solve);

function solve() {
    let addSongButton = document.getElementById("add-btn") ;

    let allHitsContainer = document.getElementById("all-hits").firstElementChild ;

    let genreInputField = document.getElementById("genre") ;
    let nameInputField = document.getElementById("name") ;
    let authorinputField = document.getElementById("author") ;
    let dateInputFiled = document.getElementById("date") ;



    addSongButton.addEventListener("click", addSongEventHandler) ;


    function addSongEventHandler(event){
        event.preventDefault() ;
        
        let hitsInfoDiv = document.createElement('div') ;

        hitsInfoDiv.classList.add("hits-info") ;

        let img = document.createElement("img") ;
        let genreH2 = document.createElement("h2") ;
        let nameH2 = document.createElement("h2") ;
        let authorH2 = document.createElement("h2") ;
        let dateH3 = document.createElement("h3") ;
        let saveSongBtn = document.createElement("button") ;
        let likeSongBtn = document.createElement("button") ;
        let deleteSongBtn = document.createElement("button") ;

        saveSongBtn.classList.add("save-btn") ;
        likeSongBtn.classList.add("like-btn") ;
        deleteSongBtn.classList.add("delete-btn") ;

        saveSongBtn.innerText = "Save song" ;
        likeSongBtn.innerText = "Like song" ;
        deleteSongBtn.innerText = "Delete" ;

        saveSongBtn.addEventListener("click", saveSongEventHandler) ;
        likeSongBtn.addEventListener("click", likeSongEventHandler) ;
        deleteSongBtn.addEventListener("click", deleteSongEventHandler) ;

        img.src = "./static/img/img.png" ;
        genreH2.innerText = `Genre: ${genreInputField.value}` ;
        nameH2.innerText = `Name: ${nameInputField.value}` ;
        authorH2.innerText = `Author: ${authorinputField.value}` ;
        dateH3.innerText = `Date: ${dateInputFiled.value}` ;

        hitsInfoDiv.appendChild(img) ;
        hitsInfoDiv.appendChild(genreH2) ;
        hitsInfoDiv.appendChild(nameH2) ;
        hitsInfoDiv.appendChild(authorH2) ;
        hitsInfoDiv.appendChild(dateH3) ;
        hitsInfoDiv.appendChild(saveSongBtn) ;
        hitsInfoDiv.appendChild(likeSongBtn) ;
        hitsInfoDiv.appendChild(deleteSongBtn) ;

        allHitsContainer.appendChild(hitsInfoDiv) ;

        clearInputFields() ;
    }

    function saveSongEventHandler(event){
        let savedSongsContainer = document.getElementById("saved-hits").firstElementChild ;

        let hitsInfoDiv = event.target.parentElement ;

        let saveSongBtn = event.target.parentElement.getElementsByClassName("save-btn")[0] ;
        let likeSongBtn = event.target.parentElement.getElementsByClassName("like-btn")[0] ;

        hitsInfoDiv.removeChild(saveSongBtn) ;
        hitsInfoDiv.removeChild(likeSongBtn) ;

        

        savedSongsContainer.appendChild(hitsInfoDiv) ;

    }

    function likeSongEventHandler(event){
        changeLikeCount(1) ;

        event.target.disabled = true ;
    }

    function changeLikeCount(newLikeCount){
        let totalLikesP = document.getElementById("total-likes").firstElementChild.firstElementChild ;

        let totalLikesStr = totalLikesP.innerText ;

        let totalLikesArr = totalLikesStr.split(" ") ;

        let likeCount = parseInt(totalLikesArr[totalLikesArr.length - 1]) ;

        likeCount += newLikeCount ;

        totalLikesArr[totalLikesArr.length - 1] = likeCount ;

        totalLikesStr = totalLikesArr.join(" ") ;

        totalLikesP.innerText = totalLikesStr ;
    }

    function deleteSongEventHandler(event){
        event.target.parentElement.parentElement.removeChild(event.target.parentElement) ;
    }

    function clearInputFields(){
        genreInputField.value = "" ;
        nameInputField.value = "" ;
        authorinputField.value = "" ;
        dateInputFiled.value = "" ;
    }
}


