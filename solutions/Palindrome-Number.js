/* 
Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.

For example, 121 is a palindrome while 123 is not.
*/

var isPalindrome = function(x) {
    let reversed = x.toString().split('').reverse().join('')
    return (x.toString() === reversed)
    };

    //first LeetCode Problem Done :D
