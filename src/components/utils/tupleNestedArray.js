// Take two arrays and create a touple at each index
// Example:
// var arr1 = ['a', 'b', 'c']
// var arr2 = ['1']

// Use FlattenNestObj before using this

const tupleNestedArray = (obj) => {
  const res = [];
  for ( const key in obj ) {
    res.push([key, obj[key]]);
  }
  return res
};

export { tupleNestedArray };