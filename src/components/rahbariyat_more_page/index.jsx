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
      </>
   )
}
export default RahbariyatMoreComponent