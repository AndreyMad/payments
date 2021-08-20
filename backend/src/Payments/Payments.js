const io = (io)=>{

    io.on('connection', function(socket) {
        // console.log(socket.handshake.query);
        setTimeout(function() {
            console.log('user connected');
            socket.send(socket.id);
       }, 1000);
        //Whenever someone disconnects this piece of code executed
        socket.on('disconnect', function () {
           console.log('A user disconnected');
        });
      });
}
module.exports= io