import { useEffect, useState } from "react";
import styles from "../styles/ReverseTimer.module.scss";

const ReverseTimer = () => {
  const [timerDays, setTimerDays] = useState(0);
  const [timerHours, setTimerHours] = useState(0);
  const [timerMinutes, setTimerMinutes] = useState(0);
  const [timerSeconds, setTimerSeconds] = useState(0);

  const expiryDate = new Date();
  expiryDate.setDate(expiryDate.getDate() + 1); // Set expiry date to 1 day from now
  expiryDate.setHours(0, 0, 0, 0); // Set expiry time to midnight

  const calculateRemainingTime = () => {
    const now = new Date();
    const totalSeconds = Math.floor((expiryDate - now) / 1000);

    if (totalSeconds < 0) {
      setTimerDays(0);
      setTimerHours(0);
      setTimerMinutes(0);
      setTimerSeconds(0);
      return;
    }

    const days = Math.floor(totalSeconds / (24 * 60 * 60));
    const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = totalSeconds % 60;

    setTimerDays(days);
    setTimerHours(hours);
    setTimerMinutes(minutes);
    setTimerSeconds(seconds);
  };

  useEffect(() => {
    calculateRemainingTime();
    const timerId = setInterval(calculateRemainingTime, 1000);
    return () => clearInterval(timerId); // Cleanup function
  }, []);

  return (
    <div className={styles.timerContainer}>
      <p className={styles.bannerTimer}>
        {timerDays.toString().padStart(2, "0")}d : {timerHours.toString().padStart(2, "0")}h : {timerMinutes.toString().padStart(2, "0")}m : {timerSeconds.toString().padStart(2, "0")}s
      </p>
    </div>
  );
};

export default ReverseTimer;
