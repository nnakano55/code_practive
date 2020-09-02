
// https://leetcode.com/problems/container-with-most-water/
/** Question
 * Given n non-negative integers a1, a2, ..., an , 
 * where each represents a point at coordinate (i, ai). 
 * n vertical lines are drawn such that the two endpoints of line i is at 
 * (i, ai) and (i, 0). Find two lines, which together with x-axis forms a 
 * container, such that the container contains the most water.
 * 
 * Example:

 * Input: [1,8,6,2,5,4,8,3,7]
 * Output: 49
 * 
 * Note: cannot slant container and n >= 2
 * 
 */

/** Solution
 * Objective: Largest possible from the sequence that is input
 * Possible Solution:
 * Start from the outside and work inside.
 * Start from the largest numbers and work its way down?
 * Splitting the array in half might result in some cases where one side has the largest rectangle
 * Ex: [1,1,9,9]
 * 
 * Pseudo Code:
 * 
 *  Maximum area  = function(heigh array){
 *    Assign variable i = 0; // beginning of array
 *    Assign variable v = height.length - 1; // End of array
 *    Assign variable largest = 0;
 *    while i is less than v // not "!=" because it might very likey pass by depending of the number of indidces
 *    {
 *        variable tempheight = height[i] > height[v] ? height[v] : height[i]; //assign lower of two heights to tempheight
 *        // This ternary operation gets the lower value of the two heights
 *        variavle temparea = tempheight * (v - i);
 *        if temparea is greater than largest
 *            set largest equal to temparea;
 *        
 *      if height[i + 1] is less than height[v - 1]
 *        then decrement v;
 *      or else 
 *        increment i;
 *    } // just tab space or "end of loop" instead of the braces
 *    return largest;
 * }

 * 
 */

/*
 *  * @param {number[]} height
 * @return {number}
 */

//Input: [1,8,6,2,5,4,8,3,7]
 
//Output: 49
/** run through
 *  height = [1,8,6,2,5,4,8,3,7]
 *  i =         ^
 *  v =                        ^
 *  largest = 0
 *  temp_height = asdf
 */



var maxArea = function(height) {
  
    var i = 0; // beginning of the array
    var v = height.length -1; // end of array
    var largest = 0; // largest area(return value)
    
    // keep looping till they are the same (or pass each other somehow)
    while(i < v)
    {
      // init height and area of rectangle
      var temp_height = height[i] > height[v] ? height[v] : height[i]; // explain ternary operatio right here
      var temp_area = temp_height * (v - i);
      
      if(temp_area > largest) // set largest area
        largest = temp_area;
        
      if(height[i] < height[v]) // increment or decrement point
        i++;
      else 
        v--;
    }// End while
    
    return largest;
};


/**
 * 
 * Good
Good mention of thinking/going silent
Verbose pseudocode
Good speaking out loud to explain code

Improve
Bring up edge cases
When thinking of strategy you can go through an example if stuck
Rather than write your reasoning, talk about it with interviewer or again run through an example
Pseudo code could be more english like
Run through the code with an example before running it

 * 
 * 
 */