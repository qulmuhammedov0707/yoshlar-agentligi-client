import React from "react";
import styles from './style.module.css'
import image from './image/image.png'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

function ImkoniyatlarBatafsilComponent() {
   return (
      <>
         <div className={styles.top}>
            <hr className={styles.hr1} />
            <h1 className={styles.h1}>
               IMkoniyatlar
            </h1>
            <hr className={styles.hr2} />
         </div>
         <div className="container">
            <div className={styles.container}>
               <div className={styles.left}>
                  <h2 className={styles.h2 - 1}>"O'zbekiston Qahramonlari va yoshlar"</h2>
                  <small className={styles.small}><CalendarMonthIcon/>21 Sentabr 2021 </small>
                  <img src={image} alt="image" />
                  <p className={styles.p}>
                     Yoshlarning saylov haqidagi bilimlarini boy etish maqsadida mamlakatimiz bo‘ylab o‘tkazilayotgan "Yosh saylovchi - 2021" forumi Navoiy viloyatida.
                     <br />
                     <br />
                     Navoiy shahridagi “Alisher Navoiy“ nomli madaniyat va istirohat bog'ida forum doirasida "O‘z kelajagimni o‘zim belgilayman, Sizchi?” shiori ostida insholar tanlovi, “Munozara” intellektual bellashuvi, yutuqli viktorina, yoshlarning huquqiy savodxonligini aniqlashga qaratilgan “Siz bilasizmi?” televizion o‘yini va "O'zbekiston uchun 100 g'oya" loyihasi o‘tkazildi.

                     <br />
                     <br />
                     Navoiy yosh saylovchilariga saylov jarayoni haqida muntazam ma’lumot berib boruvchi yoshsaylovchi.uz elektron platformasi haqida ma'lumotlar berildi.
                     <br />
                     <br />

                     "Yosh saylovchi" forumi bugun Samarqand viloyatida davom etadi. 16-sentabr kuni “Adiblar xiyoboni”da loyihaning so‘nggi finali bo‘lib o‘tdi. Respublika bosqichida ishtirok etgan 67 nafar ishtirokchidan saralangan 10 nafar ijodkorlar 4 ta – nazm, nasr, badiiy tarjima, tasviriy san’at yo‘nalishi finalchilari bellashdilar.
                  </p>
               </div>
               <div className={styles.right}>
                  <h2 className={styles.h2}>
                     IMkoniyatlar
                  </h2>
                  <ul className={styles.ul}>
                     <li className={styles.li}>
                        Besh Tashabbus loyihalarini muvofiqlashtirish
                     </li>
                     <li className={styles.li}>
                        Yoshlarga oid qonunchilik tashabbuslari va huquqiy savodxonlikni oshirish bo‘limi
                     </li>
                     <li className={styles.li}>
                        Fuqarolar murojati bo'limi
                     </li>
                     <li className={styles.li}>
                        Yoshlarni ijtimoiy himoya qilish va sog‘lom turmush tarzini targ‘ib qilish bo‘limi
                     </li>
                     <li className={styles.li}>
                        Yoshlarga oid qonunchilik tashabbuslari va huquqiy savodxonlikni oshirish bo‘limi                  </li>
                     <li className={styles.li}>
                        Davlat va xo'jalik boshqaruv organlarida yoshlar siyosatini muvofiqlashtirish boshqarmasi                  </li>
                  </ul>
               </div>
            </div>
         </div>
      </>
   )
}
export default ImkoniyatlarBatafsilComponent