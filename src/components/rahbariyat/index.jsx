import React, { useState } from "react";
import styles from './style.module.css'
import { Link, useNavigate } from "react-router-dom";
import bayrog from '.././././../assets/image/Rahbariyat/bayrog.jpg'
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { useEffect } from "react";
import axios from "axios";

function RahbariyatComponent() {
   const navigate = useNavigate()
   const [data, setData] = useState([])
   const [cardOpen, setCardOpen] = useState(false);
   const HandleMore = (e) => {
      navigate(`/rahbariyat/${e.target.id}`)
    }
   useEffect(() =>{
      axios.get(`https://apiastro1.vtormetallmm.ru/leaderships`)
      .then((data) => setData(data))
   }, [])
   return(
      <>
            <div className={styles.top}>
            <hr className={styles.hr1} />
            <h1 className={styles.h1}>
               Rahbariyat
            </h1>
            <hr className={styles.hr2} />
         </div>
      <div className={styles.container}>
      <div className={styles.links}>
         <p className={styles.links__p}><Link to={'/'} className={styles.links__link}> Asosiy </Link> {`>`} Rahbariyat</p>
      </div>
      <div className={styles.buttons}>
         <Link to={'/biz-haqimizda'}><button className={styles.buttons__button}>Agentlik haqida</button></Link>
         <Link to={'/maqsad-va-vazifalar'}><button className={styles.buttons__button}>Maqsad va vazifalar</button></Link>
         <Link to={'/agentlik-tuzilmasi'}><button className={styles.buttons__button}>Agentlikning tuzilmasi</button></Link>
         <Link to={'/rahbariyat'}><button className={styles.buttons__button_this}>Rahbariyat</button></Link>
         <Link to={'/hududiy-boshqarmalar'}><button className={styles.buttons__button}>Hududiy boshqarmalar</button></Link>
      </div>
      <h3 className={styles.h3}>Rahbariyat</h3>
      <div className={styles.cards}>
         {data?.data?.map((elem , index) => 
         <>
         <div onClick={(e) =>  HandleMore(e)} id={elem.id} key={index}
                className={styles.card}
                onMouseEnter={() => setCardOpen(true)}
                onMouseLeave={() => setCardOpen(false)}>
                  <img id={elem.id} src={bayrog} alt="bu yerda bayrog bor" className={styles.card__img} />
                  {cardOpen && 
            <>
                  <h4 id={elem.id} className={styles.card__h4}>{elem.name}</h4>
                  <div id={elem.id} className={styles.messenjer}>
                     <button id={elem.id} className={styles.messenjer__button}><FaInstagram  className={styles.icon} /></button> <br />
                     <button id={elem.id} className={styles.messenjer__button}><FaWhatsapp className={styles.icon} /></button> <br />
                     <button id={elem.id} className={styles.messenjer__button}><CiFacebook className={styles.icon} /></button>
                  </div>
                  <div id={elem.id} className={styles.card__lavozim}>
                     <p id={elem.id} className={styles.card__lavozim__p}>
                        {elem.position}
                     </p>
                  </div>
            </>
                  }
               </div>
         </>
            )
         }
      </div>
      </div>
      </>
   )
}
export default RahbariyatComponent
// https://apiastro1.vtormetallmm.ru/leaderships