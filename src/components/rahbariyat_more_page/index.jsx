import React from "react";
import styles from './style.module.css'
import { Link } from "react-router-dom";

function RahbariyatMoreComponent() {
   return(
      <>
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
      </>
   )
}
export default RahbariyatMoreComponent