function makeid(l) {
  // write your code here


	const char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	let res = '';

	for(let i=0;i<l;i++){
		const random = Math.floor(Math.random()*char.length);
		res += char.charAt(random);
	}
	return res;
}

// Do not change the code below.
	const l = prompt("Enter a number.");
alert(makeid(l));

