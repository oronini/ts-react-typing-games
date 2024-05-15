import { useEffect, useState } from 'react';
import styles from './CountDownTimer.module.scss';
import { UseTypingGameContext } from '../../context/useTypingGame';

const CountDownTimer = () => {
  const { setCountScreen, setPlayGame } = UseTypingGameContext();
  const [count, setCount] = useState<number>(3);

  const gameStartFun = () => {
    setCountScreen(false);
    setPlayGame(true);
  };

  useEffect(() => {
    if (count === -1) {
      gameStartFun();
      return;
    }

    const timer = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
    // eslint-disable-next-line
  }, [count]);

  return (
    <div className={styles.root}>
      <div>
        {count <= 0 ? (
          'start'
        ) : (
          <div className={styles.circle}>
            <div className={styles.circleInner}>{count}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CountDownTimer;
