//OBJECTS

var mark = {
    name : 'Mark',
    weight : 79,
    height : 1.65,
    calcBMI : function(){
      let weight = this.weight
      let height = this.height
      BMI = weight / (height**2);
      return BMI;
      }
    }
  
  var john = {
    name : 'John',
    weight: 85,
    height : 1.90,
    calcBMI : function(){
      let weight = this.weight
      let height = this.height
      BMI = weight / (height**2);
      return BMI;
    }
  }
  
  
  if(john.calcBMI()>mark.calcBMI()){
    console.log('john has a higher BMI');
  
  }
  else{
    console.log('mark has a higher BMI');
  }
  