function BasicCard(front, back){
	this.front = front;
	this.back = back;
	this.answer = function(answer){
		if (this.answer === this.back){
			console.log("Correct!");
			tally++;
		}
	}

}