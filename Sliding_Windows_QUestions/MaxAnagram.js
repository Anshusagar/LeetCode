
 var maxSlidingWindow = function(nums, k) {
    
    let res = [];
      let q = [];
      
      if (k === 1) return nums;
      
      for (let i = 0; i < nums.length; i++) {
          
          const num = nums[i];
          
          if (q.length === 0) {
              q.push(num);
              continue;
          }
          
          // remove 1st from q as that num is outside window
          if (i >= k && q[0] === nums[i-k]) {
              q.shift();
          }
                  
          // remove all numbers small than num in queue        
          while (q[q.length-1] < num) {
              q.pop();
          }
          
          // add new number to queue
          q.push(num);
                  
          if (i >= k-1) {
              res.push(q[0]);
          }
          
      }
      
      return res;
          
  };