import React from "react";
import styles from './style.module.css'
import { Link } from "react-router-dom";

function AgentlikTuzilmasiComponent() {
   return(
      <>
      <h1>Agentlik Tuzilmasi component</h1>
            <div className={styles.buttons}>
         <Link to={'/biz-haqimizda'}><button className={styles.buttons__button}>Agentlik haqida</button></Link>
         <Link to={'/maqsad-va-vazifalar'}><button className={styles.buttons__button}>Maqsad va vazifalar</button></Link>
         <Link to={'/agentlik-tuzilmasi'}><button className={styles.buttons__button_this}>Agentlikning tuzilmasi</button></Link>
         <Link to={'/rahbariyat'}><button className={styles.buttons__button}>Rahbariyat</button></Link>
         <Link to={'/hududiy-boshqarmalar'}><button className={styles.buttons__button}>Hududiy boshqarmalar</button></Link>
      </div>
      </>
   )
}
export default AgentlikTuzilmasiComponent