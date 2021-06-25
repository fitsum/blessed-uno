const makers = require('./utils');

const screen = makers.makeScreen();
screen.title = "Blessed Sketch 001";

let w = screen.width,
  h = screen.height,
  color = "red",
  bgcolor = "#222";

// container = makers.makeContainer('500','500', {'fg':'black', 'bg':'white'}, '' )
container = makers.makeContainer(screen.width, screen.height/2, {'fg':color, 'bg':bgcolor}, '' )

container.key('enter', (ch, key)=>{
	container.setContent('Centered content FFS');
	screen.render();
});

const quits = ['q', 'escape','C-c'];

const actions = {
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
	

