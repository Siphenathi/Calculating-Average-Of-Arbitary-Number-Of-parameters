function Calculator(){

  return{

    Average:function(){
    let lengthOfArgument = arguments.length;

      if(lengthOfArgument == 0){
        return 0;
      }
      let sumOfNumbers = 0, average = 0;

      for(let x = 0; x<lengthOfArgument;x++)
      {
        sumOfNumbers += arguments[x];
      }
      average = sumOfNumbers/lengthOfArgument;   
      return average;
    }
  }
}