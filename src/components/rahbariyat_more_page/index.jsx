import React from "react";
import styles from './style.module.css'
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import bayrog from '.././././../assets/image/Rahbariyat/bayrog.jpg'

function RahbariyatMoreComponent() {
   const {id} = useParams()
   const [data, setData] = useState([])
   useEffect(() => {
      axios.get(`https://apiastro1.vtormetallmm.ru/leaderships/${id}`)
      .then((data) => setData(data))
      console.log(data?.data);
   }, [])
   return(
      <>
      <div className={styles.contentHead}>
         <h1 className={styles.contentHead__h1}>Biz haqimizda</h1>
      </div>
      <div className={styles.links}>
         <p className={styles.links__p}><Link to={'/'} className={styles.links__link}> Asosiy </Link> {`>`} Biz haqimizda</p>
               <div className={styles.cards}>
               {data?.data?.map((elem, index) =>
            <>
            <div key={index}>
               <img className={styles.img} src={bayrog} alt="" />

               </div>
               <div>
               <h2>{elem.name}</h2>
               <p>{elem.position}</p>
               </div>
            <div className={styles.socials}>
            <div className={styles.socials__left}>
                     <b>Telefon raqami:</b> <br />
                     <b>Pochta:</b> <br />
                     <b>Fuqorolar qabul kunlari:</b> <br />
                  </div>
                  <div className={styles.right}>
                     <p>{elem.phone_number}</p>
                     <p>{elem.email}</p>
                     <p>{elem.reception_days}</p>
                  </div>
            </div>
            <h2>Ish faoliyati</h2>
            <p>{elem.work_activity}</p>
            <h2>Vazifa va funksiyalari</h2>
            <p>{elem.duties_and_functions}</p>
            </>
            )}   
               </div>
      </div>
      </>
   )
}
export default RahbariyatMoreComponent