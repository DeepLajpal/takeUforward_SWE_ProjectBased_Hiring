import Banner from "../components/Banner.jsx";
import PrimaryButton from "../components/primaryButton";
import styles from "../styles/Home.module.scss";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
        <div className={styles.homeContent}>
          <Banner/>
        </div>
    </div>
  )
}

export default Home