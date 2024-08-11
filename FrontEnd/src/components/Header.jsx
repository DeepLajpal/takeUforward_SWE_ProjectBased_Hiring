import styles from "../styles/Header.module.scss";
import TUF_LOGO from "../Assets/TUF_LOGO.png"

const Header = () => {
  return (
    <div className={styles.headerContainer}>
        <div className={styles.headerContent}>
            <div className={styles.mainLogoContainer}>
                <img className={styles.mainLogo} src={TUF_LOGO} alt="" />
            </div>
            <div className={styles.mainHeadingContainer}>
                <p className={styles.mainHeading}>Project Based Hiring Challenge</p>
            </div>
        </div>
    </div>
  )
}

export default Header