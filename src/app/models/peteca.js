module.exports = function(ws, req) {
    ws.on('message', function(msg) {
      console.log(msg);
      console.log('Peteca')
      ws.send('Oi')
    });
    console.log('socket', req.testing);
  }