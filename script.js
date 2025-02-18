var crsr = document.querySelector(".cursor");
var blr = document.querySelector(".blur");
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.clientX + 35 + "px";
    crsr.style.top = dets.clientY + "px";
    blr.style.left = dets.clientX-200 + "px";
    blr.style.top = dets.clientY-220 + "px";
})
var h1 = document.querySelectorAll("#nav h1");

h1.forEach(function(elem){
  elem.addEventListener("mouseenter",function(){
    crsr.style.scale =  4
    crsr.style.border = "1px solid white"
    crsr.style.backgroundColor = "transparent"
    h1.style.backgroundColor = "black";
  })
})
h1.forEach(function(elem){
    elem.addEventListener("mouseleave",function(){
      crsr.style.scale = 1
      crsr.style.border = "0px solid rgb(125, 210, 50)"
      crsr.style.backgroundColor = "rgb(125, 210, 50)"
    })
  })
  
var card =document.querySelectorAll(".cards-cont #card")
card.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
      crsr.style.scale =  4
      crsr.style.border = "1px solid white"
      crsr.style.backgroundColor = "transparent"
      h1.style.backgroundColor = "black";
    })
  })
  card.forEach(function(elem){
      elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid rgb(125, 210, 50)"
        crsr.style.backgroundColor = "rgb(125, 210, 50)"
      })
    })
    

var img =document.querySelectorAll(".moves img")
img.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
      crsr.style.scale =  4
      crsr.style.border = "1px solid white"
      crsr.style.backgroundColor = "transparent"
      h1.style.backgroundColor = "black";
    })
  })
  img.forEach(function(elem){
      elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid rgb(125, 210, 50)"
        crsr.style.backgroundColor = "rgb(125, 210, 50)"
      })
    })

    var elem =document.querySelectorAll(".elem")
    elem.forEach(function(dets){
      dets.addEventListener("mouseenter",function(){
        crsr.style.scale =  4
        crsr.style.border = "1px solid white"
        crsr.style.backgroundColor = "transparent"
      })
    })
    elem.forEach(function(dets){
      dets.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid rgb(125, 210, 50)"
        crsr.style.backgroundColor = "rgb(125, 210, 50)"
      })
    })

    


gsap.to("#nav",{
    duration: 0.5,
    height:"150px",
    backgroundColor:"black",
    scrollTrigger:{
        trigger: "#nav",
        scroller:"body",
        start:" top -10%",
        end:"top -11%",
        scrub:1,
    }
})
gsap.to(".main",{
    backgroundColor:"black",
    duration: 0.2,
    scrollTrigger:{
        trigger: ".main",
        scroller:"body",
        start:"top -30%",
        end:"top -70%",
        scrub:2,
    }
    
})

gsap.from(".qt1",{
  x:-70,
  y:-70,
  duration:1,
  scrollTrigger:{
    trigger:".qt1",
    scroller:"body",
    start:"top 60%",
    end:"top 45%",
    scrub:2,
  }

})

gsap.from(".qt2",{
  x:40,
  y:40,
  duration:1,
  scrollTrigger:{
    trigger:".qt2",
    scroller:"body",
    start:"top 85%",
    end:"top 70%",
    scrub:2,
  }
})

gsap.from(".page4 h2",{
  y:50,
  duration:1,
  scrollTrigger:{
    trigger:".page4 h2",
    scroller:"body",
    start:"top 100%",
    end:"top 85%",
    scrub:1,
  }
})