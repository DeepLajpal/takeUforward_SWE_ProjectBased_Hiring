import Banner from "../components/Banner.jsx";
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