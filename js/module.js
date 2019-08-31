module.exports.setName = function(){
    return name = "user_" + Math.floor(Math.random() * 10000 + 1); 
}

module.exports.checkRoom = function(room){
    return /^[0-9]{1,4}$/.test(room);
}

module.exports.checkInRoomMsg = function(room, name){
    return "Room No." + room + " > " + name + " さんが入室しました";
}

module.exports.checkLeaveRoomMsg = function(room, name){
    return "Room No." + room + " > " + name + " さんが退出しました";
}

module.exports.checkMsgLength = function(msg){
    if(msg.length > 0 && 140 >= msg.length){
        return true;
    }
    return false;
}

module.exports.checkMsgSpace = function(msg){
    if(/^( |　)+$/.test(msg)){
        return false;
    }
    return true;
}

module.exports.checkMsgString = function(msg){
    if(typeof msg !== 'string'){
        return false;
    }
    return true;
}