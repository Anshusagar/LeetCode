// A string is good if there are no repeated characters.

// Given a string s​​​​​, return the number of good substrings of length three in s​​​​​​.

// Note that if there are multiple occurrences of the same substring, every occurrence should be counted.

// A substring is a contiguous sequence of characters in a string.

 

// Example 1:

// Input: s = "xyzzaz"
// Output: 1
// Explanation: There are 4 substrings of size 3: "xyz", "yzz", "zza", and "zaz". 
// The only good substring of length 3 is "xyz".
// Example 2:

// Input: s = "aababcabc"
// Output: 4
// Explanation: There are 7 substrings of size 3: "aab", "aba", "bab", "abc", "bca", "cab", and "abc".
// The good substrings are "abc", "bca", "cab", and "abc".
 

// Constraints:

// 1 <= s.length <= 100
// s​​​​​​ consists of lowercase English letters.


/**
 * @param {string} s
 * @return {number}
 */
 var countGoodSubstrings = function(s) {
    let str='';
        let count=0;
        let i=0;
        let j=0;
        let k=3;
        while(j<s.length){
                str+=s[j];
            
            if(j-i+1<k){
                j++;
            }
            else if(j-i+1==k){
                if(str[0]!=str[1] &&
                   str[1]!=str[2] &&
                   str[0]!=str[2]){
                    count++
                }
                str=str.substring(1)
                i++;
                j++;
            }
        }
        return count;
};