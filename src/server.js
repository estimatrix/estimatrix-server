const express = require( 'express' )

const app = express()
const server = require( 'http' ).createServer( app )
const io = require( 'socket.io' )( server, {
  cors: {
    origin: '*',
    methods: [ 'GET', 'POST' ],
    transports: [ 'websocket', 'polling' ],
    credentials: true
  },
  allowEIO3: true
} )

const PORT = process.env.PORT || 3000

app.use( '/', ( req, res ) => {
  res.status( 200 ).send( 'Men and woman at work...' )
} )

io.on( 'connection', socket => {
  console.log( 'Connected socket: ', socket.id )
} )

server.listen( PORT, () => console.log( `Server running on port ${ PORT }` ) )
