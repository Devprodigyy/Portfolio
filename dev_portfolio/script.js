


gsap.from("main",{
})


gsap.from("h1",{
    // key, value, pair like css,
    y:-100,
    duration:1.7,
    delay:0,
})

gsap.from("nav",{
    // key, value, pair like css,
    y:-100,
    duration:1.7,
    delay:0,
})



gsap.from("#footer a ",{
    // key, value, pair like css,
    y: -20,
    duration:1,
    delay:0,
    stagger:1,
    opacity:0,
})


var slide=document.getElementById("slide");
slide.addEventListener("click",function(){
    
    gsap.to("section",{
        // key, value, pair like css,
        left:"0%",
        backgroundColor:"black",
    })

});



var slide=document.getElementById("slide2");
slide.addEventListener("click",function(){
    
    gsap.to("section",{
        // key, value, pair like css,
        left:"100%",
        backgroundColor:"white",
    })

});




// pro


gsap.from("#pro ",{
    // key, value, pair like css,
    y: -20,
    duration:5,
    delay:0,
    stagger:1,
    opacity:0,
    stagger:1,
})



var main=document.querySelector("#main");
var crsr=document.querySelector("#cursor");

main.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x+"px";
    crsr.style.top=dets.y+"px";
})

