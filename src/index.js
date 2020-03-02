
// You should implement your task here.

/* module.exports = function towelSort (matrix) {
  return [];
}
*/ 

module.exports = function towelSort (matrix) {

  if (matrix === undefined) {
    return [];
  }

  let arrLonly = []

matrix.forEach(function(item, i, arr) {
  if (i%2 == 0) {
    arrLonly.push(item);
  }  else {
    arrLonly.push(item.reverse());
  } 
});

  return arrLonly.flat(Infinity);

}
//