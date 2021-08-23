
export const HandleSliderMovement=()=>{
    let FirstReel=0
    let SecondReel=0

let ArrowsLeft=document.querySelectorAll(".icon-wrapper.left")
let ArrowsRight=document.querySelectorAll(".icon-wrapper.right")

ArrowsRight.forEach(element => {
    element.addEventListener("click",(e)=>{

        
        let Reel=e.target.parentNode.querySelector(".reel");
        
      if(FirstReel>-100){
        if(Reel.classList.contains("first-reel")){
            e.target.parentNode.firstElementChild.classList.remove("disable")
            FirstReel=FirstReel-100     
            Reel.style.transform=`translateX(${FirstReel}%)`
        }
      }
       if(SecondReel>-200){
        if(Reel.classList.contains("second-reel")){
            e.target.parentNode.firstElementChild.classList.remove("disable")
            SecondReel=SecondReel-100
            Reel.style.transform=`translateX(${SecondReel}%)`
        }
       }

       if(Reel.classList.contains("second-reel")){
       if(SecondReel<-100){
        e.target.classList.add("disable")
       }


    }
       if(Reel.classList.contains("first-reel")){
       if(FirstReel<0){
        e.target.classList.add("disable")
       }


    }
   
    })
});
ArrowsLeft.forEach(element => {
    element.addEventListener("click",(e)=>{
        let Reel=e.target.parentNode.querySelector(".reel");
        if(FirstReel<0){
            if(Reel.classList.contains("first-reel")){
                e.target.parentNode.lastElementChild.classList.remove("disable")
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
            e.target.parentNode.lastElementChild.classList.remove("disable")
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