$(document).ready(function(){
	console.log('doc ready')
})

let bubbleArray = [];

function Bubble (name, image, value) {
	this.name = name;
	this.image = image;
	this.value = value;
	this.create = function (){
		$('#board').append(this.image);
	};
	this.attach = function(){
		bubbleArray.push(this);
	};
	this.attach();
}

var bubble1 = new Bubble ("bubble1", "<img id='bubble1' src=bubb3.gif_c200>", 20);
var bubble2 = new Bubble ('bubble2', "<img id='bubble2' src=crazyBub.gif>", 10);
var bubble3 = new Bubble ('bubble3', "<img id='bubble3' src=crazyBub1.gif>", 30);

bubbleArray.forEach(function(obj){
	obj.create();
});



let randomNumber = Math.floor(Math.random() * 3 + 1) * 10;



$(function(){

	var thingArray = [];

	function Thing(name){
  	this.name = name;
    this.speak = function(){
    	$('.log').append('<p>Hi my name is ' + this.name + '</p>');
    };
    this.attach = function(){
    	thingArray.push(this);
    };
    this.attach();
  }
  
  var mike = new Thing("Mike");
  var dave = new Thing("Dave");
  var pete = new Thing("Pete");
  var john = new Thing("John");
  
  thingArray.forEach(function(obj){
  	obj.speak();
  });

});



