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
var clipscreen = TweenMax.to(".slide-inner--item_screen",3,{
  css: { opacity:"1", transform: "scale(1)"}
})
var clipbg = TweenMax.to(".slide-inner--item_bg",3,{
  // opacity: 1
  css: { opacity:"1", transform: "scale(1)"}
})

timeline.add(clipeye,1)
timeline.add(cliplens,0.5)
timeline.add(cliplight, 1.8)
timeline.add(clipscreen, 3)
timeline.add(clipbg, 3)
