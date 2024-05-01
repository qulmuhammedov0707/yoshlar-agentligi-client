import React from "react";

import styles from './style.module.css'
import bizhaqimizda from './images/bizhaqimizda.png'
import image from './images/image.png'
import image1 from './images/image1.png'
import { Link } from "react-router-dom";



function AgentlikTuzilmasiPage(){
   return(
      <>
         
         <div className="container">
      <div className="bizhaqimizda">
                <img src={bizhaqimizda}alt="" /><hr className="bizhaqimizda_hr"style={{marginBottom:"100px" , width:"1000px",marginLeft:"280px",marginTop:"-25px"}} />
                <div className={styles.links}>
         <p className={styles.links__p}><Link to={'/'} className={styles.links__link}> Asosiy </Link> {`>`} Agentlikning tuzilmasi</p>
      </div>
      <div className={styles.buttons}>
         <Link to={'/biz-haqimizda'}><button className={styles.buttons__button}>Agentlik haqida</button></Link>
         <Link to={'/maqsad-va-vazifalar'}><button className={styles.buttons__button}>Maqsad va vazifalar</button></Link>
         <Link to={'/agentlik-tuzilmasi'}><button className={styles.buttons__button}>Agentlikning tuzilmasi</button></Link>
         <Link to={'/rahbariyat'}><button className={styles.buttons__button_this}>Rahbariyat</button></Link>
         <Link to={'/hududiy-boshqarmalar'}><button className={styles.buttons__button}>Hududiy boshqarmalar</button></Link>
      </div>

            </div>
            <div className="agentiklar">
               <img src={image} alt="" />
               <img src={image1} alt="" />
            </div>
      </div>
      </>
   )
}

export default AgentlikTuzilmasiPage