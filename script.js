const makeChange = (c) => {
	//created an object
	let result  ={
	q:0,
	d:0,
	n:0, 
	p: 0,
};
//i need to devide that with 1,
//5 , 10 , 25 
	while (c>0) {
	if(c>=25)
		//
		{c= c-25;
			result.q++;}
//23
		else if(c>=10)
		{
			c=c-10;
            //c=13
            //c=3
			result.d++;
            //d=1
            //d=2
		}
		else if(c>=5)
		{
			c=c-5;
			result.n++; 
			
		}
		else{
			c=c-1;
			result.p++;
		}
		
		
	}
return result;
	
  // your name here
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
