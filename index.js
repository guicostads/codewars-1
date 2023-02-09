function deleteNth(arr,n){  
  let counts = {};
  return arr.filter(function(num) {
    counts[num] = (counts[num] || 0) + 1;
    return counts[num] <= n;
  })
  
}