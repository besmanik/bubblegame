$(document).ready(function(){
	console.log('doc ready')
})

function Bubble (name, image, value) {
	this.name = name;
	this.image = image;
	this.value = value;
}
let bubble1 = new Bubble ("bubble1", "bubb3.gif_c200", 20);
let bubble2 = new Bubble ('bubble2', 'crazyBub.gif', 10);
let bubble3 = new Bubble ('bubble3', 'crazyBub1.gif', 30);

Bubble();
console.log(Bubble)























// function Bubble(image, value) {
// 	this.image: image
// 	this.value: 1
// }

// Bubble.prototype.create = function (){
	
// 	let container = $('#canvas');
// 	let image = append('img');
// 	img.src = this.src;
// 	img.className = 'bubble';
// 	img.style.width = '200px';
// 	container.append(img);
// }

// function bubbleGo(){
// 	$('#canvas').append.Bubble.image;
// }

