import PrimaryButton from "../components/primaryButton";
import styles from "../styles/Home.module.scss";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
        <div className={styles.homeContent}>
          <PrimaryButton/>
            Home
        </div>
    </div>
  )
}

export default Home