import React from "react";
import styles from './style.module.css'
import bizhaqimizda from './images/bizhaqimizda.png'
import image from './images/image.png'
import image1 from './images/image1.png'

function AgentlikTuzilmasiComponent() {
   return(
      <>
      <div className="container">
      <div className="bizhaqimizda">
                <img src={bizhaqimizda}alt="" /><hr className="bizhaqimizda_hr"style={{marginBottom:"100px" , width:"1000px",marginLeft:"280px",marginTop:"-25px"}} />
                <button style={{padding:"0px",background:"none",marginTop:"-50px",marginBottom:"100px",width:"200px",height:"37px",marginLeft:"30px",border:"3px solid #3D7DA9"}}>Agentlik haqida</button>
                <button style={{padding:"0px",background:"none",marginTop:"-50px",marginBottom:"100px",width:"200px",height:"37px",marginLeft:"30px",border:"3px solid #3D7DA9"}}>Maqsad va vazifalar</button>
                <button style={{padding:"0px",background:"none",marginTop:"-50px",marginBottom:"100px",width:"200px",height:"37px",marginLeft:"30px",border:"3px solid #3D7DA9"}}>Agentlikning tuzilmasi</button>
                 <button style={{padding:"0px",background:"none",marginTop:"-50px",marginBottom:"100px",width:"200px",height:"37px",marginLeft:"30px",border:"3px solid #3D7DA9"}}>Rahbariyat</button>
                 <button style={{padding:"0px",background:"none",marginTop:"-50px",marginBottom:"100px",width:"200px",height:"37px",marginLeft:"30px",border:"3px solid #3D7DA9"}}>Hududiy boshqarmalar</button>
            </div>
            <div className="agentiklar">
               <img src={image} alt="" />
               <img src={image1} alt="" />
            </div>
      </div>
      </>
   )
}
export default AgentlikTuzilmasiComponent