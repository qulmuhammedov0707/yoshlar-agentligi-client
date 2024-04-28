import React from "react";
import styles from './style.module.css'
import img from '../../../assets/image/hero/img.png'

function HeroComponent() {
   return (
      <>
         <div className={styles.section}>
            <div className={styles.container}>
               <div className={styles.card}>
                  <div className={styles.card__item}>
                     <h2 className={styles.card__item__h2}>YOSHLAR</h2>
                     <h3 className={styles.card__item__h3}>SAYLOVGA</h3>
                     <h2 className={styles.card__item__h2}>TAYYORMISIZ?</h2>
                     <button className={styles.button}>Batafsil</button>
                  </div>
                  <img className={styles.img} src={img} alt="" />
               </div>
            </div>
         </div>
      </>
   )
}
export default HeroComponent