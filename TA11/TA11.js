function duplicates(nums) {
    let duplicateCount = 0;
    
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j] && nums.indexOf(nums[i]) === i) {
                duplicateCount++;
                break;
            }
        }
    }

    console.log(`Cantidad de números repetidos: ${duplicateCount}`);
}

const numbers = [1, 2, 2, 3, 4, 4, 4, 5];
duplicates(numbers);  