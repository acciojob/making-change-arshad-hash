const makeChange = (c) => 
	//created an object
	let result  ={
	q:0,
	d:0,
	n:0, 
	p: 0,
}
//i need to devide that with 1,
//5 , 10 , 25 
	while (c>0) {
	if(c%25==0)
		
		{c= c/25;
			result.q++;}

		else if(c%10==0)
		{
			c=c/10;
			result.d++;
		}
		else if(c%5==0)
		{
			c=c/5;
			result.n++;
			
		}
		else{
			c=c-1;
			result.d++;
		}
		
		
	}
return result;
	
  // your name here
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
