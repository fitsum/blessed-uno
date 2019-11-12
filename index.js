var blessed = require('blessed');

var screen = blessed.screen({smartCSR: true});
screen.title = "Blessed Sketch 001";

const boxContent = ['one','two','three'];

let box = blessed.box({
	top: 'center',
	left: 'center',
	width: '50%',
	height: '50%',
	content: boxContent[1],
	style: {
		fg: '#006',
		bg: 'green',	
	}
});

let innerBox = blessed.box({
	top: 'center',
	left: 'center',
	width: '25%',
	height: '25%',
	style: {bg: 'white'}
})


screen.key(['q','escape','C-c'],(ch, key)=>{
	return process.exit(0);
})


screen.append(box);
screen.append(innerBox);

box.focus();

screen.render();
	
