import React from "react";
import styles from './style.module.css'
import ImageFamily from "../../assets/image/fotogalereya/family.png"
import ImageHagis from "../../assets/image/fotogalereya/image xappy.png"
import ImageSas from "../../assets/image/fotogalereya/face.png"
import ImageFont from "../../assets/image/fotogalereya/Rectangle 34.png"
import ImageTeam from "../../assets/image/fotogalereya/tem ismge.png"
import ImageViktor from "../../assets/image/fotogalereya/Vector.png"
import ImageViktor1 from "../../assets/image/fotogalereya/Vector (1).png"

function VideogaleriyaBatafsilComponent() {
   return(
      <>
     <div className="container">
            <div className={styles.header}>
               <img className={styles.header__img} src={ImageFamily} alt={ImageFamily} />
               <img src={ImageHagis} alt={ImageHagis} />
               <img src={ImageSas} alt={ImageSas} />
               <img src={ImageFont} alt={ImageFont} />
            </div>
         </div>
         <div className={styles.modals}>
            <div className={styles.modal__right}>
               <img className={styles.right__img} src={ImageViktor} alt={ImageViktor}/>
            </div>
            <div className={styles.modal__tehn}>
               <img className={styles.right__img1} src={ImageViktor1} alt={ImageViktor1}/>
            </div>
            <div className={styles.modal}>
            <iframe  className={styles.card__videos} src="https://www.youtube.com/embed/s00HFlsNFJA?si=VZ0J_pfkIp4iTBfO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
               
            </div>
         </div>
         <div className={styles.no__overlay}>

         </div>
      </>
   )
}
export default VideogaleriyaBatafsilComponent