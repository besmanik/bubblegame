$(document).ready(function(){
	console.log('doc ready')
})

let boardWidth = $('#board').width();
let bubbleArray = [];
let bubbleLoop = 1;

function Bubbles (name, image, value) {
	this.name = name;
	this.image = image;
	this.value = value;
	this.create = function (){
		$('#board').append(this.image);
	};
	this.attach = function(){
		bubbleArray.push(this);
	};
	for (i = 1; i <= bubbleLoop; i++) {
		this.attach();
	};
}

let bubble1 = new Bubbles ("bubble1", "<img class='bubble' id='bubble1' src=bubb3.gif_c200>", 20);
let bubble2 = new Bubbles ('bubble2', "<img class='bubble' id='bubble2' src=crazyBub.gif>", 10);
let bubble3 = new Bubbles ('bubble3', "<img class='bubble' id='bubble3' src=crazyBub1.gif>", 30);

bubbleArray.forEach(function(obj){
	obj.create();
});

function spaceRandom(bub){
	//let leftSpacing = ;
	for (var key in bubbleArray) {
  		if (bubbleArray.hasOwnProperty(key)) {
    let bubName = ("#" + bubbleArray[key]['name']);
	$(bubName).css({"margin-left": +Math.floor(Math.random() * boardWidth -20)+"px"})
	}
}
};
spaceRandom();

function popBubble(){
	$('.bubble').click(function(){
		(this).remove('.bubble');
	});
}
popBubble();








