var first = new mojs.Shape({
    shape:'circle',
    radius:{0:40},
    stroke:'cyan',
    strokeWidth:{15:0},
    fill:'none',
    left:0,
    top:0
});
var seconds = [];
var colors = ['deeppink', 'blue', 'magenta', 'tomato'];
for(var i=0; i<4; i++){
    var second = new mojs.Shape({
    parent:first.el,
    shape:'circle',
    radius:{0:'rand(10,30)'},
    stroke:colors[i],
    strokeWidth:{10:0},
    fill:'none',
    left:'50%',
    top:'50%',
    x:'rand(-50, 50)',
    y:'rand(-50, 50)',
    delay:100
});
seconds.push(second);
}
document.addEventListener('click', function(e){
    first.tune({x:e.pageX, y:e.pageY}).replay();
    second.replay();
    for(var i=0; i<seconds.length; i++){
        seconds[i].generate().replay();
    }
});