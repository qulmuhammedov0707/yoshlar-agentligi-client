import React from "react";
import styles from './style.module.css'
import siteLogo from '../../assets/image/header/Слой_x0020_1.png'
import HeaderShadow from '../../assets/image/header/shadow.png'
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
   return(
      <header>
         <div className={styles.header}>
            <div className="container">
               <div className={styles.header__top}>
                  <div className={styles.logo}>
                     <Link to={"/"} ><img src={siteLogo} alt="Site logo" /></Link>
                     
                  </div>
                  <div className={styles.menu}>
                     <Link className={styles.link} to={"/yangiliklar"}>Yangliklar</Link>
                     <Link className={styles.link} to={"/loyihalar"}>Loyihalar</Link>
                     <Link className={styles.link} to={"/imkoniyatlar"}>Imkoniyatlar</Link>
                     <Link className={styles.link} to={"/biz-haqimizda"}>Biz haqimizda</Link>
                     <Link className={styles.link} to={"/boglanish"}>Bog’lanish</Link>
                  </div>
                  <MenuIcon className={styles.hamburger} />
                  <div className={styles.form}>
                     <select>
                        <option value="Uzb">Uzb</option>
                        <option value="Eng">Eng</option>
                        <option value="Rus">Rus</option>
                     </select>
                     <SearchIcon className={styles.search}/>
                  </div>
               </div>
            </div>
         </div>
         <div className={styles.header_shadow}>
            <img src={HeaderShadow} alt="header bottom shadow" />
         </div>
      </header>
   )
}

export default Header