
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import LoanVideo from '../../Assets/video/1405 2404.mp4'
import Card from '../Components/Card'
import CommunityCard from '../Components/CommunityCard'
import nature_3126513_1920 from '../../Assets/img/nature-3126513_1920.jpg'
import IndexCard from '../Components/IndexCard'
import '../../Assets/styles/css/index.css'
import student from '../../Assets/img/student.jpg'
import { HandleSliderMovement } from '../../Assets/js/HandleSliderMovement'
import logo from '../../Assets/img/logo.svg'
import kid from '../../Assets/img/kid.jpg'
import { HandleCookiePopUp } from '../../Assets/js/handleCookiePopUp'
function Index() {
    useEffect(()=>{
        HandleCookiePopUp()

        HandleSliderMovement()


        let AcceptCookieButton=document.querySelector(".accept-cookie");
        let SettingsCookieButton=document.querySelector(".setting-cookie");
        let CloseCookie=document.querySelector(".close-icon");
        let CloseCookiePopUpIcon=document.querySelector(".close-icon-cookie");
        let AllowButton=document.querySelector(".presentation-area button");

        AcceptCookieButton.addEventListener("click",()=>{
            document.querySelector(".cookie-banner").style.display="none"
        })
        SettingsCookieButton.addEventListener("click",()=>{
            document.querySelector(".cookies-pop-up").style.display="flex"
        })
        CloseCookie.addEventListener("click",()=>{
            document.querySelector(".cookie-banner").style.display="none"
        })
        CloseCookiePopUpIcon.addEventListener("click",()=>{
            document.querySelector(".cookies-pop-up").style.display="none"
        })
        AllowButton.addEventListener("click",(e)=>{
            let PrefrenceArea=e.target.parentNode.nextElementSibling;


            PrefrenceArea.querySelectorAll("ul li input").forEach(element => {
                element.checked=true
                
            });
        })
    })
    return (
        <div className="MainPage">
            <div className="cookie-banner">
               <div className="content">
               <p>By Clicking "Accept All Cookies". you agree to the storing of cookies on your device to enhance site navigation, analyse site usage, and assist in our marketing effort.</p>
                <div className="buttons-cookies">
                    <button className="accept-cookie">Accept All Cookies</button>
                    <button className="setting-cookie">Cookies Settings</button>
                </div>
               </div>
               <span className="close-icon">
               <i class="fas fa-times"></i>
               </span>
            </div>

            <div className="cookies-pop-up">
                <div className="content">
                <div className="top-area">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="close-icon-cookie">
                    <i class="fas fa-times"></i>
                    </div>
                    </div>
                    <div className="body-content">
                        
                    <div className="presentation-area">
                        <h3>Cookie Settings</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid dolores ducimus, eligendi optio, obcaecati nulla blanditiis voluptate reprehenderit id veritatis ex tempora iusto, accusamus ut! Animi accusamus architecto odio consequatur eveniet, quam, sint temporibus, inventore est quis cupiditate vel minus quae eius repudiandae soluta. At debitis sed ullam quos dolore.</p>
                        <button>Allow All</button>
                    </div>
                    <div className="cookie-prefernece">
                    <h3>Cookie Prefernece</h3>
                    <ul>
                        <li>
                         <div className="head">
                         <div className="presentation">
                            <div className="icon-wrapper">
                            <span className="horizontal"></span>
                                <span className="vertical"></span>
                            </div>
                                <p>Strictly necessory Cookies</p>
                            </div>
                            <p className="active-cookie">Always Active</p>
                         </div>
                         <div className="body">
                             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto blanditiis amet explicabo tenetur, natus consequatur repellendus maxime deleniti ex laboriosam.</p>
                         </div>
                        </li>
                        <li>
                          <div className="head">
                          <div className="presentation">
                            <div className="icon-wrapper">
                                <span className="horizontal"></span>
                                <span className="vertical"></span>
                            </div>
                                <p>Functional Cookies</p>
                            </div>

                            <input type="checkbox" name="Functional" id="Functional" style={{display:"none"}} />
                            <label className="checkbox-wrapper" htmlFor="Functional">
                                <span className="ball"></span>
                            </label>
                          </div>
                          <div className="body">
                             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto blanditiis amet explicabo tenetur, natus consequatur repellendus maxime deleniti ex laboriosam.</p>
                         </div>
                        </li>
                        <li>
                          <div className="head">
                          <div className="presentation">
                            <div className="icon-wrapper">
                            <span className="horizontal"></span>
                                <span className="vertical"></span>
                            </div>
                                <p>Performance Cookies</p>
                            </div>
                            <input type="checkbox" name="Performance" id="Performance" style={{display:"none"}} />
                            <label className="checkbox-wrapper" htmlFor="Performance">
                                <span className="ball"></span>
                            </label>
                          </div>
                          <div className="body">
                             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto blanditiis amet explicabo tenetur, natus consequatur repellendus maxime deleniti ex laboriosam.</p>
                         </div>
                        </li>
                        <li>
                         <div className="head">
                         <div className="presentation">
                            <div className="icon-wrapper">
                            <span className="horizontal"></span>
                                <span className="vertical"></span>
                            </div>
                                <p>Trageting Cookies</p>
                            </div>
                            <input type="checkbox" name="Trageting" id="Trageting" style={{display:"none"}} />
                            <label className="checkbox-wrapper" htmlFor="Trageting">
                                <span className="ball"></span>
                            </label>
                         </div>
                         <div className="body">
                             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto blanditiis amet explicabo tenetur, natus consequatur repellendus maxime deleniti ex laboriosam.</p>
                         </div>
                        </li>
                    </ul>

                
                    </div>
                    </div>

                    <div className="confirm-choice">
                        <button>
                            Confirm my Choices
                        </button>
                        </div>
                
     
                </div>
                           </div>

            
            
            {/* Video Section */}
            <div className="video-section" >
                <video src={LoanVideo} autoPlay muted controls style={{width:"100%"}}></video>
                <div className="presentation">
                    <h1  style={StyleSheet.Mainheading}>Connecting people<span style={StyleSheet.Span}>with purpose</span></h1>
                    <Link class="first-section-button">Find an opportunity</Link>
                </div>
            </div>

            
            {/* Support Case */}

            <div className="support-case-section">
                <h1 style={{textAlign:"center",color:"#4D4D4D"}}>Support Causes you care about</h1>
                <div className="top-navigation-area">
                    <div className="icon-wrapper disable left">
                    <i class="fas fa-chevron-left"></i>
                    </div>
                    <div className="reel-wrapper">
                        <div className="reel first-reel"style={StyleSheet.reel}>
                            <h3 style={StyleSheet.reelH3}className="active" >Women</h3>
                            <h3 style={StyleSheet.reelH3} >Covid 19</h3>
                            <h3 style={StyleSheet.reelH3}>Shelter</h3>
                            <h3 style={StyleSheet.reelH3}>Kiva U.S</h3>
                            <h3 style={StyleSheet.reelH3}>Refugees</h3>
                            <h3 style={StyleSheet.reelH3}>Refugees</h3>
                            <h3 style={StyleSheet.reelH3}>Agriculture</h3>
                            <h3 style={StyleSheet.reelH3}>Education</h3>
                            <h3 style={StyleSheet.reelH3}>Technology</h3>
                            <h3 style={StyleSheet.reelH3}>Health</h3>
                            
                        </div>
                    </div>

                    <div className="icon-wrapper right">
                    <i class="fas fa-chevron-right"></i>
                    </div>

                </div>

                <div className="request-navigation-area" style={{width:"85%",margin:"2rem auto"}}>
                <div className="icon-wrapper disable left">
                    <i class="fas fa-chevron-left"></i>
                    </div>
            
                <div className="reel-wrapper" style={{}}>
                    <div className="reel second-reel" style={StyleSheet.requestNavigationAreaReel}>
                      <div className="cards-wrap">
                      <IndexCard img={nature_3126513_1920}  title="Miguel Antonio" subtitle="only 47 minutes left" desc="A loan of $525 helps to improve his tomato greenhouse and acquire an irrigation machine." meternow="20" totalgo="120" />
                        <IndexCard img={nature_3126513_1920}  title="Miguel Antonio" subtitle="only 47 minutes left" desc="A loan of $525 helps to improve his tomato greenhouse and acquire an irrigation machine." meternow="20" totalgo="120" />
                        <IndexCard img={nature_3126513_1920}  title="Miguel Antonio" subtitle="only 47 minutes left" desc="A loan of $525 helps to improve his tomato greenhouse and acquire an irrigation machine." meternow="20" totalgo="120" />
                      </div>
                       
                      <div className="cards-wrap">
                      <IndexCard img={nature_3126513_1920}  title="Miguel Antonio" subtitle="only 47 minutes left" desc="A loan of $525 helps to improve his tomato greenhouse and acquire an irrigation machine." meternow="20" totalgo="120" />
                        <IndexCard img={nature_3126513_1920}  title="Miguel Antonio" subtitle="only 47 minutes left" desc="A loan of $525 helps to improve his tomato greenhouse and acquire an irrigation machine." meternow="20" totalgo="120" />
                        <IndexCard img={nature_3126513_1920}  title="Miguel Antonio" subtitle="only 47 minutes left" desc="A loan of $525 helps to improve his tomato greenhouse and acquire an irrigation machine." meternow="20" totalgo="120" />
                      </div>

                      <div className="cards-wrap">
                      <IndexCard img={nature_3126513_1920}  title="Miguel Antonio" subtitle="only 47 minutes left" desc="A loan of $525 helps to improve his tomato greenhouse and acquire an irrigation machine." meternow="20" totalgo="120" />
                        <IndexCard img={nature_3126513_1920}  title="Miguel Antonio" subtitle="only 47 minutes left" desc="A loan of $525 helps to improve his tomato greenhouse and acquire an irrigation machine." meternow="20" totalgo="120" />
                       <div className="card-wrapper link-box" style={{padding:"3rem 1.5rem"}}>
                           <Link style={{   boxShadow:"0 0.65rem 0.875rem 0.4375rem rgb(153 153 153 / 10%)",borderRadius:"10px"}}>
                           View all loans to women
                           </Link>
                       </div>
                      </div>

                       

                    </div>

                </div>
                <div className="icon-wrapper right">
                    <i class="fas fa-chevron-right"></i>
                    </div>
                </div>
            </div>


            {/* how it works */}

            <div className="how-it-works-section">
                <h1>How it works</h1>
                <p>By lending as little as $25 on Kiva, you can support the causes you<br/>care about and make a real personal impact.</p>

                <div className="steps-area">
                    <div className="step">
                    <i class="far fa-user-circle"></i>

                        <div className="presentation">
                            <h3>Make an Account</h3>
                            <p>
                            Browse by category and find an entrepreneur to support.
                            </p>
                        </div>
                    </div>
                    <div className="step">
                    <i class="far fa-surprise"></i>

                        <div className="presentation">
                            <h3>Find an Opportunity</h3>
                            <p>Help fund a loan with
as little as $25.</p>
                        </div>
                    </div>
                    <div className="step">
                    <i class="fas fa-dollar-sign"></i>

                        <div className="presentation">
                            <h3>Register your interest</h3>
                            <p>Kiva borrowers have a 96% repayment rate historically.</p>
                        </div>
                    </div>
                    <div className="step">
                    <i class="fas fa-hands-helping"></i>

                        <div className="presentation">
                            <h3>Volunteer</h3>
                            <p>Relend your money or withdraw your funds.</p>
                        </div>
                    </div>
                </div>
            </div>



            {/* Community Area */}

            <div className="community-section" style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
            <h1 style={{textAlign:"center",color:"#4D4D4D"}} className="landing-heading">What our landing community thinks</h1>
            <div className="community-cards-wrapper">
                <CommunityCard />
                <CommunityCard />
            </div>

            <h1 style={{marginTop:"30px",fontWeight:400}} className="make-loan-heading">Make a load today !</h1>
            <Link  style={{...StyleSheet.button,marginTop:20}}>Find an opportunity</Link>
            </div>


            {/* volenteer area */}
            <div className="volenteer-area">
                <h1>VolunteerMatch<br/>
recruiting solutions for nonprofits</h1>
<p>Get connected to qualified volunteers when and where you need them.</p>
<p>With more volunteers and more volunteer
opportunities than any other service,
VolunteerMatch is how good people and
good causes get connected.</p>

        <Link  style={{...StyleSheet.button,marginTop:60}}>Get Started</Link>

        <img src={kid} alt="" />
            </div>


        {/* image area */}

        <div className="image-wrapper" style={{margin:"4rem auto"}}>
            <img src={student} alt="" style={{width:"100%"}} />
        </div>


        </div>
    )
}
const StyleSheet={
    button:{
        display:"inline-block",
        padding:"1rem 2rem",
        background:"#EA6C39",
        color:"#fff",
        marginTop:"2rem",
        borderRadius:"5px"
    },
    Mainheading:{
        color:"#474747",
        fontSize:'3.2rem'
    },
    Span:{
        display:"block",
        color:"#EA6C39"
    },
    reelH3:{
        width:"20%",
        minWidth:"20%",
        fontWeight:"500",
        textAlign:"center",
        padding:".5rem 0rem",
        color:"#4D4D4D",
    },
    activeh3:{
        color:"#67A862",
        textDecoration:"underline",
        textDecorationColor:"#67A862"
        
    }
}
export default Index
