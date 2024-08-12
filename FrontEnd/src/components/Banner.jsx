import { useState } from "react";
import styles from "../styles/Banner.module.scss"
import { RxCross2 } from "react-icons/rx";

const Banner = () => {
    const [timerMinutes, setTimerMinutes] = useState(0);
    const [timerSeconds, setTimerSeconds] = useState(30);
    return (
        <div className={styles.bannerContainer}>
            <div className={styles.bannerContent}>
                <div className={styles.bannerTopContainer}>
                    <div className={styles.closeBtnContainer}>
                        <p className={styles.closeBtn}><RxCross2 /></p>
                    </div>
                    <div className={styles.closeTimerContainer}>
                        <p className={styles.closeTimer}>{timerMinutes}:{timerSeconds}</p>
                    </div>
                </div>
                <div className={styles.bannerMiddleContainer}>

                </div>
            </div>
        </div>
    )
}

export default Banner