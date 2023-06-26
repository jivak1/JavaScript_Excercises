function printAndSum(start, end)
{
    let sum = 0 ;
    let numberStr= "" ;

    for(let i = start; i <= end; i++)
    {
        numberStr += i + " " ;
        sum += i ;
    }
    console.log(numberStr) ;
    console.log("Sum: " + sum) ;
}

printAndSum(5, 10) ;