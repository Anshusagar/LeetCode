


 var findAnagrams = function(s, p) {
    
    let res=0;
    let obj=new Map();
    for(let i=0;i<p.length;i++){
        if(obj[p[i]]==undefined){
            obj[p[i]]=1
        }
        else{
            obj[p[i]]++
        }
    }
    let count=obj.size;
    
    let i=0;
    let j=0;
    
    while(j<s.length){
        console.log(obj)
        if(s[j]==obj[s[j]]){
            obj[s[j]]--
        }
        if(obj[s[j]]==0){
            count--
        }
        if(j-i+1 < p.length){
            j++
        }
        else if(j-i+1 == p.length){
            if(count==0){
                res++
            }
            if(obj[s[i]]==s[i]){
                obj[s[i]]++
            }
            if(obj[s[i]] >0){
                count++
            }
            i++;
            j++;
        }
    }
    return count;
}; 

let res=findAnagrams('forxxorfxdofr','for');
console.log(res)