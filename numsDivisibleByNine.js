function divisibleByNine(input){
    let divisible = Number (input[0]);
    let divisor = Number(input [1]);
    let divisorSum=0;
    for (let i = divisible; i<=divisor;i++){
        let num =  i;
        if(num%9===0){
                divisorSum=divisorSum+num;
            }   
        }
    console.log (`The sum: ${divisorSum}`);
    for (let i = divisible; i<=divisor;i++){
        let num = String (i);
        let sum = 0;
        for(let y = 0; y<num.length; y++){
            let digit = Number (num[y]);
            sum = sum+digit;   
        }
        if(sum%9===0){
            console.log (num);
        }
    }    
        
}

divisibleByNine(['100','200']);