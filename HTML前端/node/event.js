//引入events模块
var event = require('events');
//创建eventEmitter 对象
var eventEmitter = new event.EventEmitter();



// //绑定事件
// eventEmitter.on('eventName',eventHandler);
// //触发事件
// eventEmitter.emit('eventName');

//创建事件处理程序
var connectHandler = function connected(){
    console.log('连接成功！');

    //触发事件
    eventEmitter.emit('data-received');
}

//绑定事件处理程序
eventEmitter.on('connection',connectHandler);

eventEmitter.on('data-received',function(){
    console.log('数据传输成功！');
});

//触发  connection 事件

eventEmitter.emit('connection');    

console.log('程序执行完毕！');