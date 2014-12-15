var output = function(count) {
	if (count < 10) {
		console.log("hey all" + count);
		output(count + 1);
	} else {
		console.log("that's all folks");
	};
}



output(5);
