import React from "react";
import styles from './style.module.css'
import ImageYangilik from "../../assets/image/fotogalereya/Yangliklar.png"
import ImageNewslar from "../../assets/image/fotogalereya/Yangliklar (1).png"
import ImageNHappy from "../../assets/image/fotogalereya/image xappy.png"
import ImageFamily from "../../assets/image/fotogalereya/family.png"
import ImageFace from "../../assets/image/fotogalereya/face.png"
import ImageRestange from "../../assets/image/fotogalereya/Rectangle 34.png"

function VideogaleriyaComponent() {
   return(
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
                     <iframe className={styles.card__video} src="https://www.youtube.com/embed/Pi-_Ia2cO4g?si=wCr28JhlqG7YR2ZR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        {/* <img className={styles.card__images} src={ImageNHappy} alt={ImageNHappy} /> */}
                     </div>
                     <div className={styles.card__data}>
                        <button className={styles.data__button}>20.09.2021</button>
                        <button className={styles.data__fps}>30 foto</button>
                     </div>
                     <p className={styles.relative__p}> “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc.”</p>
                  </div>
                  <div className={styles.card__relative}>
                     <div className={styles.crad__image}>
                     <iframe  className={styles.card__video} src="https://www.youtube.com/embed/s00HFlsNFJA?si=VZ0J_pfkIp4iTBfO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                     </div>
                     <div className={styles.card__data}>
                        <button className={styles.data__button}>20.09.2021</button>
                        <button className={styles.data__fps}>30 foto</button>
                     </div>
                     <p className={styles.relative__p}> “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc.”</p>
                  </div>
                  <div className={styles.card__relative}>
                     <div className={styles.crad__image}>
                     <iframe  className={styles.card__video} src="https://www.youtube.com/embed/TGUByFJym0A?si=amPns_8Koxx6Q7Qv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                     </div>
                     <div className={styles.card__data}>
                        <button className={styles.data__button}>20.09.2021</button>
                        <button className={styles.data__fps}>30 foto</button>
                     </div>
                     <p className={styles.relative__p}> “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc.”</p>
                  </div>
                  <div className={styles.card__relative}>
                     <div className={styles.crad__image}>
                     <iframe  className={styles.card__video} src="https://www.youtube.com/embed/JYRz9fxZLac?si=l28oUkdyZVs-HcSf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                     </div>
                     <div className={styles.card__data}>
                        <button className={styles.data__button}>20.09.2021</button>
                        <button className={styles.data__fps}>30 foto</button>
                     </div>
                     <p className={styles.relative__p}> “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc.”</p>
                  </div>
                  <div className={styles.card__relativa}>
                     <div className={styles.crad__image}>
                     <iframe className={styles.card__video} src="https://www.youtube.com/embed/R5DEQK4u8nk?si=zq34XlCdejIqkUtd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                     </div>
                     <div className={styles.card__data}>
                        <button className={styles.data__button}>20.09.2021</button>
                        <button className={styles.data__fps}>30 foto</button>
                     </div>
                     <p className={styles.relative__p}> “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc.”</p>
                  </div>
                  <div className={styles.card__relativa}>
                     <div className={styles.crad__image}>
                     <iframe  className={styles.card__video} src="https://www.youtube.com/embed/alAl7QCwZ5Q?si=ibsC1rhoNsujzo81" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
export default VideogaleriyaComponent