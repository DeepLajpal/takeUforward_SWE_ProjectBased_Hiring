import Popup from "../components/Popup";
import PrimaryButton from "../components/primaryButton";
import styles from "../styles/Home.module.scss";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
        <div className={styles.homeContent}>
          <PrimaryButton/>
          <Popup/>
        </div>
    </div>
  )
}

export default Home