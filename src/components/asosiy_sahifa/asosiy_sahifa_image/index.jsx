import React from "react";
import styles from './style.module.css'
import img from '../../../assets/image/reklama/reklama.png'

function AsosiySahifaImageComponent() {
   return (
      <>
         <div className={styles.conteiner}>
            <img className={styles.img} src={img} alt="" />
         </div>
      </>
   )
}
export default AsosiySahifaImageComponent