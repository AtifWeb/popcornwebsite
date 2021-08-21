
export const HandleSliderMovement=()=>{
    let FirstReel=0
    let SecondReel=0

let ArrowsLeft=document.querySelectorAll(".icon-wrapper.left")
let ArrowsRight=document.querySelectorAll(".icon-wrapper.right")

ArrowsLeft.forEach(element => {
    element.addEventListener("click",(e)=>{
        let Reel=e.target.parentNode.querySelector(".reel");
        if(Reel.classList.contains("first-reel")){
            FirstReel=FirstReel-100     
            Reel.style.transform=`translateX(${FirstReel}%)`
        }
        if(Reel.classList.contains("second-reel")){
            SecondReel=SecondReel-100
            Reel.style.transform=`translateX(${SecondReel}%)`
        }
   
    })
});
ArrowsRight.forEach(element => {
    element.addEventListener("click",(e)=>{
        let Reel=e.target.parentNode.querySelector(".reel");
        if(FirstReel<0){
            if(Reel.classList.contains("first-reel")){
                FirstReel=FirstReel+100     
                Reel.style.transform=`translateX(${FirstReel}%)`
            }
        }
       if(SecondReel<0){
        if(Reel.classList.contains("second-reel")){
            SecondReel=SecondReel+100
            Reel.style.transform=`translateX(${SecondReel}%)`
        }
       }
   
    })
});
}