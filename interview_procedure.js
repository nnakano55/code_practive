// https://leetcode.com/problems/word-search/
/** 
Given a 2D board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cell, 
where "adjacent" cells are those horizontally or vertically neighboring. 
The same letter cell may not be used more than once.

Example:

board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

Given word = "ABCCED", return true.
Given word = "SEE", return true.
Given word = "ABCB", return false.


Ex1. board as above, word = "" return true?

Ex2. board = "[['A']]", word = "a", return true or false?

Ex3.

board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]
word = "CCES"

Ex4.
board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]
word = "CESEECCESEEC"
*/
/** NOTES
 * - should be nonempty board and word
 * - 
 */

// board =
// [
//   ['A','B','C','E'],
//   ['S','F','C','S'],
//   ['A','D','E','E']
// ]

// Given word = "SEE", return true.
// queue = [[1,0],[1,3]]
// currWord = 1;



/** PSEUDOCODE
 *  
 *  function takes in 'board' and 'word'
 *    have some adj moves object which would be added to coordinate of letter
 *    iterate through board until we hit the first letter of 'word' 
 *      if letter is found
 *        instantiate a queue to hold paths to check
 *        instantiate a currWord at 0
 *        while our queue is not empty
 *          currWord++
 *          for the length of current queue
 *            shift off coordinate
 *            if at word[currWord] is the same then
 *              if currWord = word.length - 1
 *                return true
 *              push all in bound adjacent coordinates to queue
 *     return false
 */




/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const adj_moves = [[-1,0],[0,1],[1,0],[0,-1]];
    let currLetter = 0;
    let queue = findStartPoints(board, word[currLetter]);
    while (queue.length > 0){
      curLetter++;
      for (k = queue.length - 1; k >= 0; k--){
        let [i, j] = [queue.shift()];
        adj_moves.forEach(([x, y]) => {
          if ((i + x > board.length - 1 || i + x < 0) || 
          (j + y > board.length - 1 || j + y < 0)) next;
          if (board[i + x][j + y] === word[currLetter]){
            if (currWord = word.length - 1){
              return true;
            }
            queue.push([i + x][j + y]);
          }
        });
      }
    }
    return false;
};

function findStartPoints(board, letter){
  let queue = [];
  for (let i = 0; i < board.length; i++){
    for (let j = 0; j < board[i].length; j++){
      if (board[i][j] === letter) queue.push([i,j]);
    }
  }
}












