// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */

var twoSum = function(nums, target) {
    var result = []
    for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1 ; j < nums.length; j++) {
        if(nums[i] + nums[j] === target){
            result.push(i) 
            result.push(j)
        }
    }
    
   }
   return result
};
twoSum([2,3,4],6)
