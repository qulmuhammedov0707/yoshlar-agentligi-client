import React from "react";
import { useNavigate } from 'react-router-dom';
import styles from './style.module.css'
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';




const BizHaqimizdaComponent = () => {
   const navigate = useNavigate();
   const itemData = [
      {
         img: 'https://aniq.uz/photos/news/P5dcoLMWprh3eUU.jpeg',
         title: 'Blinds',
      },
      {
         img: 'https://www.investorsinpeople.com/wp-content/uploads/2022/04/shutterstock_236097745.jpg',
         title: 'Doors',
      },
      {
         img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
         title: 'Coffee',
      },
      {
         img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
         title: 'Storage',
      }
   ];
   const data = [1]
   return (
      <>
         <div className={styles.section}>
            <div className={styles.card}>
               <hr className={styles.card__hr} />
               <h2 className={styles.card__h2}>BizHaqimizda</h2>
               <hr className={styles.hr} />
            </div>
            <div className={styles.container}>
               <div className={styles.component}>
                  {data.map((index) => (
                     <div key={index} className={styles.cards}>
                        <div key={index} className={styles.cards__left}>
                           <h3 className={styles.cards__h3}>O‘zbekiston Respublikasi Yoshlar ishlari agentligi yoshlarga oid davlat siyosatini yangi bosqichga olib chiqish, yoshlar sohasidagi muammolarga samarali yechim topish, ularni har tomonlama qo‘llab-quvvatlash, shuningdek vakolatli organlar faoliyatini samarali tashkil etish hamda muvofiqlashtirishni amalga oshiruvchi davlat tashkilotidir.
                              <br />
                              <br />
                              Agentlikning qabul qilgan qarorlari davlat organlari, boshqa tashkilot va ularning mansabdor shaxslari, shuningdek, fuqarolar uchun bajarilishi majburiy hisoblanadi. Agentlik yuridik shaxs hisoblanib, o‘z nomi yozilgan va Davlat gerbi tasviri tushirilgan muhr va blankalarga, mustaqil balansga, shaxsiy g‘azna hisobvaraqlariga, bank hisobvaraqlariga ega.
                              <br />
                              <br />
                              Agentlik tizimiga agentlikning markaziy apparati, hududiy bo‘linmalari, Yoshlar muammolarini o‘rganish va istiqbolli kadrlarni tayyorlash instituti, “Yoshlar media xoldingi” AJ kiradi. </h3>
                           <div className={styles.button__card}>
                              <button className={styles.button} onClick={() => navigate('/rahbariyat/batafsil-rahbariyat')}>Batafsil</button>
                           </div>
                        </div>
                        <div key={index} className={styles.cards__right}>
                           <Box className={styles.cards__right__box} >
                              <ImageList  className={styles.cards__right__img} variant="masonry" cols={3} gap={8}>
                                 {itemData.map((item) => (
                                    <ImageListItem key={item.img} onClick={() => navigate('/biz-haqimizda')}>
                                       <img
                                          srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                          src={`${item.img}?w=248&fit=crop&auto=format`}
                                          alt={item.title}
                                          loading="lazy"
                                       />
                                    </ImageListItem>
                                 ))}
                              </ImageList>
                           </Box>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </>
   )
}
export default BizHaqimizdaComponent


