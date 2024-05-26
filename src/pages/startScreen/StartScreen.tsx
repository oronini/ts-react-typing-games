import { UseTypingGameContext } from '../../context/useTypingGame';
import styles from './StartScreen.module.scss';
import ButtonWrap from '../../components/buttonWrap/ButtonWrap';

const StartScreen = () => {
  const { defaultPlay } = UseTypingGameContext();

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
        <ButtonWrap startScreen />
      </div>
    </div>
  );
};

export default StartScreen;
