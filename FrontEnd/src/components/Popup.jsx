import styles from "../styles/Popup.module.scss"
import { RxCross2 } from "react-icons/rx";

const Popup = () => {
    return (
        <div className={styles.popupContainer}>
            <div className={styles.popupContent}>
                <div className={styles.popupTopContainer}>
                    <div className={styles.closeBtnContainer}>
                        <p className={styles.closeBtn}><RxCross2 /></p>
                    </div>
                    <div className={styles.closeTimerContainer}>
                        <p className={styles.closeTimer}>0.30</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Popup