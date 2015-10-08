var host = "127.0.0.1", port = 33333;

var dgram = require( "dgram" );

var server = dgram.createSocket( "udp4" );

server.on( "message", function( msg, rinfo ) {
    var respMsg = 'OK ';
    console.log( rinfo.address + ':' + rinfo.port + ' - ' + msg );
    server.send( respMsg, 0, respMsg.length, rinfo.port, rinfo.address ); // added missing bracket
});
server.bind( port, host );

