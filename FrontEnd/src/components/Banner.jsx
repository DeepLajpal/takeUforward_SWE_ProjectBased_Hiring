import { useState } from "react";
import styles from "../styles/Banner.module.scss"
import { RxCross2 } from "react-icons/rx";
import PrimaryButton from "./primaryButton";

const Banner = () => {
    const [timerMinutes, setTimerMinutes] = useState(0);
    const [timerSeconds, setTimerSeconds] = useState(30);
    return (
        <div className={styles.bannerContainer}>
            <div className={styles.bannerContent}>
                <div className={styles.bannerTimerContainer}>
                    <p className={styles.bannerTimer}>{timerMinutes}:{timerSeconds}</p>
                </div>
                <div className={styles.bannerTextContainer}>
                    <p className={styles.closeBtn}> 🚀Launch Your Career with takeUforward! 🚀 New InternShip Oportunity for 2026 passout</p>
                </div>
                <div className={styles.bannerBtnContainer}>
                    <PrimaryButton btnText={"Apply"} />
                </div>
            </div>
        </div>
    )
}

export default Banner