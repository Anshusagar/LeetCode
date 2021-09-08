
 var numOfSubarrays = function(arr, k, threshold) {
    let sum=0;
    let res=0;
    let i=0;
    for(;i<k;i++){
        sum+=arr[i];
    }
    if(sum/k>=threshold){
        res++;
    }
    for(;i<arr.length;i++){
        sum-=arr[i-k];
        sum+=arr[i];
        
        if(sum/k>=threshold){
            
            res++
        }
    }
    return res;
};
let arr = [2,2,2,2,5,5,5,8];
let  k = 3;
let threshold = 4;
let a=numOfSubarrays(arr,k,threshold);
console.log(a)