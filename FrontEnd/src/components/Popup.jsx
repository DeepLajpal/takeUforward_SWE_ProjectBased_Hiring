import { useState } from "react";
import styles from "../styles/Popup.module.scss"
import { RxCross2 } from "react-icons/rx";

const Popup = () => {
    const [timerMinutes, setTimerMinutes] = useState(0)
    const [timerSeconds, setTimerSeconds] = useState(30)
    return (
        <div className={styles.popupContainer}>
            <div className={styles.popupContent}>
                <div className={styles.popupTopContainer}>
                    <div className={styles.closeBtnContainer}>
                        <p className={styles.closeBtn}><RxCross2 /></p>
                    </div>
                    <div className={styles.closeTimerContainer}>
                        <p className={styles.closeTimer}>{timerMinutes}:{timerSeconds}</p>
                    </div>
                </div>
                <div className={styles.popupMiddleContainer}>
                    
                </div>
            </div>
        </div>
    )
}

export default Popup