import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import logo from '../../Assets/img/logo.svg'
import '../../Assets/styles/css/Signin.css'
import CheckIcon from '@material-ui/icons/Check';
import { HandleEmailValidation ,HandlePasswordValidation} from '../../Assets/js/Validations';
function SignIn() {
    const [Email,setEmail]=useState("")
    const [Password,setPassword]=useState("")
  
useEffect(()=>{




    let EyeButton=document.querySelector(".eye-wrap")
    let InputTypeText=document.querySelector(".eye-wrap + .MuiFormControl-root");
    let Focus=false
    EyeButton.addEventListener("mouseenter",(e)=>{
        e.target.firstElementChild.style.color="rgb(46, 46, 46)"
    })
    EyeButton.addEventListener("mouseleave",(e)=>{
        e.target.firstElementChild.style.color="rgba(0, 0, 0, 0.23)"
    })

    InputTypeText.addEventListener("mouseenter",()=>{
        EyeButton.querySelector("i").style.color="rgb(46, 46, 46)"
    })
    InputTypeText.addEventListener("mouseleave",()=>{
        if(Focus==false){
            EyeButton.querySelector("i").style.color="rgba(0, 0, 0, 0.23)"
        }
        
    })

    InputTypeText.querySelector("input").addEventListener("focus",()=>{
        Focus=true
        EyeButton.querySelector("i").style.color="rgb(46, 46, 46)"
    })
    InputTypeText.querySelector("input").addEventListener("blur",()=>{
        Focus=false
        EyeButton.querySelector("i").style.color="rgba(0, 0, 0, 0.23)"
    })


    EyeButton.addEventListener("click",(e)=>{
        let inputElement=e.target.nextElementSibling.querySelector("input");
        let Type=inputElement.getAttribute("type")=="password"?"text":"password";
        if(Type=="text"){

        }else{

        }
     
        Type=="text"?   e.target.children[0].setAttribute("class","fas fa-eye-slash"):       e.target.children[0].setAttribute("class","fas fa-eye");
 
        inputElement.setAttribute("type",Type)



        

        
    })
},[])
    const HandleSubmit=e=>{
        e.preventDefault()
        const NotCorrectHelper=document.querySelector(".not-correct");

        

        // hard auth
        if(Password!='reactjs123'||Email!="mytechlife96@gmail.com"){
            NotCorrectHelper.style.display="inline-block"
            document.querySelectorAll(".MuiOutlinedInput-notchedOutline").forEach(Each=>{
                Each.style.border="1px solid red"
            })
            document.querySelectorAll(".MuiInputLabel-root").forEach(Each=>{
                Each.style.color="red"
            })

        }else{
            NotCorrectHelper.style.display="none"
        }
    }
    const RemoveMessages=e=>{
        let BorderElement=e.target.nextElementSibling;
        let Label=e.target.parentNode.previousElementSibling;
        let HelperElement=e.target.parentNode.parentNode.nextElementSibling
        let NotCorrect=document.querySelector(".not-correct");

        BorderElement.style.border="1px solid rgba(0, 0, 0, 0.23)"
        Label.style.color="rgba(0, 0, 0, 0.23)"
        HelperElement.textContent=""
        NotCorrect.style.display="none"

    }
    const CheckIsValid=e=>{
        let BorderElement=e.target.nextElementSibling;
        let Label=e.target.parentNode.previousElementSibling;
        let ParentElement=e.target.parentNode.parentNode;
        let email = /^([a-zA-Z\d\.-]+)@([a-z\d-]+)\.([a-z]{1,8})(\.[a-z]{1,8})?(\.[a-z]{1,8})?$/;
        let password = /^[\d\w\$#@&%!^*-]{8,26}$/i;
        
        let HelperElement=e.target.parentNode.parentNode.nextElementSibling
        
        
        if (e.target.value==""){
            BorderElement.style.border="1px solid red"
            Label.style.color="red"
            if(HelperElement.classList[1]=="email-helper"){
                HelperElement.textContent="Please enter the email"
            }else{
                HelperElement.textContent="Please enter the password"
            }
            
        }else{
            Label.style.color="#000"
            BorderElement.style.border="1px solid #000"
            HelperElement.textContent=""
            
        }


     if(e.target.id=="email"){
        if(!email.test(e.target.value)){
            BorderElement.style.border="1px solid red"
            Label.style.color="red"
            HelperElement.textContent="Invalid Email"
        }
        }
        
     else{
        if(password==""){
            BorderElement.style.border="1px solid red"
            Label.style.color="red"

        HelperElement.textContent="Invalid Password";
        }
     }
      




    }

   
    return (
        <div className="SignIn">
            <div className="sign-in-header">
                <img src={logo} alt="" />
            </div>
            <div className="body-area">
                <form action="">
                    <p>Sign in below <br/>
or <Link>create a new Cyber Volenteers</Link></p>
<p className="helper">Sign in to continue to your Cyber Volunteers account.</p>


<div className="input-collection">
<TextField
onBlur={CheckIsValid}
onFocus={RemoveMessages}

onChange={HandleEmailValidation}
id="email" label="Email" variant="outlined" style={{width:"100%"}}/>
<span className="helping-text email-helper" style={{marginBottom:"20px",display:"inline-block",marginTop:7,fontSize:13,paddingLeft:12,color:"#F65B4E"}}></span>
<div className="text-field">
    
    <div className="eye-wrap">
    <i class="fas fa-eye"></i>
    </div>
    
    <TextField  onBlur={CheckIsValid} onChange={HandlePasswordValidation} id="password" label="Password" variant="outlined" style={{width:"100%"}} type="password" onFocus={RemoveMessages}/>

<span className="helping-text password-helper" style={{marginBottom:"20px",display:"inline-block",marginTop:7,fontSize:13,paddingLeft:12,color:"#F65B4E"}} ></span>

<span className="helping-text not-correct" style={{marginBottom:"20px",display:"none",marginTop:7,fontSize:13,paddingLeft:0,color:"#F65B4E"}} >Email or password is not recognised</span>
</div>
<div className="button-wrapper">
    <Link>Forgotten Password</Link>
<Button variant="contained" color="primary" style={{width:"100%"}} className="disable"  onClick={HandleSubmit}> 
  SIGN IN
</Button>
</div>

</div>

<div className="remeber-me-container">
    <div className="remember-me-wrapper">
        <input type="checkbox" name="" id="remember-me" />
        <div className="custom-checkbox-container">
    
<label htmlFor="remember-me">
Remember me  

</label>
        </div>
    </div>
    <div className="question-mark-area">
    <svg data-v-3dd4fca4="" width="16" height="16" id="help-icon-remember-me" viewBox="0 0 28 28" version="1.1" xmlns="http://www.w3.org/2000/svg" class="help-icon" tabindex="0" aria-expanded="false"><path data-v-3dd4fca4="" stroke-width="1" fill-rule="evenodd" fill="#D8D8D8" d="M14,0 C6.2685,0 0,6.2685 0,14 C0,21.7315 6.2685,28 14,28
		C21.7315,28 28,21.7315 28,14 C28,6.2685 21.7315,0 14,0 Z M15.752,16.688 L15.752,16.04 C15.752,14.816
		17.264,14.216 18.392,13.088 C19.136,12.344 19.76,11.408 19.76,9.944 C19.76,7.52 17.96,5 14.096,5
		C10.376,5 8.528,7.352 8,10.352 L11.456,10.928 C11.624,9.392 12.368,7.76 14.096,7.76 C15.392,7.76
		16.208,8.696 16.208,9.824 C16.208,11 15.368,11.6 14.672,12.104 C13.472,12.968 12.248,14.12 12.248,15.872
		L12.248,16.688 L15.752,16.688 Z M11.984,21.312 C11.984,22.464 12.824,23.376 14.048,23.376 C15.272,23.376
		16.112,22.464 16.112,21.312 C16.112,20.088 15.272,19.272 14.048,19.272 C12.824,19.272 11.984,20.088
		11.984,21.312 L11.984,21.312 Z"></path></svg>
        <div className="question-mark-answer">
            <p>
            Staying signed in enables personalized browsing and seamless lending. You may be asked again for your password to view account information or make withdrawals, but uncheck this option if you’re using a public device. 
            </p>
            <div className="arrow"></div>
        </div>
    </div>
</div>
                </form>


            </div>
         
            <p style={{textAlign:'center',color:"#949494",marginBottom:20}}>© 2021 Cyber Volenteers. All rights reserved.</p>
            
        </div>
    )
}

export default SignIn
