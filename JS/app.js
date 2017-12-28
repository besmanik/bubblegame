$(document).ready(function(){
	console.log('doc ready')


let boardWidth = $('#board').width();
bubbleArray = [];
let bubbleLoop = 3;
count = 1;

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

			// window.setInterval(function(){
   //          Bubbles();
   //       }, 3000);//3 seconds create time
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

let bubble1 = new Bubbles ("bubble1", "<img class='bubble' src=Images/bubb3.gif_c200>", 20);
let bubble2 = new Bubbles ('bubble2', "<img class='bubble' src=Images/crazyBub.gif>", 10);
let bubble3 = new Bubbles ('bubble3', "<img class='bubble' src=Images/crazyBub1.gif>", 30);
let bubble4 = new Bubbles ("bubble4", "<img class='bubble' src=Images/bubb3.gif_c200>", 20);
let bubble5 = new Bubbles ('bubble5', "<img class='bubble' src=Images/crazyBub.gif>", 10);
let bubble6 = new Bubbles ('bubble6', "<img class='bubble' src=Images/multicolorbub.gif>", 40);
	//this puts objects in the bubble array to the .create function
	bubbleArray.forEach(function(obj){
		obj.create();		
});
};

function hideBubbles() {
	$('.bubble').hide();
};
hideBubbles();

//this randomly spaces the bubbles 
function newBubbleSpacer (){
	$('img').each(function(){
		$(this).css({"margin-left": +Math.floor(Math.random() * boardWidth -100)+"px"});
		});
	};

newBubbleSpacer();




//localStorage.setItem('score', 0);


//this removes clicked bubbles
function popBubble(){
	$('.bubble').click(function(){
		localStorage.setItem('score', + parseInt($(this).data('points')) + getScore());
		console.log($(this).data('points'));
		(this).remove('.bubble');
	});
}
popBubble();
 
//localStorage.setItem('highScore', 0)


function setHighScore () {
	$('body').one('animationend oAnimationEnd', '.start', function(){
  			if (localStorage.getItem('score') >= localStorage.getItem('highScore')) {
  					localStorage.setItem('highScore', getScore());
  					$('.gameBack').append("<div class='gameOver'>Great Job! A new high Score<hr></div>");
  				} else {
  					$('.gameBack').append("<div class='gameOver'>Game Over!<br><hr><button value='Refresh' onclick='javascript:location.reload()' class='tryAgain'>Try again!</button></div>")
  				}
		})
};
setHighScore();

function startFalling(){

var allBubs = $('.bubble');
$('.startbtn').click(function(){
	$('.bubble').show();
	allBubs.addClass('start');
	localStorage.setItem('score', 0);
	(this).remove('.startbtn');
})
};
startFalling();

function bubblePointVals() {
	
	$('img').each(function(key, value){
		if ($(this).attr('src') == 'Images/bubb3.gif_c200'){
			$(this).data("points", 20)
		} else if ($(this).attr('src') == 'Images/crazyBub.gif'){
			$(this).data("points", 10)
		} else if ($(this).attr('src') == 'Images/crazyBub1.gif'){
			$(this).data("points", 30)
		} else if ($(this).attr('src') == 'Images/multicolorbub.gif'){
			$(this).data("points", 40)
		};
	});
	
};
bubblePointVals();

function getScore() {
 	return parseInt(localStorage.getItem('score') || 10);
}

function showScore() {
  $('#score').text(localStorage.getItem('highScore'));
}
showScore();

function tryAgain () {

	$('button.tryAgain').click(function(){
		window.reload(false);
		localStorage.setItem('score', 0);
	});
};
tryAgain();



// function showScore() {
//   document.getElementById('score').innerText = getScore();
// }

// showScore();

});








