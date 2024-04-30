import React, { useEffect, useState } from "react";
import styles from './style.module.css'
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';



const LoyihalarComponent = () => {

   const itemData = [
      {
         img: 'https://aniq.uz/photos/news/P5dcoLMWprh3eUU.jpeg',
         title: 'Blinds',
      },
      {
         img: 'https://i.pinimg.com/474x/85/a0/6f/85a06fbcf740edca4df98aceceb501f2.jpg',
         title: 'Chairs',
      },
      {
         img: 'https://i.pinimg.com/236x/51/3d/be/513dbec2072d24797a73399e02c84554.jpg',
         title: 'Laptop',
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
   const [data, setData] = useState([])
   const navigate = useNavigate();
   useEffect(() => {
      fetch('https://apiastro1.vtormetallmm.ru/projects')
         .then(res => res.json())
         .then(data => setData(data))
   }, [])


   return (
      <>
         <div className={styles.section}>
            <div className={styles.card}>
               <hr className={styles.card__hr} />
               <h2 className={styles.card__h2}>Loyihalar</h2>
               <hr className={styles.hr} />
            </div>
            <div className={styles.container}>
               {data.map((elem, index) => (
                  <Box>
                     <ImageList variant="masonry" cols={3} gap={8}>
                        {itemData.map((item) => (
                           <ImageListItem className={styles.images} key={item.img} onClick={() => navigate('/loyihalar')}>
                              <img
                                 srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                 src={`${item.img}?w=248&fit=crop&auto=format`}
                                 alt={item.title}
                                 loading="lazy"
                              />
                              <div className={styles.card__item}>
                                 <h2 className={styles.card__item__h2}>{elem.title}</h2>
                                 <p className={styles.card__p}>{elem.description}</p>
                              </div>
                           </ImageListItem>
                        ))}
                     </ImageList>
                  </Box>
               ))}
               <div className={styles.button__card}>
                  <button className={styles.button} onClick={() => navigate('/loyihalar/batafsil-loyihalar')}>Barcha loyihalar</button>
               </div>
            </div>
         </div>
      </>
   )
}
export default LoyihalarComponent

