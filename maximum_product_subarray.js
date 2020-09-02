/** Notes
 * tell interviewer about going silent and add additional examples to clearify the problem
 * explained algorithm in a very clear way
 * see how algorithm is being though out
 * 
 * 
 */

 // https://leetcode.com/problems/maximum-product-subarray/
/**
 * Given an integer array nums, find the contiguous subarray within 
 * an array (containing at least one number) which has the largest product.
Example 1:

Input: [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
Example 2:

Input: [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

example3: 
input: [5]
output: 0

example 4
Input: [0,2,3,-2,4]
Output: 6

example 5
Input: [0,2,3,-2,0,4,2]
Output: 8

example 6
Input: [6,-2,4,2]
             ^
               ^
negatives = [1]
max = 8
output: 8
 */

/**
 * input:   [0,2,3,-2,0,4,2]
 * left  =     ^
 * right =          ^
 * if left = 0 increment by 1
 * if right = 0 increment by 2 and set left to right
 * prod = 8
 * max_prod = 8
 * reset here
 * Notes:
 * 
 * - iterate with two pointers
 * - reset pointers if we hit a 0/product of 0
 * 
 */

/**
 * PSUEDOCODE:
 * function that takes in an array of integers
 *  if array size is less than or equal to 1 return 0
 *  instantiate left pointer at 0 and right pointer at 1
 *  instantiate max_product at -infinity and product
 *  instantiate a negatives array as empty
 * 
 *  while right is less than the array size
 *    if left is 0 increment it by 1
 *    if right is 0 increment it by 2 and set left to right
 *    if left or right is negative push its index into negatives array
 *    product = product of integers in range left to right
 *    assign max_product as larger of product or max_product
 *  
 *  for each element of the negatives array
 *    iterate from left bound as negative to end of array
 * 
 * 
 * 
 */


/** Solution 

https://leetcode.com/problems/maximum-product-subarray/discuss/416395/JavaScript-Solution-w-Explanation

The idea
This is something I would never come up by myself, so I'm using this discussion as an oppotunity to both reinforce the knowledge for myself and possibly share some insights with others.

The intuition is that we store the information about our previous maximum product, and as we iterate through the array, we keep using our previous maximum to calculate the new maximum product.
The tricky part of this problem is that negative numbers exist in the input array. This causes situations where the smallest previous product (a negative number) can become the largest product if the next number in line is also a negative number.
Since the minimum product may have a chance to become the maximum, we need to store the information about the previous minimum as well and take it into account when we are calculating our maximum product.

Code Time

*/
var maxProduct = function(nums) {
    let prevMax = nums[0];
    let prevMin = nums[0];
    let result = nums[0];
    for (let i=1;i<nums.length;i++) {
        // given the new number, the new maximun can have 3 conditions
        // 1. number(+) * prevMax(+) is the largest
        // 2. number(+) it self is the largest
        // 3. number(-) * prevMin(-) is the largest 
        curMax = Math.max(nums[i] * prevMax, nums[i], nums[i] * prevMin);
        
        curMin = Math.min(nums[i] * prevMin, nums[i], nums[i] * prevMax);

		// updating the prevMax & prevMin, these two may swap locations
        prevMax = curMax
        prevMin = curMin

        result = Math.max(curMax, result);
    }
    return result;
}







