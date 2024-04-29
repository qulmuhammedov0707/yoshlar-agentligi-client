import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import styles from './style.module.css';
import Group from '../../../assets/image/imkoniyatlar/Group 108 (1).png';

const ImkoniyatlarComponent = () => {
   const [data, setData] = useState([]);
   const navigate = useNavigate();

   useEffect(() => {
      fetch('https://apiastro1.vtormetallmm.ru/possibilities')
         .then(res => res.json())
         .then(data => setData(data));
   }, []);

   return (
      <div className={styles.section}>
         <div className={styles.card}>
            <hr className={styles.card__hr} />
            <h2 className={styles.card__h2}>Imkoniyatlar</h2>
            <hr className={styles.hr} />
         </div>
         <div className={styles.container}>
            <div className={styles.component}>
               {data.map(elem => (
                  <div key={elem.id} className={styles.cards}>
                     <div className={styles.component__left} onClick={() => navigate('/imkoniyatlar')}>
                        <img className={styles.img} src={Group} alt="" />
                        <div className={styles.component__left__item}>
                           <h2 className={styles.component__h2}>{elem.title}</h2>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default ImkoniyatlarComponent;
