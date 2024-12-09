import { createRequire } from 'node:module'
const require = createRequire( import.meta.url )
const blessed = require( 'blessed' )

const makeScreen = () => {
  return blessed.screen( { smartCSR: false } )
}

const makeContainer = ( width, height, style, content ) => {
  return blessed.box( {
    top: 'top',
    left: '1',
    width,
    height,
    content,
    style: { ...style }
  } )
}

export { makeScreen, makeContainer }
