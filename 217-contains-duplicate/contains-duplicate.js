var containsDuplicate = function(nums) {
  const resultSet = new Set();

  for(const n of nums){
    if(resultSet.has(n)){
        return true
    }
    resultSet.add(n)
  }
  return false
};