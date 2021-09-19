const ArrayManuplation = (arr)=>{
   return Math.max(...arr.filter((item)=> item != Math.max(...arr)))
}

module.exports = ArrayManuplation;