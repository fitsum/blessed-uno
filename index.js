var blessed = require('blessed');

var screen = blessed.screen({smartCSR: true});
screen.title = "Blessed Sketch 001";

var boxContent = ['one','two','three'];

var box = blessed.box({
	top: 'center',
	left: 'center',
	width: '50%',
	height: '25%',
	content: boxContent[1],
	style: {
		fg: '#006',
		bg: 'green',	
	}
});

screen.append(box);
box.focus();
screen.render();
	

