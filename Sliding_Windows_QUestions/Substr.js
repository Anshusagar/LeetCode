// Given a string s consisting only of characters a, b and c.

// Return the number of substrings containing at least one occurrence of all these characters a, b and c.

 

// Example 1:

// Input: s = "abcabc"
// Output: 10
// Explanation: The substrings containing at least one occurrence of the characters a, b and c are "abc", "abca", "abcab", "abcabc", "bca", "bcab", "bcabc", "cab", "cabc" and "abc" (again). 
// Example 2:

// Input: s = "aaacb"
// Output: 3
// Explanation: The substrings containing at least one occurrence of the characters a, b and c are "aaacb", "aacb" and "acb". 


var numberOfSubstrings = function(s) {
    let A = B = C = res = 0;
    for(i=0,j=0;i<s.length;i++){
        if(s[i]==="a") A++;
        if(s[i]==="b") B++;
        if(s[i]==="c") C++;
        while(A&&B&&C){
            res+=s.length-i;
            if(s[j]==="a") A--;
            if(s[j]==="b") B--;
            if(s[j]==="c") C--;
            j++;       
        }}
    return res;
};