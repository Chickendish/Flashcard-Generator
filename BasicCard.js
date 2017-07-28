function BasicCard(front, back){
	this.front = front;
	this.back = back;
	this.printInfo = function(){
		console.log("Front: " + this.front + "\nBack: " + this.back);
	};
	// this.answer = function(answer){
	// 	if (this.answer === this.back){
	// 		console.log("Correct!");
	// 		tally++;
	// 	}
	// }

};

module.exports = BasicCard;