const blessed = require('blessed');

const makeScreen = () => {
	return blessed.screen({smartCSR: false});
};


const makeContainer = (w, h, style, content) => {
	return blessed.box({
		top: 'top',
		right: '1',
		width: w,
		height: h,
		content: content,
		style: {...style}
	});
};


module.exports = { makeScreen, makeContainer };

