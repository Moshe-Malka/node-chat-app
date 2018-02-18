var socket = io();

socket.on('connect', function() {
  console.log('Connected to server');

  socket.emit('createMessage', {
    from: 'Kiko',
    text: 'Hey man what is up?'
  });
});

socket.on('dissconnect', function() {
  console.log('Disconnected from server');
});

socket.on('newMessage', function(msg){
  console.log(`Got new message from Server: ${JSON.stringify(msg, undefined, 2)}`);
});
