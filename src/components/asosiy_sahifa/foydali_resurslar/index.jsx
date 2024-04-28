import React from "react";
import styles from './style.module.css'
import Soliq from '../../../assets/image/foydaliresurslar/soliq.png'
import img1 from '../../../assets/image/foydaliresurslar/Col 2.png'
import img2 from '../../../assets/image/foydaliresurslar/Col 3.png'
import img3 from '../../../assets/image/foydaliresurslar/Col 4.png'


function FoydaliResurslarComponent() {
   return (
      <>
         <div className={styles.section}>
            <div className={styles.card}>
               <hr className={styles.card__hr} />
               <h2 className={styles.card__h2}>Foydali Resurslar</h2>
               <hr className={styles.hr} />
            </div>
            <div className={styles.container}>
               <div className={styles.card__bottom}>
                  <img className={styles.img} src={Soliq} alt="" />
                  <img className={styles.img} src={img1} alt="" />
                  <img className={styles.img} src={img2} alt="" />
                  <img className={styles.img} src={img3} alt="" />
               </div>
            </div>
         </div>
      </>
   )
}
export default FoydaliResurslarComponent