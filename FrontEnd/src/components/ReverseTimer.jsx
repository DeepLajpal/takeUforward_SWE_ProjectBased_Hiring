import { useEffect, useState } from "react";
import styles from "../styles/ReverseTimer.module.scss"

const ReverseTimer = () => {

  const [timerDays, setTimerDays] = useState(1);
  const [timerHours, setTimerHours] = useState(23);
  const [timerMinutes, setTimerMinutes] = useState(59);
  const [timerSeconds, setTimerSeconds] = useState(30);

  const handleTimer = () => {
    setTimerSeconds((prevSeconds) => {
      if (prevSeconds === 59) {
        setTimerMinutes((prevMinutes) => {
          if (prevMinutes === 59 && prevSeconds === 59) {
            setTimerHours((prevHours) => {
              if (prevHours === 23 && prevMinutes === 59 && prevSeconds === 59) {
                setTimerDays((prevDays) => prevDays + 1);
                return 0;
              }
              prevHours + 1
            })
            return 0;
          }
          return prevMinutes + 1
        });
        return 0;
      };
      return prevSeconds + 1
    })
  }

  useEffect(() => {
    const timerId = setInterval(handleTimer, 1000)
    return () => clearInterval(timerId); //cleanup Function
  }, [])

  return (
    <div className={styles.timerContainer}>
      <p className={styles.timerDays}></p>
      <p className={styles.bannerTimer}>{timerDays.toString().padStart(2, "0") + "d"} : {timerHours.toString().padStart(2, "0")}h : {timerMinutes.toString().padStart(2, "0")}m : {timerSeconds.toString().padStart(2, "0")}s</p>
    </div>
  )
}

export default ReverseTimer