import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import styles from './style.module.css'
import Group from '../../assets/image/tadbirlar/group.png'


const TadbirlarComponent = () => {
   const navigate = useNavigate();

   const data = [1, 2, 3, 4];
   return (
      <>
         <div className={styles.section}>
            <div className={styles.card}>
               <hr className={styles.card__hr} />
               <h2 className={styles.card__h2}>Yangiliklar</h2>
               <hr className={styles.hr} />
            </div>
            <div className={styles.container}>
               <div className={styles.card__top}>
                  <Link className={styles.link} to={"/"}>Asosiy</Link>
                  <Link className={styles.link} to={"/yangiliklar"}>Yangiliklar</Link>
                  <Link className={styles.Link} to={"/fotogaleriya"}>Fotogaleriya</Link>
               </div>
               <div className={styles.card__buttton}>
                  <button className={styles.button} onClick={() => navigate('/yangiliklar')}>Yangliklar</button>
                  <button className={styles.button} onClick={() => navigate('/fotogaleriya')}>Fotogaleriya</button>
                  <button className={styles.card__button} onClick={() => navigate('/videogalareya')}>Videogalareya</button>
                  <button className={styles.button} onClick={() => navigate('/agentlik-tuzilmasi')}>Blog</button>
                  <button className={styles.button} onClick={() => navigate('/tadbirlar')}>Tadbirlar</button>
                  <button className={styles.buttonn} onClick={() => navigate('/ochiq-malumotlar')}>Ochiq ma’lumotlar</button>
                  <button className={styles.button} onClick={() => navigate('/videogaleriya')}>Restrlar</button>
               </div>
               <div className={styles.component}>
                  <div className={styles.component__card}>
                     {data.map((index) => (
                        <div key={index} className={styles.component__left} >
                           <img className={styles.img} src={Group} alt="" />
                           <div key={index} className={styles.component__left__item}>
                              <h2 className={styles.component__h2}>20.09.2021</h2>
                           </div>
                        </div>
                     ))}
                  </div>
                  <div className={styles.component__right}>
                     <h2 className={styles.card__h2}>Tadbirlar</h2>
                     <p className={styles.card__p}>Besh Tashabbus loyihalarini muvofiqlashtirish</p>
                     <span className={styles.card__span}>Yoshlarga oid qonunchilik tashabbuslari
                        va huquqiy savodxonlikni oshirish bo‘limi</span>
                     <span className={styles.card__span}>Fuqarolar murojati bo'limi</span>
                     <span className={styles.card__span}>Yoshlarni ijtimoiy himoya qilish va sog‘lom
                        turmush tarzini targ‘ib qilish bo‘limi</span>
                     <span className={styles.card__span}>Yoshlarga oid qonunchilik tashabbuslari va huquqiy
                        savodxonlikni oshirish bo‘limi</span>
                     <span className={styles.card__span}>Davlat va xo'jalik boshqaruv organlarida yoshlar
                        siyosatini muvofiqlashtirish boshqarmasi</span>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}
export default TadbirlarComponent

