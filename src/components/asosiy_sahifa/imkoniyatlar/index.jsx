import React from "react";
import { useNavigate } from 'react-router-dom';
import styles from './style.module.css'
import Group from '../../../assets/image/imkoniyatlar/Group 108 (1).png'


const ImkoniyatlarComponent = () => {
   const navigate = useNavigate();

   const data = [1, 2, 3, 4];
   return (
      <>
         <div className={styles.section}>
            <div className={styles.card}>
               <hr className={styles.card__hr} />
               <h2 className={styles.card__h2}>Imkoniyatlar</h2>
               <hr className={styles.hr} />
            </div>
            <div className={styles.container}>
               <div className={styles.component}>
                  {data.map((index) => (
                     <div key={index} className={styles.cards}>
                        <div key={index} className={styles.component__left} onClick={() => navigate('/imkoniyatlar')}>
                           <img className={styles.img} src={Group} alt="" />
                           <div key={index} className={styles.component__left__item}>
                              <h2 className={styles.component__h2}>Yoshlar bandligini ta’minlash va rivojlantirish</h2>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </>
   )
}
export default ImkoniyatlarComponent

