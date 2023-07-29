function printEmployees(nameArr){
    let employeeArr = [] ;
    for(let i = 0; i < nameArr.length; i++){
        let employeeObj = {} ;
        employeeObj.employeeName = nameArr[i] ;
        employeeObj.personalNum = nameArr[i].length ;
        employeeArr.push(employeeObj) ;
    }
    employeeArr.forEach(element => {
        console.log(`Name: ${element.employeeName} -- Personal Number: ${element.personalNum}`) ;
    });
}

printEmployees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]) ;