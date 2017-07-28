// npm modules to install

var inquirer = require('inquirer');
var fs = require('fs');
var basicCard = require('./BasicCard');

// array to store new flashcards
var flashCards = [];

// variable to keep tally of the quiz
var tally = 0;

//fs.readFile()
//inquirer prompt questions / answers 
// to be acquired from a different file

inquirer.prompt([
{
	name: "front",
	message: "What is the question?"
},
{
	name: "back",
	message: "What is the answer?"
}]).then(function(answers)
	var newCard = new BasicCard(answers.front, answers.back);
	flashCards.push(newCard);
	)