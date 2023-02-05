
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(typeof(matrix) != 'object'){
    return [];
  }
  const arr = [];
  matrix.reduce((r,a) => {
    if(r){
      a.map(b => arr.push(b))
    } else {
      a.reverse().map(b => arr.push(b))
    }
    return !r;
  }, true)
  return arr;
}
