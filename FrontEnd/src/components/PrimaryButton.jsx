import styles from "../styles/PrimaryButton.module.scss"

const PrimaryButton = () => {
  return (
    <div className={styles.popupBtnContainer}>
            <button className={styles.popupBtn}>Popup</button>
    </div>
  )
}

export default PrimaryButton