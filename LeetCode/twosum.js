const nums = [2, 7, 11, 15];
const target = 13;

var twoSum = function(nums, target) {
    const map = {}
    for (let i = 0; i<nums.length;i++){
        const num = nums[i];
        const diff = target - num;

        if (diff in map) {
            return [map[diff], i];
        }

        map[num] = i;
    }
};

console.log(twoSum(nums, target));