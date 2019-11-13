var blessed = require('blessed');

var screen = blessed.screen({smartCSR: false});
screen.title = "Blessed Sketch 001";

const boxContent = ['one','two','three'];

let container = blessed.box({
	top: 'top',
	right: '1',
	width: '300',
	height: '400',
	content: 'Cholly!',
	style: {
		fg: 'red',
		bg: 'green',	
	}
});

container.key('enter', (ch, key)=>{
	container.setContent('Centered content FFS');
	screen.render();
});


let quits = ['q', 'escape','C-c'];

let actions = {
	'up': 'up or forward',
	'right': 'right',
	'down': 'down or back',
	'left': 'left',
	'space': 'spacebar!',
}


screen.key(quits, (ch, key)=>{
	return process.exit(0);
});

screen.key(Object.keys(actions), (ch, key)=>{
	container.setContent(`action: ${actions[key.name]}`);
	screen.render();
});

screen.append(container);
screen.render();
	
