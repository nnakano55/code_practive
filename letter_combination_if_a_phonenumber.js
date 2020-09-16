// https://leetcode.com/problems/letter-combinations-of-a-phone-number/

/** Letter Combination of a Phone Number
 * Given a string containing digits from 2-9 inclusive, return all possible letter combinations 
 * that the number could represent.A mapping of digit 
 * to letters (just like on the telephone buttons) 
 * is given below. Note that 1 does not map to any 
 * letters.
 */

/** Example
 * Input: "23"
 * Output: ["ad", "ae", "af", "bd", "be", "bf", 
 * "cd", "ce", "cf"].
 */

/** Edge case:
 * Input: ""
 * Output: []
 */

/** Notes
 * Make an array with all the letter corresponding to
 * the phone number
 * split digits string into array
 * init size
 * Loop through array 
 * The size of the array will equal 
 * size of the digits multipled
 * allocate characters equal to the total size 
 * divided by current size
 */

/**
 *  Input "23"
 *  current division size: 1
 *  Current Output: [
 *    "ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"
 * ]
 * 
 *  Input "239"
 *  current division size: 1
 *  current output: [
 *  "a" * 12
 * ]
 * 
 */


/** PseudoCode
 *  Let Phone equal an array that has all the
 * information of the letteres corresponding to 
 * the digits
 * 
 * In the function(digits):
 *  int total_size = 1; 
 *  string ret_arr;
 *  arr_digits equals the digits string into array
 *  for length of digits:
 *    total_size times digit size
 *  
 *  for each number in arr_digits
 *    
 *    for number to current_size
 *      if number /
 *    current_size = total_size divided by digit.length
 */


/**
 * @param {string} digits
 * @return {string[]}
 */
// https://leetcode.com/problems/letter-combinations-of-a-phone-number/

/** Letter Combination of a Phone Number
 * Given a string containing digits from 2-9 inclusive, return all possible letter combinations 
 * that the number could represent.A mapping of digit 
 * to letters (just like on the telephone buttons) 
 * is given below. Note that 1 does not map to any 
 * letters.
 */

/** Example
 * Input: "23"
 * Output: ["ad", "ae", "af", "bd", "be", "bf", 
 * "cd", "ce", "cf"].
 */

/** Edge case:
 * Input: ""
 * Output: []
 */

/** Notes
 * Make an array with all the letter corresponding to
 * the phone number
 * split digits string into array
 * init size
 * Loop through array 
 * The size of the array will equal 
 * size of the digits multipled
 * allocate characters equal to the total size 
 * divided by current size
 */

/**
 *  Input "23"
 *  current division size: 1
 *  Current Output: [
 *    "ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"
 * ]
 * 
 *  Input "239"
 *  current division size: 1
 *  current output: [
 *  "a" * 12
 * ]
 * 
 */


/** PseudoCode
 *  Let Phone equal an array that has all the
 * information of the letteres corresponding to 
 * the digits
 * 
 * In the function(digits):
 *  int total_size = 1; 
 *  string ret_arr;
 *  arr_digits equals the digits string into array
 *  for length of digits:
 *    total_size times digit size
 *  
 *  for each number in arr_digits
 *    
 *    for number to current_size
 *      if number /
 *    current_size = total_size divided by digit.length
 */


/** 
 *  Input[2, 3]
 *  
 *  2 > abc
 */

/** Recursive Solution 
 *  var output_arr = [];
 *  Function recurse_digits(combination, digits_recursed) 
 *     if digits_recursed.legnth is equal to 0
 *        add combination to output_arr
 *      else
 *        assign digit to digits_recursed's first character
 *        assign letters to the letters the digit corresponds to
 *        
 *        for the length of the letters of the digit
 *          assgin letter to the one on the current index
 *          recurse_digits(combination + letter, digits_recursed.substring(1));
 *
 *      
 */



/**
 * @param {string} digits
 * @return {string[]}
 */

var Phone = {
  "2" : "abc",
  "3" : "def",
  "4" : "ghi",
  "5" : "jkl",
  "6" : "mno",
  "7" : "pqrs",
  "8" : "tuv",
  "9" : "wxyz"
}

var output_arr = [];

var recurse_digits = function(combination, digits_recursed){
  
  if(digits_recursed.length == 0)
    output_arr.push(combination);
  else{
    let digit = digits_recursed.substring(0, 1);
    let letters = Phone[digit];
    
    for(let i = 0; i < letters.length; i++)
    {
      let letter = letters.substring(i, i+1);
      recurse_digits(combination + letter, digits_recursed.substring(1));
    }
  }
  
}


var letterCombinations = function(digits){
    output_arr = [];
    if(digits.length != 0)
      recurse_digits("", digits);
    
    return output_arr;
}