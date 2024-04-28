import React from "react";
import styles from './style.module.css'
import img from '../../../assets/image/tanishtiruv/Client.png'

function Tanishtiruv() {
    return (
        <>
            <div className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.card}>
                        <div className={styles.card__item}>
                            <h3 className={styles.card__item__h3}>TANISHING</h3>
                            <p className={styles.card__item__p}>Shaxlo Hudoyberdiyeva</p>
                            <span className={styles.card__item__span}>We had an incredible experience working with Landify and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the product concept so quickly. It acted as a catalyst to take our design to the next level and get more eyes on our product.</span>
                            <span className={styles.card__item__card__span}>Scarlett Johansson</span>
                            <span className={styles.card__item__card__item__span}>CEO at Xion</span>
                        </div>
                        <img className={styles.img} src={img} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Tanishtiruv