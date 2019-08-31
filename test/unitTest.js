const chai = require('chai');
const testFunc = require('../module.js');

// Mochaの規則に従ってテストを実装
describe('UnitTest', function(){

    it('名前が"user_xxxx"であること', function(){
        chai.assert.match(testFunc.setName(), /user_[0-9]{1,4}/);
    });

    it('room名が0でtrue', function(){
        chai.assert.isOk(testFunc.checkRoom(0));
    });

    it('room名が1でtrue', function(){
        chai.assert.isOk(testFunc.checkRoom(1));
    });

    it('room名が9999でtrue', function(){
        chai.assert.isOk(testFunc.checkRoom(9999));
    });

    it('room名が1234でtrue', function(){
        chai.assert.isOk(testFunc.checkRoom(1234));
    });

    it('room名が5桁以上の場合フォーマットエラー', function(){
        chai.assert.isNotOk(testFunc.checkRoom(12345));
    });

    it('room名が英数字以外の場合フォーマットエラー', function(){
        chai.assert.isNotOk(testFunc.checkRoom("aaaa"));
    });

    it('room名が小数点の場合フォーマットエラー', function(){
        chai.assert.isNotOk(testFunc.checkRoom(1.45));
    });

    it('ユーザーが入室した時のメッセージが正しいフォーマットであること', function(){
        chai.assert.match(testFunc.checkInRoomMsg("123","user_456"), /Room No.[0-9]{1,4} > user_[0-9]{1,4} さんが入室しました/);
    });

    it('ユーザーが退出した時のメッセージが正しいフォーマットであること', function(){
        chai.assert.match(testFunc.checkLeaveRoomMsg("123","user_456"), /Room No.[0-9]{1,4} > user_[0-9]{1,4} さんが退出しました/);
    });

    it('メッセージが1文字以上140文字以下であること', function(){
        chai.assert.isOk(testFunc.checkMsgLength("test message"));
    });

    it('メッセージが1文字でtrue', function(){
        chai.assert.isOk(testFunc.checkMsgLength("0"));
    });

    // 140文字
    it('メッセージが140文字でtrue', function(){
        chai.assert.isOk(testFunc.checkMsgLength("11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111"));
    });

    // 139文字
    it('メッセージが139文字でtrue', function(){
        chai.assert.isOk(testFunc.checkMsgLength("111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111"));
    });

    //141文字
    it('メッセージが141文字でfalse', function(){
        chai.assert.isNotOk(testFunc.checkMsgLength("111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111"));
    });

    // 0文字
    it('メッセージが0文字でfalse', function(){
        chai.assert.isNotOk(testFunc.checkMsgLength(""));
    });

    // 半角空白文字
    it('メッセージが半角空白だけでfalse', function(){
        chai.assert.isNotOk(testFunc.checkMsgSpace(" "));
    });

    // 全角空白文字
    it('メッセージが全角空白だけでfalse', function(){
        chai.assert.isNotOk(testFunc.checkMsgSpace("　"));
    });

    // 混合空白
    it('メッセージが半角空白と全角空白だけでfalse', function(){
        chai.assert.isNotOk(testFunc.checkMsgSpace("       　"));
    });

    // メッセージがstring型でtrue
    it('メッセージがstring型でtrue', function(){
        chai.assert.isOk(testFunc.checkMsgString("test message"));
    });

    // メッセージがArray型でfalse
    it('メッセージがArray型でfalse', function(){
        var array = new Array;
        chai.assert.isNotOk(testFunc.checkMsgString(array));
    });

});