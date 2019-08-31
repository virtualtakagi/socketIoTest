var socket = io();

// サーバーからconnectedを受信したら、入室するルームを指定する
socket.on('inputRoom', function(){
    var room = prompt("room number? (1 - 4 digit)");
    socket.emit('checkRoom', room)
});

// 入力メッセージの送信処理
$('#btn').on('click', function(e) {
    e.preventDefault();
    const msg = $('#form [name=text]').val();
    msg.textContent;
    socket.emit('chat', msg);
    $('#form [name=text]').val("");
});

// メッセージ出力処理
socket.on('chat', function(msg){
    const dispMsg = document.createElement('li');
    dispMsg.textContent = msg;
    document.getElementById("message").appendChild(dispMsg);
});