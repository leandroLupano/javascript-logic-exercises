/* 
Running Sum of 1d Array

Instructions:
Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0] ...nums[i]).

Return the running sum of nums.

Ex.:
Input: nums = [1, 2, 3, 4];
Output: [1, 3, 6, 10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

*/

const sumOfArray = (nums) => {
  let sumArray = [];

  if (nums.length !== 0) {
    for (let i = 0; i < nums.length; i++) {
      let result = 0;
      for (j = 0; j <= i; j++) {
        result += nums[j];
      }
      sumArray[i] = result;
    }
  }

  return sumArray;
};

console.log(sumOfArray([1, 2, 3, 4, 5]));
