import React, { useEffect, useState } from "react";
import styles from './style.module.css'
// import axios from "axios";


function BoglanishComponent() {

   //const [data, setData] = useState([])
   const data = [1]
   // useEffect(() => {
   //   axios.post(`https://apiastro1.vtormetallmm.ru/leaderships`)
   //      .then(res => setData(res.data))
   //  }, []);
   return (
      <>
         <div className={styles.section}>
            <div className={styles.card}>
               <hr className={styles.card__hr} />
               <h2 className={styles.card__h2}>BOG'LANISH</h2>
               <hr className={styles.hr} />
            </div>
            <div className={styles.container}>
               <div className={styles.card}>
                  {data.map((index) => (
                     <div key={index} className={styles.card__item}>
                        <p className={styles.card__p}>Bizga so’rov qoldiring biz siz bilan tez fursatda bog’lanamiz!</p>
                        <form className={styles.form}>
                           <input type="text" placeholder="Ismingizni kiriting" className={styles.input__text} />
                           <input type="email" placeholder="Emailingizni kiriting" className={styles.input__email} />
                           <input type="number" placeholder="+998" className={styles.input__number} />
                           <input type="text" placeholder="Mavzu" className={styles.input__text} />
                           <input type="text" placeholder="Habar yozing" className={styles.input__text__bottom} />
                        </form>
                        <div className={styles.button__card}>
                           <button type="submit" className={styles.button}>Jo'natish</button>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </>
   )
}


export default BoglanishComponent
