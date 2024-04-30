import React from "react";
import  "./style.module.css" ;
import  bizhaqimizda  from "./images/bizhaqimizda.png";
import  close  from "./images/close.png";
import  close2 from "./images/close2.png";
import  close3  from "./images/close3.png";
import  close4  from "./images/close4.png";
import  close5  from "./images/close5.png";
import  close6  from "./images/close6.png";
import  close7 from "./images/close7.png";
import  close8  from "./images/close8.png";
import  close9  from "./images/close9.png";
import  close10  from "./images/close10.png";
import  close11  from "./images/close11.png";
import  close12  from "./images/close12.png";
import styles from "./style.module.css";

function MaqsadVaVazifalarComponent() {
   return (
      <>
         <div className="container">
            <div className="bizhaqimizda">
                <img src={bizhaqimizda}alt=""/><hr className="bizhaqimizda_hr"style={{marginBottom:"100px" , width:"1000px",marginLeft:"280px",marginTop:"-25px"}} />
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

            </div>
            <div className="vazifalar">
               <ul className="vazifalar_ul" style={{display:"flex",flexWrap:"wrap",justifyContent:"space-between"}}>
                  <li className="vazifalar_ul_li" style={{listStyleType:"none",width:"310px",marginBottom:"50px"}}>
                     <img src={close} alt="" style={{marginLeft:"-70px", marginTop:"-20px"}}/>
                     <h3 className="vazifalar_ul_li_h4" style={{ marginTop:"-60px"}}>Yoshlar va tadbirkorlik</h3>
                     <p className="vazifalar_ul_li_p"style={{ marginTop:"-10px"}}>Yoshlarni kichik biznes va xususiy tadbirkorlikka keng jalb etish, zamonaviy kasb-hunarlar, raqamli iqtisodiyot ko‘nikmalarini puxta egallashlari uchun qo‘shimcha shart-sharoitlar yaratish, ularni ish bilan taʼminlash jarayonlariga ko‘maklashish</p>
                  </li>
                  <li className="vazifalar_ul_li" style={{listStyleType:"none",width:"310px",marginBottom:"50px"}}>
                     <img src={close2} alt="" style={{marginLeft:"-70px", marginTop:"-20px"}}/>
                     <h3 className="vazifalar_ul_li_h4" style={{ marginTop:"-60px"}}>Ijtimoiy himoya</h3>
                     <p className="vazifalar_ul_li_p"style={{ marginTop:"-10px"}}>Tarbiya muassasalarini tamomlagan yetim va ota-onasining qaramog‘idan mahrum bo‘lgan yoshlarning ijtimoiy-huquqiy himoyasini tashkil etish va bandligini taʼminlash</p>
                  </li>
                  <li className="vazifalar_ul_li" style={{listStyleType:"none",width:"310px",marginBottom:"50px"}}>
                     <img src={close3} alt="" style={{marginLeft:"-70px", marginTop:"-20px"}}/>
                     <h3 className="vazifalar_ul_li_h4" style={{ marginTop:"-60px"}}>Kuchli yoshlar</h3>
                     <p className="vazifalar_ul_li_p"style={{ marginTop:"-10px"}}>Yoshlar bilan bog‘liq soha va yo‘nalishlarda yagona davlat siyosati, strategik yo‘nalishlar va davlat dasturlarini ishlab chiqish hamda amalga oshirish</p>
                  </li>
                  <li className="vazifalar_ul_li" style={{listStyleType:"none",width:"310px",marginBottom:"50px"}}>
                     <img src={close4} alt="" style={{marginLeft:"-70px", marginTop:"-20px"}}/>
                     <h3 className="vazifalar_ul_li_h4" style={{ marginTop:"-60px"}}>Yoshlar va tadbirkorlik</h3>
                     <p className="vazifalar_ul_li_p"style={{ marginTop:"-10px"}}>Yoshlarni Vatanga sadoqat, milliy va umuminsoniy qadriyatlarga hurmat ruhida tarbiyalash, o‘sib kelayotgan yosh avlodni ilm-fanga keng jalb etish, ularni “Milliy tiklanishdan – milliy yuksalish sari!” g‘oyasi atrofida birlashtirishga qaratilgan chora-tadbirlarni belgilash, yoshlarga oid davlat siyosati targ‘ibotini tashkil etish va amalga oshirish</p>
                  </li>
                  <li className="vazifalar_ul_li" style={{listStyleType:"none",width:"310px",marginBottom:"50px"}}>
                     <img src={close5} alt="" style={{marginLeft:"-70px", marginTop:"-20px"}}/>
                     <h3 className="vazifalar_ul_li_h4" style={{ marginTop:"-60px"}}>Ijtimoiy himoya</h3>
                     <p className="vazifalar_ul_li_p"style={{ marginTop:"-10px"}}>Tarbiya muassasalarini tamomlagan yetim va ota-onasining qaramog‘idan mahrum bo‘lgan yoshlarning ijtimoiy-huquqiy himoyasini tashkil etish va bandligini taʼminlash</p>
                  </li>
                  <li className="vazifalar_ul_li" style={{listStyleType:"none",width:"310px",marginBottom:"50px"}}>
                     <img src={close6} alt="" style={{marginLeft:"-70px", marginTop:"-20px"}}/>
                     <h3 className="vazifalar_ul_li_h4" style={{ marginTop:"-60px"}}>Kuchli yoshlar</h3>
                     <p className="vazifalar_ul_li_p"style={{ marginTop:"-10px"}}>Yoshlar bilan bog‘liq soha va yo‘nalishlarda yagona davlat siyosati, strategik yo‘nalishlar va davlat dasturlarini ishlab chiqish hamda amalga oshirish</p>
                  </li>
                  <li className="vazifalar_ul_li" style={{listStyleType:"none",width:"310px",marginBottom:"50px"}}>
                     <img src={close7} alt="" style={{marginLeft:"-70px", marginTop:"-20px"}}/>
                     <h3 className="vazifalar_ul_li_h4" style={{ marginTop:"-60px"}}>Teng huquqli yoshlar</h3>
                     <p className="vazifalar_ul_li_p"style={{ marginTop:"-10px"}}>Mamlakatimizda yoshlarni qo‘llab-quvvatlash, ularning qonuniy huquq va manfaatlarini himoya qilishga qaratilgan normativ-huquqiy hujjatlarni takomillashtirish yuzasidan takliflar tayyorlash</p>
                  </li>
                  <li className="vazifalar_ul_li" style={{listStyleType:"none",width:"310px",marginBottom:"50px"}}>
                     <img src={close8} alt="" style={{marginLeft:"-70px", marginTop:"-20px"}}/>
                     <h3 className="vazifalar_ul_li_h4" style={{ marginTop:"-60px"}}>Xorijiy investitsiyalar va ilg‘or texnologiyalar</h3>
                     <p className="vazifalar_ul_li_p"style={{ marginTop:"-10px"}}>Yoshlarni qo‘llab-quvvatlash bilan bog‘liq vazifalarning bajarilishini taʼminlash maqsadida yoshlar siyosati sohasidagi qonun hujjatlariga rioya etilishi ustidan davlat nazoratini amalga oshirish</p>
                  </li>
                  <li className="vazifalar_ul_li" style={{listStyleType:"none",width:"310px",marginBottom:"50px"}}>
                     <img src={close9} alt="" style={{marginLeft:"-70px", marginTop:"-20px"}}/>
                     <h3 className="vazifalar_ul_li_h4" style={{ marginTop:"-60px"}}>Yoshlar va tadbirkorlik</h3>
                     <p className="vazifalar_ul_li_p"style={{ marginTop:"-10px"}}>Yoshlarni kichik biznes va xususiy tadbirkorlikka keng jalb etish, zamonaviy kasb-hunarlar, raqamli iqtisodiyot ko‘nikmalarini puxta egallashlari uchun qo‘shimcha shart-sharoitlar yaratish, ularni ish bilan taʼminlash jarayonlariga ko‘maklashish</p>
                  </li>
                  <li className="vazifalar_ul_li" style={{listStyleType:"none",width:"310px",marginBottom:"50px"}}>
                     <img src={close10} alt="" style={{marginLeft:"-70px", marginTop:"-20px"}}/>
                     <h3 className="vazifalar_ul_li_h4" style={{ marginTop:"-60px"}}>Vatanparvarlik</h3>
                     <p className="vazifalar_ul_li_p"style={{ marginTop:"-10px"}}>Yoshlarni qo‘llab-quvvatlash bilan bog‘liq vazifalarning bajarilishini taʼminlash maqsadida yoshlar siyosati sohasidagi qonun hujjatlariga rioya etilishi ustidan davlat nazoratini amalga oshirish</p>
                  </li>
                  <li className="vazifalar_ul_li" style={{listStyleType:"none",width:"310px",marginBottom:"50px"}}>
                     <img src={close11} alt="" style={{marginLeft:"-70px", marginTop:"-20px"}}/>
                     <h3 className="vazifalar_ul_li_h4" style={{ marginTop:"-60px"}}>Yoshlar uchun grantlar</h3>
                     <p className="vazifalar_ul_li_p"style={{ marginTop:"-10px"}}>Yoshlar yo‘nalishida faoliyat ko‘rsatuvchi nodavlat notijorat tashkilotlari faoliyatini qo‘llab-quvvatlash, shuningdek,  yoshlarga oid davlat siyosatini amalga oshirish sohasidagi dasturlar, loyihalar va ilmiy-tadqiqot ishlarini moliyalashtirish uchun ijtimoiy buyurtma shaklida ajratiladigan davlat grantlari va subsidiyalarni taqsimlash, ulardan maqsadli va samarali foydalanilishini taʼminlash.</p>
                  </li>
                  <li className="vazifalar_ul_li" style={{listStyleType:"none",width:"310px",marginBottom:"5px"}}>
                     <img src={close12} alt="" style={{marginLeft:"-70px", marginTop:"-20px"}}/>
                     <h3 className="vazifalar_ul_li_h4" style={{ marginTop:"-60px"}}>Xalqaro hamkorlik</h3>
                     <p className="vazifalar_ul_li_p"style={{ marginTop:"-10px"}}>YYoshlar siyosati sohasida xalqaro hamkorlikni rivojlantirish, yoshlar sohasidagi xalqaro reytinglarda mamlakatimiz mavqeini oshirish bo‘yicha zarur choralar ko‘rish, xorijda taʼlim olayotgan yoshlar bilan olib borilayotgan ishlarni tizimli yo‘lga qo‘yish</p>
                  </li>
               </ul>
            </div>
         </div>
      </>
   )
}
export default MaqsadVaVazifalarComponent