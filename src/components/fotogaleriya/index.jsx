import React from "react";
import styles from './style.module.css'
import ImageYangilik from "../../assets/image/fotogalereya/Yangliklar.png"
import ImageNewslar from "../../assets/image/fotogalereya/Yangliklar (1).png"
import ImageNHappy from "../../assets/image/fotogalereya/image xappy.png"
import ImageFamily from "../../assets/image/fotogalereya/family.png"
import ImageFace from "../../assets/image/fotogalereya/face.png"
import ImageRestange from "../../assets/image/fotogalereya/Rectangle 34.png"





function FotogaleriyaComponent() {
   return (
      <>
        <div className={styles.hero}>
            <hr className={styles.hero__hr} />
            <div className="container">
               <div className={styles.hero__center}>
                  <img className={styles.center__img} src={ImageYangilik} alt={ImageYangilik} />
                  <img className={styles.center__images} src={ImageNewslar} alt={ImageNewslar} />
               </div>
               <div className={styles.hero__bottom}>
                  <div className={styles.bottom__cards}>
                     <p className={styles.bottom__p}>Asosiy</p>
                     <p className={styles.bottom__pk}>Yangliklar</p>
                     <p className={styles.bottom__ps}>Fotogalereya</p>
                  </div>
               </div>
               <div className={styles.hero__page}>
                  <div className={styles.page__pages}>
                     <button className={styles.page__button}>Yangliklar</button>
                     <button className={styles.page__buttons}>Fotogalereya</button>
                     <button className={styles.page__buttonp}>Videogalereya</button>
                     <button className={styles.page__buttonk}>Blog</button>
                     <button className={styles.page__buttonx}>Tadbirlar</button>
                     <button className={styles.page__buttonl}>Ochiq m'akumotalr</button>
                     <button className={styles.page__buttonn}>Restlar</button>
                  </div>
               </div>
            </div>
         </div>
         <div className={styles.card__section}>
            <div className="container">
               <div className={styles.card__position}>
                  <div className={styles.card__relative}>
                     <div className={styles.crad__image}>
                        <img className={styles.card__images} src={ImageNHappy} alt={ImageNHappy} />
                     </div>
                     <div className={styles.card__data}>
                        <button className={styles.data__button}>20.09.2021</button>
                        <button className={styles.data__fps}>30 foto</button>
                     </div>
                     <p className={styles.relative__p}> “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc.”</p>
                  </div>
                  <div className={styles.card__relative}>
                     <div className={styles.crad__image}>
                        <img className={styles.card__images} src={ImageFamily} alt={ImageFamily} />
                     </div>
                     <div className={styles.card__data}>
                        <button className={styles.data__button}>20.09.2021</button>
                        <button className={styles.data__fps}>30 foto</button>
                     </div>
                     <p className={styles.relative__p}> “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc.”</p>
                  </div>
                  <div className={styles.card__relative}>
                     <div className={styles.crad__image}>
                        <img className={styles.card__images} src={ImageFace} alt={ImageFace} />
                     </div>
                     <div className={styles.card__data}>
                        <button className={styles.data__button}>20.09.2021</button>
                        <button className={styles.data__fps}>30 foto</button>
                     </div>
                     <p className={styles.relative__p}> “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc.”</p>
                  </div>
                  <div className={styles.card__relative}>
                     <div className={styles.crad__image}>
                        <img className={styles.card__images} src={ImageRestange} alt={ImageRestange} />
                     </div>
                     <div className={styles.card__data}>
                        <button className={styles.data__button}>20.09.2021</button>
                        <button className={styles.data__fps}>30 foto</button>
                     </div>
                     <p className={styles.relative__p}> “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc.”</p>
                  </div>
                  <div className={styles.card__relativa}>
                     <div className={styles.crad__image}>
                        <img className={styles.card__images} src={ImageRestange} alt={ImageRestange} />
                     </div>
                     <div className={styles.card__data}>
                        <button className={styles.data__button}>20.09.2021</button>
                        <button className={styles.data__fps}>30 foto</button>
                     </div>
                     <p className={styles.relative__p}> “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc.”</p>
                  </div>
                  <div className={styles.card__relativa}>
                     <div className={styles.crad__image}>
                        <img className={styles.card__images} src={ImageRestange} alt={ImageRestange} />
                     </div>
                     <div className={styles.card__data}>
                        <button className={styles.data__button}>20.09.2021</button>
                        <button className={styles.data__fps}>30 foto</button>
                     </div>
                     <p className={styles.relative__p}> “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc.”</p>
                  </div>
               </div>
               <button className={styles.card__buttonh1}>Yana Ko'rish</button>
            </div>
         </div>
      </>
   )
}
export default FotogaleriyaComponent