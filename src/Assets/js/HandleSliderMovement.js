
export const HandleSliderMovement=()=>{
    let FirstReel=0
    let SecondReel=0

let ArrowsLeft=document.querySelectorAll(".icon-wrapper.left")
let ArrowsRight=document.querySelectorAll(".icon-wrapper.right")

ArrowsRight.forEach(element => {
    element.addEventListener("click",(e)=>{

        // document.querySelectorAll(".icon-wrapper.left").forEach(EachIcon=>{
        //     EachIcon.classList.remove("disable")
        // })
        let Reel=e.target.parentNode.querySelector(".reel");
        
        if(Reel.classList.contains("first-reel")){
            e.target.parentNode.firstElementChild.classList.remove("disable")
            FirstReel=FirstReel-100     
            Reel.style.transform=`translateX(${FirstReel}%)`
        }
        if(Reel.classList.contains("second-reel")){
            e.target.parentNode.firstElementChild.classList.remove("disable")
            SecondReel=SecondReel-100
            Reel.style.transform=`translateX(${SecondReel}%)`
        }
   
    })
});
ArrowsLeft.forEach(element => {
    element.addEventListener("click",(e)=>{
        let Reel=e.target.parentNode.querySelector(".reel");
        if(FirstReel<0){
            if(Reel.classList.contains("first-reel")){
                FirstReel=FirstReel+100     
                Reel.style.transform=`translateX(${FirstReel}%)`
                e.target.classList.remove("disable")
            }
        }

        if(Reel.classList.contains("first-reel")){
            if(FirstReel==0){
            e.target.classList.add("disable")
            }
        }

      
        
        
       if(SecondReel<0){
        if(Reel.classList.contains("second-reel")){
            SecondReel=SecondReel+100
            Reel.style.transform=`translateX(${SecondReel}%)`
            e.target.classList.remove("disable")
        }
       }else{
        if(Reel.classList.contains("second-reel")){
            e.target.classList.add("disable")
        }

     
        // console.log(SecondReel)
    }

    if(Reel.classList.contains("second-reel")){
        if(SecondReel==0){
        e.target.classList.add("disable")
        }
    }

   
    })
});
}