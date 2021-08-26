
export const HandleSliderMovement=()=>{



let setMobileView=false
    let FirstReel=0
    let SecondReel=0

    let ArrowsLeft=document.querySelectorAll(".icon-wrapper.left")
    let ArrowsRight=document.querySelectorAll(".icon-wrapper.right")

    window.addEventListener("load",e=>{
        if(window.innerWidth<850){
            setMobileView=true
        }
    })

    window.addEventListener("resize",e=>{
        
        if(window.innerWidth<850){
            document.querySelector(".first-reel").style.transform="translateX(0)"
            document.querySelector(".top-navigation-area .left").classList.add("disable")
            document.querySelector(".top-navigation-area .right").classList.remove("disable")
            FirstReel=0
            setMobileView=true
        }else{
        
            setMobileView=false
        }

        if(window.innerWidth>1200){
            // window.alert("")
            document.querySelector(".second-reel").style.transform="translateX(0)"
        }
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
    if(FirstReel>-1350){
        if(Reel.classList.contains("first-reel")){
            e.target.parentNode.firstElementChild.classList.remove("disable")
            FirstReel=FirstReel-150     
            Reel.style.transform=`translateX(${FirstReel}px)`
        }
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

    if(setMobileView==false){
       if(Reel.classList.contains("first-reel")){
       if(FirstReel<0){
        e.target.classList.add("disable")
       }


    }
}else{
    if(Reel.classList.contains("first-reel")){
      
        if(FirstReel<-1349){
            
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
    }

    if(Reel.classList.contains("second-reel")){
        if(SecondReel==0){
        e.target.classList.add("disable")
        }
    }

   
    })
});
}