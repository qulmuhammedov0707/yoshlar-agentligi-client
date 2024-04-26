import React, { useState } from "react";
import styles from './style.module.css'
import { Link } from "react-router-dom";
import bayrog from './bayrog.jpg'
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";

function HududiyBoshqarmalarComponent() {
   const data = [ 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 ]
   const [cardOpen, setCardOpen] = useState(false);
   return(
      <>
      <div className={styles.container}>
      <div className={styles.contentHead}>
         <h1 className={styles.contentHead__h1}>Biz haqimizda</h1>
      </div>
      <div className={styles.links}>
         <p className={styles.links__p}><Link to={'/'} className={styles.links__link}> Asosiy </Link> {`>`} Biz haqimizda</p>
      </div>
      <div className={styles.buttons}>
         <Link to={'/biz-haqimizda'}><button className={styles.buttons__button}>Agentlik haqida</button></Link>
         <Link to={'/maqsad-va-vazifalar'}><button className={styles.buttons__button}>Maqsad va vazifalar</button></Link>
         <Link to={'/agentlik-tuzilmasi'}><button className={styles.buttons__button}>Agentlikning tuzilmasi</button></Link>
         <Link to={'/rahbariyat'}><button className={styles.buttons__button}>Rahbariyat</button></Link>
         <Link to={'/hududiy-boshqarmalar'}><button className={styles.buttons__button_this}>Hududiy boshqarmalar</button></Link>
      </div>
      <h3 className={styles.h3}>Rahbariyat</h3>
      <div className={styles.cards}>
         {data.map((elem , index) => 
         <>
               <div key={index}
                className={styles.card}
                onMouseEnter={() => setCardOpen(true)}
                onMouseLeave={() => setCardOpen(false)}>
                  <img src={bayrog} alt="bu yerda bayrog bor" className={styles.card__img} />
                  {cardOpen && 
            <>
                  <h4 className={styles.card__h4}>O`zbekiston Bayrogi</h4>
                  <div className={styles.messenjer}>
                     <button className={styles.messenjer__button}><FaInstagram  className={styles.icon} /></button> <br />
                     <button className={styles.messenjer__button}><FaWhatsapp className={styles.icon} /></button> <br />
                     <button className={styles.messenjer__button}><CiFacebook className={styles.icon} /></button>
                  </div>
                  <div className={styles.card__lavozim}>
                     <p className={styles.card__lavozim__p}>
                        O`zbekiston Respublikasi Davlatb ramzi, O`zbekiston Respublikasi Davlat bayrog'i
                     </p>
                  </div>
            </>
                  }
               </div>
         </>
            )
         }
      </div>
      </div>
      </>
   )
}
export default HududiyBoshqarmalarComponent