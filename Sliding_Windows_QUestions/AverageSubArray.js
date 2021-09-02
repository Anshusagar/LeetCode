// You are given an integer array nums consisting of n elements, and an integer k.

// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

// Example 1:

// Input: nums = [1,12,-5,-6,50,3], k = 4
// Output: 12.75000
// Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
// Example 2:

// Input: nums = [5], k = 1
// Output: 5.00000

// Constraints:

// n == nums.length
// 1 <= k <= n <= 105
// -104 <= nums[i] <= 104

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let i = 0;
  let j = 0;
  let max = 0;
  let res = -Infinity;
  if (nums.length == 1) {
    return nums[0];
  }
  let s = 0;
  for (let i = 0; i < nums.length; i++) {
    s += nums[i];
  }
  if (nums.length == k) {
    return s / k;
  }
  while (j < nums.length) {
    max = max + nums[j];

    if (j - i + 1 < k) {
      j++;
    } else if (j - i + 1 == k) {
      res = Math.max(max / k, res);
      max = max - nums[i];
      i++;
      j++;
    }
  }

  return res;
};
