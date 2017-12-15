$(document).ready(function(){
	console.log('doc ready')


let boardWidth = $('#board').width();
bubbleArray = [];
let bubbleLoop = 3;
count = 0;

// function keepBubblesComing (){
// 	if ($('.time') )
// 
// keepBubblesComing();

//this is the bubble factory	
for (var i = 0; i <= bubbleLoop; i++) {
function Bubbles (name, image, value) {
	this.name = name;
	this.image = image;
	this.value = value;
	//this puts the bubbles on page and gives them a ++ id
	this.create = function (){
		let idCount = 1;
		$('#board').append(this.image);
		$('img').each(function(){
		$(this).attr('id', 'bubble'+idCount);
			window.setInterval(function(){
            Bubbles();
         }, 3000);//3 seconds create ime
 
		idCount ++;
		})
	};
	//puts bubble objects into array
	this.attach = function(){
		bubbleArray.push(this);
	}
	//run attach bubbles
	this.attach();
}

let bubble1 = new Bubbles ("bubble1", "<img class='bubble' src=bubb3.gif_c200>", 20);
let bubble2 = new Bubbles ('bubble2', "<img class='bubble' src=crazyBub.gif>", 10);
let bubble3 = new Bubbles ('bubble3', "<img class='bubble' src=crazyBub1.gif>", 30);
let bubble4 = new Bubbles ("bubble4", "<img class='bubble' src=bubb3.gif_c200>", 20);
let bubble5 = new Bubbles ('bubble5', "<img class='bubble' src=crazyBub.gif>", 10);
let bubble6 = new Bubbles ('bubble6', "<img class='bubble' src=multicolorbub.gif>", 40);
	//this puts objects in the bubble array to the .create function
	bubbleArray.forEach(function(obj){
		obj.create();
});
};
//this randomly spaces the bubbles 
function newBubbleSpacer (){
	$('img').each(function(){
		$(this).css({"margin-left": +Math.floor(Math.random() * boardWidth +30)+"px"});
	}); 
};
newBubbleSpacer();
//this removes clicked bubbles
function popBubble(){
	$('.bubble').click(function(e){
		count ++;
		$('.score').html(parseInt($('.score').html(), 10)+1);
		(this).remove('.bubble');
	});
}
popBubble();

function startFalling(){

var allBubs = $('.bubble');
$('.start').click(function(){
	allBubs.addClass('start')
})
};

startFalling();


});








