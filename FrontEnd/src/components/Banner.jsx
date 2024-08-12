import styles from "../styles/Banner.module.scss"
import PrimaryButton from "./primaryButton";
import ReverseTimer from "./ReverseTimer";

const Banner = () => {

    return (
        <div className={styles.bannerContainer}>
            <div className={styles.bannerContent}>
                <div className={styles.bannerTimerContainer}>
                    <ReverseTimer/>
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