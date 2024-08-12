import styles from "../styles/PrimaryButton.module.scss"

const PrimaryButton = ({btnText}) => {
  return (
    <div className={styles.popupBtnContainer}>
            <button className={styles.popupBtn}>{btnText}</button>
    </div>
  )
}

export default PrimaryButton