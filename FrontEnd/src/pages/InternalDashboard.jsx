import Header from "../components/Header";
import styles from "../styles/InternalDashboard.module.scss";

const InternalDashboard = () => {
  return (
    <div className={styles.internalDashboardContainer}>
        <div className={styles.internalDashboardContent}>
            <Header mainHeading= "Internal Dashboard: Project Based Hiring Challenge"/>
        </div>
    </div>
  )
}

export default InternalDashboard