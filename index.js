const ArrayManuplation = (arr)=>{
    
   let secondLargest = Math.max(...arr.filter((item)=> item != Math.max(...arr)));
   let data = `Second Largest Number is ${secondLargest}`;
   return data;
}

module.exports = ArrayManuplation;