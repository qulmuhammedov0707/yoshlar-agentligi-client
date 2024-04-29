import React, { useEffect, useState } from "react";
import styles from './style.module.css'
import Group from "../../../assets/image/yangiliklar/Group.png"
import Group1 from "../../../assets/image/yangiliklar/photo_2021-09-19_17-51-13 1.png"
import Group2 from "../../../assets/image/yangiliklar/image 2.png"
import Group3 from "../../../assets/image/yangiliklar/Mask Group (1).png"
import { useNavigate } from "react-router-dom";



function YangiliklarComponent() {
   const [data, setData] = useState([])
   const navigate = useNavigate();
   useEffect(() => {
      fetch('https://apiastro1.vtormetallmm.ru/news')
         .then(res => res.json())
         .then(data => setData(data))
   }, [])


   return (
      <>
         <div className={styles.section}>
            <div className={styles.card}>
               <hr className={styles.card__hr} />
               <h2 className={styles.card__h2}>Yangiliklar</h2>
               <hr className={styles.hr} />
            </div>
            <div className={styles.container}>
               {data.map((elem, index) =>
                  <div  key={index.id} className={styles.component}>
                     <div className={styles.component__left} onClick={() => navigate('/yangiliklar')}>
                     <img className={styles.Img} src={elem.image} alt="" />
                        <div className={styles.component__left__item}>
                           <h2 className={styles.component__h2}>{elem.title}</h2>
                           <p className={styles.component__p}>{elem.desc}</p>
                           <strong className={styles.component__strong}>21 sentyabr 20023</strong>
                        </div>
                     </div>
                     <div className={styles.component__right}>
                        <div className={styles.component__right__left}>
                           <div className={styles.component__right__card1} onClick={() => navigate('/yangiliklar')}>
                              <img className={styles.Img} src={elem.image} alt="" />
                              <div className={styles.component__item}>
                                 <h2 className={styles.component__h2}>{elem.title}</h2>
                                 <strong className={styles.component__strong}>21 sentyabr 20023</strong>
                              </div>
                           </div>
                           <div className={styles.component__right__card2} onClick={() => navigate('/yangiliklar')}>
                           <img className={styles.Img} src={elem.image} alt="" />
                              <div className={styles.component__item}>
                                 <h2 className={styles.component__right__h2}>{elem.title}</h2>
                                 <strong className={styles.component__right__strong}>21 sentyabr 20023</strong>
                              </div>
                           </div>
                        </div>
                        <div className={styles.component__right__card} onClick={() => navigate('/yangiliklar')}>
                        <img className={styles.Img} src={elem.image} alt="" />
                           <div className={styles.component__right__item}>
                              <h2 className={styles.component__right__h2}>{elem.title}</h2>
                              <strong className={styles.component__right__strong}>21 sentyabr 20023</strong>
                           </div>
                        </div>
                     </div>
                  </div>
               )}
               <div className={styles.button__card}>
                  <button className={styles.button} onClick={() => navigate('/yangiliklar/batafsil-yangiliklar')}>Barcha yangiliklar</button>
               </div>
            </div>
         </div>
      </>
   )
}


export default YangiliklarComponent
