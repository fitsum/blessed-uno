import { makeScreen, makeContainer } from './utils.js'

const screen = makeScreen()
screen.title = 'Blessed Sketch 001'

const container = makeContainer( '300', '300', { fg: 'green', bg: 'transparent' }, '' )

container.key( 'enter', ( ch, key ) => {
  container.setContent( 'Centered content FFS' )
  screen.render()
} )

const quits = [ 'q', 'escape', 'C-c' ]

const actions = {
  up: 'up or forward',
  right: 'right',
  down: 'down or back',
  left: 'left',
  space: 'spacebar!'
}

screen.key( quits, ( ch, key ) => {
  return process.exit( 0 )
} )

screen.key( Object.keys( actions ), ( ch, key ) => {
  container.setContent( `action: ${ actions[ key.name ] }` )
  screen.render()
} )

screen.append( container )
screen.render()
