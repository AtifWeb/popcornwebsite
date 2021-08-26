export const TouchSlider=()=>{
//     let ReelWrapper=document.querySelector(".second-reel"),slider=Array.from(document.querySelectorAll(".card-wrapper"))


// let IsDragging=false,startPos=0,currentTranslate=0,prevTranslate=0,animationID=0,currentIndex=0

// console.log(slider)

// slider.forEach((Slide,Index)=>{
//     Slide.addEventListener("dragstart",(e)=>{
//         e.preventDefault()
//         console.log("dragstart")
//     })



//     // touch
//     Slide.addEventListener("touchstart" ,touchstart(Index))
//     Slide.addEventListener("touchend" ,touchend)
//     Slide.addEventListener("touchmove" ,touchmove)


//     // mouse
//     Slide.addEventListener("mousedown",touchstart(Index))
//     Slide.addEventListener("mouseup",touchend)
//     Slide.addEventListener("mouseup",touchHandleTransform)
//     Slide.addEventListener("mouseleave",touchend)
//     Slide.addEventListener("mousemove",touchmove)
// })



// function touchstart(index){
//     return function(event){
//         IsDragging=true;
//         currentIndex=index
//         startPos=event.type.includes("mouse")?event.pageX-ReelWrapper.getBoundingClientRect().left:event.touches[0].clientX
     
//         animationID=requestAnimationFrame(animation)
//     }
// }

// function animation(){
//     setSliderPosition()
//     if(IsDragging){
//         requestAnimationFrame(animation)
//     }
// }
// function setSliderPosition(){
//     ReelWrapper.style.transform=`translateX(${currentTranslate}px)`
// }
// function touchend(event){
   
//     IsDragging=false
    
  
//     cancelAnimationFrame(animation)
// }
// function touchHandleTransform(event){
//     if(event.pageX-document.querySelector(".request-navigation-area").getBoundingClientRect().left<300){
//         prevTranslate=prevTranslate+300
//         ReelWrapper.style.transform=`translateX(-${prevTranslate}px)`
//         currentTranslate=prevTranslate
        
//     }else{
       
//         ReelWrapper.style.transform=`translateX(0)`
//     }
// }
// function  touchmove(event){
//     console.log(event.pageX-document.querySelector(".request-navigation-area").getBoundingClientRect().left)
//     if(IsDragging==true){
//        const CurrentPosition=event.type.includes("mouse")?event.pageX-ReelWrapper.getBoundingClientRect().left:event.touches[0].clientX
//        currentTranslate=prevTranslate+CurrentPosition-startPos
//        console.log(currentTranslate)
//         // setSliderPosition()
//         console.log("move")
//     }
// }




}