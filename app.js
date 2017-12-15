$(document).ready(function(){
	console.log('doc ready')


let boardWidth = $('#board').width();
bubbleArray = [];
let bubbleLoop = 1;
count = 0;

for (var i = 0; i <= bubbleLoop; i++) {
	
function Bubbles (name, image, value) {
	this.name = name;
	this.image = image;
	this.value = value;
	this.create = function (){
		let idCount = 1;
		$('#board').append(this.image);
		$('img').each(function(){
		$(this).attr('id', 'bubble'+idCount);
		idCount ++;
		})
	};
	this.attach = function(){
		bubbleArray.push(this);
	}
	this.attach();
}

let bubble1 = new Bubbles ("bubble1", "<img class='bubble' src=bubb3.gif_c200>", 20);
let bubble2 = new Bubbles ('bubble2', "<img class='bubble' src=crazyBub.gif>", 10);
let bubble3 = new Bubbles ('bubble3', "<img class='bubble' src=crazyBub1.gif>", 30);
let bubble4 = new Bubbles ("bubble4", "<img class='bubble' src=bubb3.gif_c200>", 20);
let bubble5 = new Bubbles ('bubble5', "<img class='bubble' src=crazyBub.gif>", 10);
let bubble6 = new Bubbles ('bubble6', "<img class='bubble' src=multicolorbub.gif>", 40);

	bubbleArray.forEach(function(obj){
		obj.create();
});
};

function newBubbleSpacer (){
	$('img').each(function(){
		$(this).css({"margin-left": +Math.floor(Math.random() * boardWidth +30)+"px"});
	}); 
};
newBubbleSpacer();

function popBubble(){
	$('.bubble').click(function(e){
		count ++;
		console.log(count);
		(this).remove('.bubble');
	});
}
popBubble();

});








