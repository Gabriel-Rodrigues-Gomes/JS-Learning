  //JOHN'S BILLS
  var bills1 = {
    name :'John',
    paidBills : [42,48,124,180,268],
    

    tipCalculator : function(){
      
        var paidBills = this.paidBills;
        var tips = [];
      var totals = [];
        for (var i=0;i<paidBills.length;i++){
            
            var bill = paidBills[i];

            if (bill< 50){
                  tip = bill *0.2;
                  tips.unshift(tip);
                  totals.unshift(tip + bill);
            }
            else if(bill>50 && bill<200){
                tip = bill *0.15;
                  tips.unshift(tip);
                  totals.unshift(tip + bill);
            }
                
                
            else if(bill>200){
            tip = bill *0.1;
              tips.unshift(tip);
              totals.unshift(tip + bill);
            }

            }
            console.log('TIPS: '+ tips + '\n' + 'TOTALS: '+ totals); }  
      }

//MARK'S BILLS
      var bills2 = {
    name :'Mark',
    paidBills : [77,110,375,45],
    

    tipCalculator : function(){
      
        var paidBills = this.paidBills;
        var tips = [];
      var totals = [];
        for (var i=0;i<paidBills.length;i++){
            
            var bill = paidBills[i];

            if (bill< 100){
                  tip = bill *0.2;
                  tips.unshift(tip);
                  totals.unshift(tip + bill);
            }
            else if(bill>100 && bill<300){
                tip = bill *0.1;
                  tips.unshift(tip);
                  totals.unshift(tip + bill);
            }
                
                
            else if(bill>300){
            tip = bill *0.25;
              tips.unshift(tip);
              totals.unshift(tip + bill);
            }

            }
            console.log('TIPS: '+ tips + '\n' + 'TOTALS: '+ totals); }  
      }

function tipAverageCalculator(tips){
  var tipsTotal = 0; 

  for(i=0;i<tips.length;i++){
      tipsTotal += tips[i];
    
    }
  return tipsTotal / tips.length;
}
TAC = tipAverageCalculator;

console.log(tipAverageCalculator(bills1.paidBills));

console.log(tipAverageCalculator(bills2.paidBills));

if (TAC(bills1)>TAC(bills2)){
  console.log('John\'s family spent more money');

}
else{
  console.log('Mark\'s family spent more money')

}