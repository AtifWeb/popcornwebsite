
export const HandleSliderMovement=()=>{
window.addEventListener("resize",(event)=>{
let isTouch='ontouchstart' in window || navigator.maxTouchPoints


console.log(isTouch)
if(isTouch==0){
    document.querySelector(".request-navigation-area").classList.remove("touch");
}else{
    document.querySelector(".request-navigation-area").classList.add("touch");
}

})
window.addEventListener("load",(event)=>{
    let isTouch='ontouchstart' in window || navigator.maxTouchPoints
    
    
    console.log(isTouch)
    if(isTouch==0){
        document.querySelector(".request-navigation-area").classList.remove("touch");
    }else{
        document.querySelector(".request-navigation-area").classList.add("touch");
    }
    
    })

let setMobileView=false
    let FirstReel=0
    let SecondReel=0
    let setMobileViewSecondReel=false

    let ArrowsLeft=document.querySelectorAll(".icon-wrapper.left")
    let ArrowsRight=document.querySelectorAll(".icon-wrapper.right")

    window.addEventListener("load",e=>{
        if(window.innerWidth<850){
            setMobileView=true
        }

        if(window.innerWidth<1200){
            setMobileViewSecondReel=true
        }
    })

    window.addEventListener("resize",e=>{
        FirstReel=0
        document.querySelector(".first-reel").style.transform="translateX(0)"
        if(window.innerWidth<850){
          
            document.querySelector(".top-navigation-area .left").classList.add("disable")
            document.querySelector(".top-navigation-area .right").classList.remove("disable")
           
            setMobileView=true
        }else{
        
            setMobileView=false
        }
        if(window.innerWidth<1200){
        
            document.querySelector(".request-navigation-area  .left").classList.add("disable")
            document.querySelector(".request-navigation-area  .right").classList.remove("disable")
           
            setMobileViewSecondReel=true
        }else{
        
            setMobileViewSecondReel=false
        }

        if(window.innerWidth>1200){
            
            document.querySelector(".request-navigation-area  .left").classList.add("disable")
            document.querySelector(".request-navigation-area  .right").classList.remove("disable")
           
           
           
        }

        SecondReel=0
        document.querySelector(".second-reel").style.transform="translateX(0)"
    })



ArrowsRight.forEach(element => {
    element.addEventListener("click",(e)=>{

        
        let Reel=e.target.parentNode.querySelector(".reel");
        
   if(setMobileView==false){
    if(FirstReel>-100){
        if(Reel.classList.contains("first-reel")){
            e.target.parentNode.firstElementChild.classList.remove("disable")
            FirstReel=FirstReel-100     
            Reel.style.transform=`translateX(${FirstReel}%)`
        }
      }
   }else{
    if(FirstReel>-1050){
        if(Reel.classList.contains("first-reel")){
            e.target.parentNode.firstElementChild.classList.remove("disable")
            FirstReel=FirstReel-150     
            Reel.style.transform=`translateX(${FirstReel}px)`
        }
      }
   }
   if(setMobileViewSecondReel==false){
    if(SecondReel>-200){
        if(Reel.classList.contains("second-reel")){
            e.target.parentNode.firstElementChild.classList.remove("disable")
            SecondReel=SecondReel-100
            Reel.style.transform=`translateX(${SecondReel}%)`
        }
       }
   }else{
    if(SecondReel>-2097){
        if(Reel.classList.contains("second-reel")){
            e.target.parentNode.firstElementChild.classList.remove("disable")
            SecondReel=SecondReel-330
            Reel.style.transform=`translateX(${SecondReel}px)`
        }
       }
   }
  
   if(setMobileViewSecondReel==false){

       if(Reel.classList.contains("second-reel")){
       if(SecondReel<-100){
        e.target.classList.add("disable")
       }


    }}else{
        if(Reel.classList.contains("second-reel")){
      
            if(SecondReel<-2097){
                
                e.target.classList.add("disable")
               }
          
         }
    }

    if(setMobileView==false){
       if(Reel.classList.contains("first-reel")){
       if(FirstReel<0){
        e.target.classList.add("disable")
       }


    }
}else{
    if(Reel.classList.contains("first-reel")){
      
        if(FirstReel<-900){
            
            e.target.classList.add("disable")
           }
      
     }
}
   
    })
});

ArrowsLeft.forEach(element => {
    element.addEventListener("click",(e)=>{
        let Reel=e.target.parentNode.querySelector(".reel");
        if(setMobileView==false){
        if(FirstReel<0){
            if(Reel.classList.contains("first-reel")){
                e.target.parentNode.lastElementChild.classList.remove("disable")
                FirstReel=FirstReel+100     
                Reel.style.transform=`translateX(${FirstReel}%)`
                e.target.classList.remove("disable")
            }
        }}else{
            if(FirstReel<0){
                if(Reel.classList.contains("first-reel")){
                    e.target.parentNode.firstElementChild.classList.remove("disable")
                    FirstReel=FirstReel+150     
                    Reel.style.transform=`translateX(${FirstReel}px)`
                }
              }
           }

      
          
            if(setMobileView==false){
        if(Reel.classList.contains("first-reel")){
            if(FirstReel==0){
            e.target.classList.add("disable")
            }
        }}  else{
            if(Reel.classList.contains("first-reel")){
              
                if(FirstReel==0){
                    
                    e.target.classList.add("disable")
                   }
              
             }
        }

      
        
          if(setMobileViewSecondReel==false){
       if(SecondReel<0){
        if(Reel.classList.contains("second-reel")){
            e.target.parentNode.lastElementChild.classList.remove("disable")
            SecondReel=SecondReel+100
            Reel.style.transform=`translateX(${SecondReel}%)`
            e.target.classList.remove("disable")
        }
    }}else{
        if(SecondReel<0){
        if(Reel.classList.contains("second-reel")){
            e.target.parentNode.lastElementChild.classList.remove("disable")
            SecondReel=SecondReel+330
            Reel.style.transform=`translateX(${SecondReel}px)`
            e.target.classList.remove("disable")
        }  
    }
    }

console.log("second reel",SecondReel)

    if(setMobileViewSecondReel==false){
    if(Reel.classList.contains("second-reel")){
        if(SecondReel==0){
            
        e.target.classList.add("disable")
        }
    }}else{
        if(SecondReel==0){
        
            e.target.classList.add("disable")
            }
    }

   
    })
});
}