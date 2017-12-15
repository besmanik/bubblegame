$(document).ready(function(){
	console.log('doc ready')

function bubbleGame(){
	let game = $('.board');
	let score = $('.board.score');
	let highScores = $('.board ol.highScores');
	let time = $('.board span.time');
	let start = $('.board span.start');
}

function Bubbles (name, value, maxLifeSpan) {
	this.name = name;
	this.value = value;
	this.lifeSpan = lifeSpan;
};

let bubbles = new Array();

bubble[0] = new Bubble("crazybub", 20, 2);
bubble[1] = new Bubble('sparkle', 10, 3);
bubble[2] = new Bubble('multibub', 30, 1);


function makeBubbles() {
	let index = Math.floor((Math.random() * 3));
	let bubble = bubble[index];

	let id = Math.floor((Math.random() * 1000)+1);
	let mls = Math.floor((Math.random() * parseInt(bubble.maxLifeSpan) * 1000));
	let x = Math.floor((Math.random() * (game))+1);

	let fragment = $('span');
	fragment.id = 'bubble-' +id;
	fragment.attr('class', 'bubble' + bubble.name);
	fragment.attr('data-value', bubble.value);

	$('.board').append(fragment);

	fragment.style.left = x +'px';

	setTimeout(function(){
		Remove(fragment.id);
	}, mls);
}
});