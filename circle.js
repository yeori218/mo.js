var circle1 = new mojs.Shape({
    shape:'circle',
    radius:{0:'rand(10,50)'},
    left:0,
    top:0,
    x:0,
    y:0,
    fill:'yellow',
    stroke:'tomato',
    strokeWidth:'rand(1,10)',
    duration:'rand(200,2000)',
    delay:0
});
document.addEventListener('click', function(e){
    circle1.replay().tune({x:e.pageX, y:e.pageY}).generate();
});