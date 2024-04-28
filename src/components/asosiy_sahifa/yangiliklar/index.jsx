import React from "react";
import styles from './style.module.css'
import Group from "../../../assets/image/yangiliklar/Group.png"
import Group1 from "../../../assets/image/yangiliklar/photo_2021-09-19_17-51-13 1.png"
import Group2 from "../../../assets/image/yangiliklar/image 2.png"
import Group3 from "../../../assets/image/yangiliklar/Mask Group (1).png"
import { useNavigate } from "react-router-dom";



function YangiliklarComponent() {
   const navigate = useNavigate()

   return (
      <>
         <div className={styles.section}>
            <div className={styles.card}>
               <hr className={styles.card__hr} />
               <h2 className={styles.card__h2}>Yangiliklar</h2>
               <hr className={styles.hr} />
            </div>
            <div className={styles.container}>
               <div className={styles.component}>
                  <div className={styles.component__left} onClick={() => navigate('/yangiliklar')}>
                     <img src={Group} className={styles.Img} alt="" />
                     <div className={styles.component__left__item}>
                        <h2 className={styles.component__h2}>"O'zbekiston Qahramonlari va yoshlar"</h2>
                        <p className={styles.component__p}>Bugun Toshkent shahar "Yoshlar markazi"da
                           O'zbekiston Respublikasi Yoshlar ishlari agentligi hamda O'zbekiston Yoshlar Ittifoqi hamkorligida ...</p>
                        <strong className={styles.component__strong}>21 Sentabr 2021 </strong>
                     </div>
                  </div>
                  <div className={styles.component__right}>
                     <div className={styles.component__right__left}>
                        <div className={styles.component__right__card1} onClick={() => navigate('/yangiliklar')}>
                           <img className={styles.Img} src={Group1} alt="" />
                            <div className={styles.component__item}> 
                               <h2 className={styles.component__h2}>"O'zbekiston Qahramonlari va yoshlar"</h2> 
                               <strong className={styles.component__strong}>21 Sentabr 2021 </strong> 
                            </div> 
                        </div>
                        <div className={styles.component__right__card2} onClick={() => navigate('/yangiliklar')}>
                           <img className={styles.Img} src={Group2} alt="" />
                            <div className={styles.component__item}> 
                              <h2 className={styles.component__right__h2}>"O'zbekiston Qahramonlari va yoshlar"</h2> 
                            <strong className={styles.component__right__strong}>21 Sentabr 2021 </strong> 
                           </div> 
                        </div>
                     </div>
                     <div className={styles.component__right__card} onClick={() => navigate('/yangiliklar')}>
                        <img className={styles.Img} src={Group3} alt="" />
                        <div className={styles.component__right__item}>
                           <h2 className={styles.component__right__h2}>"O'zbekiston Qahramonlari va yoshlar"</h2>
                           <strong className={styles.component__right__strong}>21 Sentabr 2021 </strong>
                        </div>
                     </div>
                  </div>
                  
               </div>
               <div className={styles.button__card}>
                  <button className={styles.button} onClick={() => navigate('/yangiliklar/batafsil-yangiliklar')}>Barcha yangiliklar</button>
               </div>
            </div>
         </div>
      </>
   )
}


export default YangiliklarComponent
