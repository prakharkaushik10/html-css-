


//var crsrblur = document.querySelector("#cursorblur")
//document.addEventListener("mousemove",function(dets){
    //crsrblur.style.left = dets.x - 150 + "px"
    //crsrblur.style.top = dets.y - 150 + "px"
//})
gsap.to("#nav",{
    backgroundColor:"#dfd9da7d",
    height : "120px",
    duration:0.5,
    scrollTrigger:{
        trigger: "#nav",
        scroller: "body",
        //markers: true,
        start:"top -10%",
        end: "top -10%",
        scrub:true
    }
})
gsap.to("#main",{
    backgroundColor: "#000000ad",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        //markers: true,
        start: "top -30%",
        end:"top -100%",
        scrub: true
    }
})