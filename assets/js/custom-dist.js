var timeline = new TimelineMax({})

timeline.set("#mask",{
  transformOrigin: "50% 50%"
})
timeline.from("#mask",1,{
  scale: 3
})
