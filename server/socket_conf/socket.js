module.exports = (io) => {
    console.log("Socket io Ready");
    io.on('connection', function(socket){
        console.log('A user connected');
        console.log('and this is the id that ` maybe ` we want to store in the future ')
        console.log(socket.id)
        socket.on('mySocketServer', m => {
            console.log(m)
            socket.broadcast.emit('chat', m);
        })
    });      
}
