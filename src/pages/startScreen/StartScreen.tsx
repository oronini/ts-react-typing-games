import { useEffect } from 'react';
import Button from '../../components/button/Button';
import { UseTypingGameContext } from '../../context/useTypingGame';
import styles from './StartScreen.module.scss';

const StartScreen = () => {
  const { defaultPlay, setNotStarted, setCountScreen, setDisabled, disabled } =
    UseTypingGameContext();

  useEffect(() => {
    setDisabled(false);
    // eslint-disable-next-line
  }, []);

  const handleStartBtn = () => {
    setNotStarted(false);
    setCountScreen(true);
    setDisabled(true);
  };

  return (
    <div className={styles.root}>
      <div className={styles.contentWrap}>
        <h3>ルール説明</h3>
        <ul>
          {defaultPlay ? (
            <>
              <li>半角英数で入力遊んでください。</li>
              <li>スペース「 . 」「 , 」も入力が必要です。</li>
            </>
          ) : (
            <>
              <li>日本語入力で遊んでださい。</li>
              <li>入力が完了したら「Enter」を押してください。</li>
            </>
          )}
        </ul>
        <div className={styles.btnWrap}>
          <Button
            btnTitle="スタート"
            btnFun={handleStartBtn}
            disabled={disabled}
          />
        </div>
      </div>
    </div>
  );
};

export default StartScreen;
