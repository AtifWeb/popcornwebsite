import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import logo from '../../Assets/img/logo.svg'
import '../../Assets/styles/css/Signin.css'
import {countries,months} from '../../Assets/js/Utils'
import { HandleEmailValidation ,HandlePasswordValidation,HandleTextValidation,HandleConfirmPasswordValidation,HandleSecondStepText,HandleSecondStepOnBlur} from '../../Assets/js/ValidationSignUp';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import '../../Assets/styles/css/Signup.css'

import { makeStyles } from '@material-ui/core/styles';
import { InputLabel } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

function Signup() {
    const classes=useStyles()
    const [FirstName,setFirstName]=useState()
    const [LastName,setLastName]=useState()
  
useEffect(()=>{

    console.log(document.querySelector(".typing-start-result .row"))



    document.querySelector("#fname").addEventListener("change",(e)=>{
        setFirstName(e.target.value)
    })
    document.querySelector("#lname").addEventListener("change",(e)=>{
        setLastName(e.target.value)
    })
    document.querySelector(".typing-start-result .row").addEventListener("click",(e)=>{
        
        let location=e.target.querySelector("small");
        let Address1=document.querySelector("#address1");
        document.querySelector(".address-wrapper").style.display="none"
        document.querySelector(".result-wrapper").style.display="none"
        document.querySelector(".expand-address").classList.add("active")
        Address1.value=location.textContent
        
    })


},[])
    const HandleNext=e=>{
        e.preventDefault()
        document.querySelector(".input-collection").style.display="none"
        document.querySelector(".step-2").style.display="block"
        document.querySelector(".create-account-message").style.display="none"
        document.querySelector(".welcom-message").style.display="block"
    }
    const ShowPasswords=e=>{
        let PasswordsElements=document.querySelectorAll(".password");

        let type=""
        PasswordsElements.forEach(EachElement=>{
            let Input=EachElement.querySelector("input")
            type=Input.getAttribute("type")=="text"?"password":"text";
            Input.setAttribute("type",type)
        })
    }
    const RemoveMessages=e=>{
        let BorderElement=e.target.nextElementSibling;
        let Label=e.target.parentNode.previousElementSibling;
        let HelperElement=""
        if(e.target.id=='password'){
            HelperElement=e.target.parentNode.parentNode.nextElementSibling.nextElementSibling
            e.target.parentNode.parentNode.nextElementSibling.style.display="block"
        }else{
            HelperElement=e.target.parentNode.parentNode.nextElementSibling
        }
        
        let NotCorrect=document.querySelector(".not-correct");


        BorderElement.style.border="1px solid rgba(0, 0, 0, 0.23)"
        Label.style.color="rgba(0, 0, 0, 0.23)"
        HelperElement.textContent=""
        NotCorrect.style.display="none"

    }

    const HandleSelectOnFocus=e=>{
        let Label=e.target.parentNode.previousElementSibling;
        
        Label.setAttribute("id","active")
        console.log(Label)
    }
    const HandleSelectOnBlur=e=>{
        
        // let Label=e.target.parentNode.previousElementSibling;
        // if(e.target.value!=""){
        //     Label.classList.remove("active")
        // }
    }
    const CheckIsValid=e=>{
        let BorderElement=e.target.nextElementSibling;
        let Label=e.target.parentNode.previousElementSibling;
        let ParentElement=e.target.parentNode.parentNode;
        let email = /^([a-zA-Z\d\.-]+)@([a-z\d-]+)\.([a-z]{1,8})(\.[a-z]{1,8})?(\.[a-z]{1,8})?$/;
        let password = /^[\d\w\$#@&%!^*-]{8,26}$/i;
        let HelperElement=""
        if(e.target.id=='password'){
            HelperElement=e.target.parentNode.parentNode.nextElementSibling.nextElementSibling

            
        }else{
            HelperElement=e.target.parentNode.parentNode.nextElementSibling
        }

    
        
        
        if (e.target.value==""){
            BorderElement.style.border="1px solid red"
            Label.style.color="red"
           
            if(HelperElement.classList[1]=="email-helper"){
                HelperElement.textContent="Please enter the email"
            }else{
                HelperElement.textContent="Please enter the password"
                if(e.target.id=="password"){
                    e.target.parentNode.parentNode.nextElementSibling.style.display="none"
                }
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
        
     else if(e.target.value=="") {
        let ElementId=e.target.id    
        BorderElement.style.border="1px solid red"
        Label.style.color="red"
        if(ElementId=="fname"){
            HelperElement.textContent="Invalid First name";
        }else if (ElementId=="lname"){
            HelperElement.textContent="Invalid Last name";
        }else if (ElementId=="Password"){
            
            HelperElement.textContent="Invalid Password";
        }else if (ElementId=="ConfirmPassword"){
            HelperElement.textContent="Invalid Confirm Password";
        }
        
        
     }
      




    }

   
    return (
        <div className="SignIn SignUp">
            <div className="sign-in-header">
                <img src={logo} alt="" />
            </div>
            <div className="body-area">
                <form action="">
                    <p className="create-account-message" >Create a new account below <br/>
or <Link>sign in</Link></p>
<p className="welcom-message" style={{display:'none'}}>{FirstName} {LastName} welcome to Cyber Volunteers</p>
<p className="helper">Create a new Cyber Volunteers account.</p>



<div className="input-collection">
<TextField
onBlur={CheckIsValid}
onFocus={RemoveMessages}

onChange={HandleTextValidation}
id="fname" label="First name" variant="outlined" style={{width:"100%"}}/>
<span className="helping-text text-helper" style={{marginBottom:"10px",display:"inline-block",marginTop:7,fontSize:13,paddingLeft:12,color:"#F65B4E"}}></span>

<TextField
onBlur={CheckIsValid}
onFocus={RemoveMessages}

onChange={HandleTextValidation}
id="lname" label="Last name" variant="outlined" style={{width:"100%"}}/>
<span className="helping-text text-helper" style={{marginBottom:"10px",display:"inline-block",marginTop:7,fontSize:13,paddingLeft:12,color:"#F65B4E"}}></span>

<TextField
onBlur={CheckIsValid}
onFocus={RemoveMessages}

onChange={HandleEmailValidation}
id="email" label="Email" variant="outlined" style={{width:"100%"}}/>
<span className="helping-text email-helper" style={{marginBottom:"10px",display:"inline-block",marginTop:7,fontSize:13,paddingLeft:12,color:"#F65B4E"}}></span>

    

    
    <TextField  onBlur={CheckIsValid} className="password" onChange={HandlePasswordValidation} id="password" label="Password" variant="outlined" style={{width:"100%"}} type="password" onFocus={RemoveMessages}/>

    <div className="password-ui-strong" style={{marginTop:10}}>
    <div className="bars" style={{marginBottom:5}}>
        <span className="bar" id="bar-1"></span>
        <span className="bar" id="bar-2"></span>
        <span className="bar" id="bar-3"></span>
        <span className="bar" id="bar-4"></span>
    </div>
    <p style={{fontSize:12,marginTop:10}}>Password Strength: Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem 
ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
</div>
    


<span className="helping-text password-helper" style={{marginBottom:"10px",display:"inline-block",marginTop:7,fontSize:13,paddingLeft:12,color:"#F65B4E"}} ></span>







<TextField  onBlur={CheckIsValid}  className="password"  onChange={HandleConfirmPasswordValidation} id="ConfirmPassword" label="Confirm Password" variant="outlined" style={{width:"100%"}} type="password" onFocus={RemoveMessages}/>

<span className="helping-text password-helper" style={{marginBottom:"10px",display:"inline-block",marginTop:7,fontSize:13,paddingLeft:12,color:"#F65B4E"}} ></span>



<span className="helping-text not-correct" style={{marginBottom:"10px",display:"none",marginTop:7,fontSize:13,paddingLeft:0,color:"#F65B4E"}} >Email or password is not recognised</span>


<div className="checkbox-wrapper" style={{marginBottom:20}}>
    <input type="checkbox" name="" id="show-password-checkbox" style={{display:"none"}} />
    <label htmlFor="show-password-checkbox" className="custom-checkbox custom-checkbox-box" onClick={ShowPasswords}>
    <i class="fas fa-check"></i>
    </label>
    <label htmlFor="show-password-checkbox" className="custom-checkbox-line"onClick={ShowPasswords}>
            Show password
    </label>
</div>  

<div className="button-wrapper">
    <Link style={{color:"#F85220"}}>Sign in instead</Link>
<Button variant="contained" color="primary" style={{width:"100%"}} className="disable"  onClick={HandleNext}> 
  Next
</Button>
</div>

</div>




<div className="step-2">
<div style={{position:"relative"}} className="address-wrapper">
<TextField   className="address" id="address" onFocus={e=>{
        e.target.nextElementSibling.style.borderBottomLeftRadius=0
        e.target.nextElementSibling.style.borderBottomRightRadius=0
    document.querySelector(".result-wrapper").style.display="block"
    }} onBlur={HandleSecondStepOnBlur} onChange={HandleSecondStepText} label="Enter you street address" variant="outlined" style={{width:"100%",marginTop:20}} type="text"/>
    <small style={{    fontSize: "12px",
    color:" rgb(127, 122, 123)",position:"absolute",width:"100%",left:"0%",bottom:"-18px"}}>Cyber Volunteers is only available in the UK</small>

    </div>

<div className="result-wrapper" style={{position:"relative",zIndex:2222,backgroundColor:"#fff"}}>
    <p>e.g. “SW12 7EU” or “64 London Road”</p>
    <div className="typing-start-result" style={{display:"none"}}>
       <div className="row">
       <h5>Atif Asim</h5>
        <small>Pakistan</small>
       </div>

       <Link to="#" onClick={e=>{
           e.preventDefault();
                
           document.querySelector(".address-wrapper").style.display="none"
           document.querySelector(".result-wrapper").style.display="none"
           document.querySelector(".expand-address").classList.add("active")


           
       }} style={{display:"block",color:"#F85220",fontSize:"15px",textAlign:"center",borderTop:'1px solid #ddd',padding:"10px 0px"}}>Enter address manually</Link>
    </div>
</div>


<div className="expand-address" style={{marginTop:20}}>
<TextField   className="address" id="address1" onChange={HandleSecondStepText}  label="Address Line 1" variant="outlined" style={{width:"100%"}} type="text"/>
<TextField   className="address" id="address2"onChange={HandleSecondStepText}   label="Address Line 2" variant="outlined" style={{width:"100%"}} type="text"/>
<TextField   className="address" id="postcode" onChange={HandleSecondStepText}  label="Postcode" variant="outlined" style={{width:"100%"}} type="text"/>
<TextField   className="address" id="town"  onChange={HandleSecondStepText}  label="Town/City" variant="outlined" style={{width:"100%"}} type="text"/>
</div>
<div className="country-select select-box" style={{marginTop:20}}>
<FormControl className={classes.formControl}>
<InputLabel htmlFor="age-native-simple">Country/Region</InputLabel>
        <Select
          native
          onChange={HandleSecondStepText} 
          id="country-select"
          onBlur={HandleSelectOnBlur}
          onFocus={HandleSelectOnFocus}
        >
          {countries.map(Eachcountry=>(
                <option value={Eachcountry.code}>{Eachcountry.name}</option>
            ))}

        </Select>
      </FormControl>
</div>

<div className="grid-col-3">
<div className="day-wrapper" style={{marginTop:16}}>
<TextField   className="Day" onChange={HandleSecondStepText}  id="Day" label="Day" variant="outlined" style={{width:"100%"}} type="text"/>
<small style={{fontSize:12,color:"#7F7A7B"}}>Your birthday</small>
</div>
<div className="Month-select select-box">
<FormControl className={classes.formControl}>
<InputLabel htmlFor="age-native-simple">Month</InputLabel>
        <Select
          native
          onChange={HandleSecondStepText} 
          id="month-select"
        >
            {months.map(EachMonth=>(
                <option value={EachMonth}>{EachMonth}</option>
            ))}
          
          
        </Select>
      </FormControl>
      </div>
      <TextField  onChange={HandleSecondStepText}   className="address" id="year" label="Year" variant="outlined" style={{width:"100%",marginTop:16}} type="text"/>

</div>

<div className="checkbox-wrapper" style={{marginBottom:20,marginTop:16}}>
    <input type="checkbox" name="" onChange={HandleSecondStepText}  id="AggrementCheckbox" style={{display:"none"}} />
   <label>

   <label htmlFor="AggrementCheckbox" className="custom-checkbox custom-checkbox-box" onClick={ShowPasswords} style={{minWidth:20}}>
    <i class="fas fa-check"></i>
    </label>
    <label htmlFor="AggrementCheckbox" className="custom-checkbox-line"onClick={ShowPasswords} style={{fontSize:13,color:"rgb(116, 112, 113)",fontWeight:600}}>
            By creating an account you agree that you've read and agree with the terms of service and privacy policy
    </label>
   </label>
</div>  



<input type="submit" value="" id="create-accout" style={{display:"none"}}/>
<label htmlFor="create-accout" class="create-account-label disable"style={{cursor:"pointer",width:"100%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"14px",height:45}}>
    CREATE ACCOUNT
</label>

</div>
                </form>


            </div>
         
            <p style={{textAlign:'center',color:"#949494",marginBottom:20}}>© 2021 Cyber Volenteers. All rights reserved.</p>
            
        </div>
    )
}

export default Signup
