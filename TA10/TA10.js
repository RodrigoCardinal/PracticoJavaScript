function getSum(nums) {
    console.log(nums.reduce((sum, num) => sum + num, 0));
}

const numbers = [1, 2, 3, 4, 5];
getSum(numbers);
