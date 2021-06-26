import { require } from './require.js'; 
const blessed = require('blessed');

const makeScreen = () => {
	return blessed.screen({smartCSR: false});
};


const makeContainer = (w, h, style, content) => {
	return blessed.box({
		top: '50',
		left: '1',
		width: w,
		height: h,
		content: content,
		style: {...style}
	});
};


export { makeScreen, makeContainer };

