import React from "react";
import styles from './style.module.css'
import FooterLogo from '../../assets/image/footer/Слой_x0020_1.png'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from "react-router-dom";


function Footer() {
   return(
      <footer>
         <div className="container">
            <div className={styles.footer__top}>
               <div className={styles.footer__logo}>
                  <Link to={"/"} ><img src={FooterLogo} alt="Site logo" /></Link>
               </div>
               <div className={styles.footer__menu}>
                  <h2>Menyu</h2>
                  <Link className={styles.link} to={"/yangiliklar"}>Yangliklar</Link>
                  <Link className={styles.link} to={"/loyihalar"}>Loyihalar</Link>
                  <Link className={styles.link} to={"/imkoniyatlar"}>Imkoniyatlar</Link>
                  <Link className={styles.link} to={"/biz-haqimizda"}>Biz haqimizda</Link>
                  <Link className={styles.link} to={"/boglanish"}>Bog’lanish</Link>
               </div>
               <div className={styles.footer__manzil}>
                  <h2>Manzil</h2>
                  <span>infotoshkent@gmail.com</span>
                  <span>Toshkent, Beruniy ko’chasi 105</span>
                  <span>+998 90 999 99 99</span>
               </div>
               <div className={styles.footer__ijtimoiy_tarmoqlar}>
                  <h2>Ijtimoiy tarmoqlar</h2>
                  <TwitterIcon className={styles.icon}/>
                  <FacebookIcon className={styles.icon}/>
                  <InstagramIcon className={styles.icon}/>
               </div>
         </div>
         <hr />
         <div className={styles.footer__bottom}>
               <p>2024 &copy Barcha huquqlar himoyalangan.</p>
            </div>
         </div>
      </footer>
   )
}

export default Footer