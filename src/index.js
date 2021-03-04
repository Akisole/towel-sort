
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let res = [];
  if(matrix != undefined && matrix != "") {
    for(let i=0; i<matrix.length; i++){
      if((i+1)%2 != 0){
        res.push(matrix[i]);
      }
      else {
        res.push(matrix[i].reverse());
      }
    }
    res = res.join().split(",");
  }

  return res;
}
