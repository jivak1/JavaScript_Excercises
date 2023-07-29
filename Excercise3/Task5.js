function heroRegister(arr){
    let heroArr = [] ;

    arr.forEach(element => {
        let heroInfo = element.split(" / ")

        let heroObj = {}

        heroObj.heroName = heroInfo[0] ;

        heroObj.heroLevel = parseInt(heroInfo[1]) ;

        heroObj.heroItems = heroInfo[2] ;

        heroArr.push(heroObj) ;
    });

    heroArr.sort((a, b) => {
        return a.heroLevel - b.heroLevel ;
    })

    heroArr.forEach(element => {
        console.log(`Hero: ${element.heroName}\nlevel => ${element.heroLevel}\nitems => ${element.heroItems}`) ;
    })
}

heroRegister([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]) ;