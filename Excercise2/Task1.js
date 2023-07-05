function findSmallestNum(...nums){
    nums.sort((a, b) => a - b) ;
    console.log(nums[0]) ;
}

findSmallestNum(25, 21, 4) ;