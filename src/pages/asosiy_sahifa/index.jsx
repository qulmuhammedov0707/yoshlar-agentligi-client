import React from "react";
import HeroComponent from '../../components/asosiy_sahifa/hero/index'
import YangiliklarComponent from "../../components/asosiy_sahifa/yangiliklar";
import LoyihalarComponent from "../../components/asosiy_sahifa/loyihalar";
import MurojaatlarComponent from "../../components/asosiy_sahifa/murojaatlar";
import ImkoniyatlarComponent from "../../components/asosiy_sahifa/imkoniyatlar";
import BizHaqimizdaComponent from "../../components/asosiy_sahifa/biz_haqimizda";
import FoydaliResurslarComponent from "../../components/asosiy_sahifa/foydali_resurslar";
import AsosiySahifaImageComponent from "../../components/asosiy_sahifa/asosiy_sahifa_image";
import BoglanishComponent from "../../components/asosiy_sahifa/boglanish";

function AsosiySahifaPage(){
   return(
      <>
         <HeroComponent />
         <YangiliklarComponent />
         <LoyihalarComponent />
         <MurojaatlarComponent />
         <ImkoniyatlarComponent />
         <BizHaqimizdaComponent />
         <FoydaliResurslarComponent />
         <AsosiySahifaImageComponent />
         <BoglanishComponent />
      </>
   )
}

export default AsosiySahifaPage