var timeline = new TimelineMax({})

var clipeye = TweenMax.to(".slide-inner--item_eye",1,{
  opacity: 1
})
var cliplens = TweenMax.to(".slide-inner--item_lens",1,{
  opacity: 1
})
var cliplight = TweenMax.to(".slide-inner--item_light",2,{
  opacity: 1
})
timeline.set(".slide-inner--item_screen",{
  transformOrigin: "50% 50%"
})
var clipscreen = TweenMax.to(".slide-inner--item_screen",2,{
  css: { opacity:"1", transform: "scale(1)"},
  ease: Expo.easeOut
})
var clipbg = TweenMax.to(".slide-inner--item_bg",2,{
  // opacity: 1
  css: { opacity:"1", transform: "scale(1)"},
  ease: Expo.easeOut
})

// slide1
timeline.add(cliplens,0.5)
timeline.add(clipeye,1)
timeline.add(cliplight, 1.8)
timeline.add(clipscreen, 2.8)
timeline.add(clipbg, 2.8)

// onmouseMove
var items = document.getElementsByClassName("slide-inner--HUD"); 
document.addEventListener('mousemove', function (evt){ 
  var x = evt.clientX; 
  var y = evt.clientY; 
  //console.log(x); 
  var winWidth = window.innerWidth; 
  var winHeight = window.innerHeight; 
  var halfWidth = winWidth / 2; 
  var halfHeight = winHeight / 2; 
  var rx = x - halfWidth; 
  var ry = halfHeight - y; 
  var length = items.length; 
  var max = 28; 
  for (var i = 0 ; i < length ; i++) { 
  var dx = (items[i].getBoundingClientRect().width/max)*(rx / -halfWidth); 
  var dy = (items[i].getBoundingClientRect().height/max)*(ry / halfHeight); 
  items[i].style['transform'] = items[i].style['-webkit-transform'] = 'translate('+dx+'px,'+dy+'px)'; 
  } 
}, false); 