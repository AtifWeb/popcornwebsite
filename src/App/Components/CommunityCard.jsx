import React from 'react'
import nature_3126513_1920 from '../../Assets/img/nature-3126513_1920.jpg'
import '../../Assets/styles/css/CommunityCards.css'
function Card({img,title,subtitle,desc,meternow,totalgo}) {
    return (
        <div className="Card community-card">
            <img src={nature_3126513_1920} alt="" />
         <p>Being able to lend, then get repaid, and lend over and over again gives great satisfaction. My funds have been lent 12 times over.</p>

         <h4 >Heather McLaughlin</h4>
         <p>Atif Asim</p>
        </div>
    )
}

export default Card
