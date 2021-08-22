export const HandleCookiePopUp=()=>{
    let PlusSigns=document.querySelectorAll(".cookie-prefernece ul li .head .icon-wrapper")

PlusSigns.forEach(EachSIgn=>{
    EachSIgn.addEventListener("click",(e)=>{
        let ElementHead=e.target.parentNode.parentNode;

        let BodyElement=e.target.parentNode.parentNode.nextElementSibling;
        BodyElement.classList.toggle("active")
        ElementHead.classList.toggle("active")
    })
})
}