//Chapter 2 Fundamentals Part II

Threes and Fives 
function threesFives(){
	var sum = 0; 
	for (var i = 100; i < 4000000; i++){
		if ((i % 3 == 0 || i % 5 == 0) && !(i % 3 == 0 && i % 5 == 0)){
			sum += i;
		};
	};
	console.log(sum);
}

betterThreesFives(start,end){
	var sum = 0;
	for ( i = start ; i <= end; i++){
		if ((i % 3 == 0 || i % 5 == 0) && !(i % 3 == 0 && i % 5 == 0)){
			sum += i;
	}

}
console.log(sum);
}

Generate Coin Change
generateCoinChange(cents){
	var qtr = 0;
	var dim = 0;
	var nick = 0;
	var pen = 0;

	var qtr = Math.floor(num/25);
	num = num - (qtr * 25);
	var dim = Math.floor(num/10);
	num = num - (dim * 10);
	var nick = Math.floor(num/5);
	num = num - (nick * 5);
	var pen = num;

	console.log( "Quarter:" + qtr +
				 "Dime:" + dim +
				 "Nickles:" + nick + 
				 "Pennies:" + pen);
}



Rocking the Dojo Sweatshirts
function sweatingshirtPricing(num){
	var cost = 0;
	if(num = 2){
		 var cost = (num*20) - (Math.ceil(Math.ceil(num*20)*.09));
	}
	if (num = 3){
		 var cost = (num*20) - (Math.ceil(Math.ceil(num*20)*.19));
	}
	if (num >= 4){
		 var cost = (num*20) - (Math.ceil(Math.ceil(4*20)*.35));
	}
	return cost;
}

function sweatshirtPricing(num){
    var discount = 0;
    if (num == 2){
        discount = .09;
    }
    if (num == 3){
        discount = .19;
    }
    if (num >= 4){
        discount = .35;
    }
    var cost = Math.ceil(20 * num * (1 - discount));
    return cost;
}

Clock Hand Angels, Revisted 
function clockHandAngles(){

}

Extract-o-matic 
function extractDigit(num, digitNum){
	var num = 1824; 
	console.log(Math.floor(num/100)%10); //return 8
	console.log(Math.floor(num/75)%10); //return 4
	console.log(Math.floor(num/1000000)); //return 0

	Second: 

	var num = 123.45, -1 ; return 4;
	Math.floor((123.45* 10)/100)%10;

	Third 
	var num = 


}

Most Significant digitNum
given 12345 return 1


// Page 33 Chapter 2 Fundamentals Part 11

Gaming Fun(damentals) 

function rollOne(){

return Math.ceil(Math.random()*5+1);

}

function playFives(num){
	for (var i = 1; i <= 5; i++){
		var value = rollOne();
		console.log(value);
		if (value == 5){
			console.log("That's good luck!");
		}
	}	
}

function playStatistics(){
	var highest = 0; 
	var lowest = 6;
	for (var i = 1 ; i <= 8; i++){	
	var value = rollOne();
		if (value > highest){
			highest = value;
		}
		if (value < lowest) {
			lowest = value;
		}
	}
	console.log("Highest value:" + highest);
	console.log("Lowest value:" + lowest); 
}
	
function playStatistics2(){
	var highest = 0; 
	var lowest = 6;
	var sum = 0;
	for (var i = 1 ; i <= 8; i++){	
	var value = rollOne();
	sum += value;
		if (value > highest){
			highest = value;
		}
		if (value < lowest) {
			lowest = value;
		}
	}
	console.log("Highest value:" + highest);
	console.log("Lowest value:" + lowest); 
	console.log("Sum:" + sum);
}	

function playStatistics3(num){
	var highest = 0; 
	var lowest = 6;
	var sum = 0;
	for (var i = 1 ; i <= num; i++){	
	var value = rollOne();
	sum += value;
		if (value > highest){
			highest = value;
		}
		if (value < lowest) {
			lowest = value;
		}
	}
	console.log("Highest value:" + highest);
	console.log("Lowest value:" + lowest); 
	console.log(" Total sum:" + sum);
}	

function playStatistics4(num){
	var highest = 0; 
	var lowest = 6;
	var sum = 0;
	
	for (var i = 1 ; i <= num; i++){	
	var value = rollOne();
	sum += value;
	
		if (value > highest){
			highest = value;
		}
		if (value < lowest) {
			lowest = value;
		}
	}
	console.log("Highest value:" + highest);
	console.log("Lowest value:" + lowest); 
	console.log("Total average:" + sum/num);

}	

Statistics Until Double 

function rollOne(){
	return Math.ceil(Math.random()*19+1);
}	


function playNoDoubles(){
	var previousRoll = 99;
	var double = false;
	var count = 0;
	var max = 0;
	var min = 99;
	var sum = 0; 		

	while (double === false){
        var newValue = rollOne();
        count++;
        sum += newValue;
        if (newValue > max){
            max = newValue;
        }
        if (newValue < min){
            min = newValue;
        }
        if (newValue == previousRoll){
            double = true;
        } else {
            previousRoll = newValue;
        }
	}
	console.log("Number of roll:" + count);
	console.log("Max value:" + max);
	console.log("Min value:" + min);
	console.log("Total average:" + sum/count);
}
 playNoDoubles();




