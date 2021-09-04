export const  EmailValidation=(event, selector, EffectSelector)=> {
    let email = /^([a-zA-Z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
    let Field = document.querySelector(selector);
    let EffectField = document.querySelector(EffectSelector);
    // validate(Field, email, EffectField);
  }
  


 
    let email=""
    let password=""
    

    export const HandleEmailValidation=e=>{

      let HelperElement=e.target.parentNode.parentNode.nextElementSibling
      email=e.target.value
      
          HelperElement.textContent=""
      
      HandleValidation()
  }

    export const HandlePasswordValidation=e=>{
      
      let HelperElement=e.target.parentNode.parentNode.nextElementSibling
      password=e.target.value
    
          HelperElement.textContent=""
    

      HandleValidation()

  }


    const  HandleValidation=()=>{

      
      let Email = /^([a-zA-Z\d\.-]+)@([a-z\d-]+)\.([a-z]{1,8})(\.[a-z]{1,8})?(\.[a-z]{1,8})?$/;
      
      
      let Button=document.querySelector(".button-wrapper button");

      
    
      if (Email.test(email)&&password!="") {
          
         Button.classList.remove("disable")


      }else{
        Button.classList.add("disable")
      }

       
    }



  