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