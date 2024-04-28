import React from "react";
import styles from './style.module.css'
import img1 from '../../../assets/image/murojatlar/Group 1341.png'
import img2 from '../../../assets/image/murojatlar/Group 1346.png'
import img3 from '../../../assets/image/murojatlar/Group 1347.png'
import img4 from '../../../assets/image/murojatlar/Group 1352.png'


function MurojaatlarComponent() {
   return (
      <>
         <div className={styles.section}>
            <div className={styles.card}>
               <hr className={styles.card__hr} />
               <h2 className={styles.card__h2}>Murojatlar</h2>
               <hr className={styles.hr} />
            </div>
            <div className={styles.container}>
               <div className={styles.component}>
                  <div className={styles.component__card}>
                     <img className={styles.img} src={img1} alt="" />
                     <strong className={styles.component__strong}>2782</strong>
                     <h2 className={styles.component__h2}>Murojatlar</h2>
                  </div>
                  <div className={styles.component__card}>
                     <img className={styles.img} src={img2} alt="" />
                     <strong className={styles.component__strong}>2532</strong>
                     <h2 className={styles.component__h2}>Ko'rib chiqildi</h2>
                  </div>
                  <div className={styles.component__card}>
                     <img className={styles.img} src={img3} alt="" />
                     <strong className={styles.component__strong}>168</strong>
                     <h2 className={styles.component__h2}>Ko'rib chiqilmoqda</h2>
                  </div>
                  <div className={styles.component__card}>
                     <img className={styles.img} src={img4} alt="" />
                     <strong className={styles.component__strong}>8</strong>
                     <h2 className={styles.component__h2}>Rad etilgan</h2>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}
export default MurojaatlarComponent