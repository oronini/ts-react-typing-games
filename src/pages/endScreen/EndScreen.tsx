import Button from '../../components/button/Button';
import styles from './EndScreen.module.scss';
import { UseTypingGameContext } from '../../context/useTypingGame';
import { useEffect } from 'react';

const EndScreen = () => {
  const {
    disabled,
    setDisabled,
    setSelectScreen,
    defaultPlay,
    setDefaultPlay,
    setFormTypePlay,
    setCountScreen,
    misTyped,
    setMisTyped,
    time,
    setTime,
    score,
    setScore,
    clearFlg,
    setClearFlg,
    answerId,
    formTypeQuestions,
  } = UseTypingGameContext();

  const sameAction = () => {
    setDisabled(true);
    setMisTyped(0);
    setClearFlg(false);
    setScore(0);
  };

  const handleReStart = () => {
    sameAction();
    setCountScreen(true);
  };

  const handleSelect = () => {
    sameAction();
    setTime(0);
    setSelectScreen(true);
    setDefaultPlay(false);
    setFormTypePlay(false);
  };

  const mm = Math.floor(time / 60)
    .toString()
    .padStart(2, '0');

  const ss = Math.floor(time % 60)
    .toString()
    .padStart(2, '0');

  useEffect(() => {
    setDisabled(false);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className={styles.root}>
        {defaultPlay ? (
          <>
            {/* default */}
            <div className={styles.clearTitle}>CLEAR</div>
            <div className={styles.score}>
              <div className={styles.clearTime}>クリアタイム</div>
              <div className={styles.clearTimeScore}>{`${mm}:${ss}`}</div>
              <div className={styles.misTyping}>ミスタイプ</div>
              <div className={styles.misTypingScore}>{misTyped}回</div>
            </div>
          </>
        ) : (
          <>
            {/* formTypeGame */}
            <div className={styles.clearTitle}>
              {clearFlg ? 'GAME CLEAR' : 'GAME OVER'}
            </div>

            {clearFlg ? (
              ''
            ) : (
              <>
                {formTypeQuestions.map((q) => {
                  if (q.id === answerId) {
                    return (
                      <>
                        <p key={q.id} className={styles.text}>
                          正解は...
                        </p>
                        <div className={styles.answerArea}>
                          <div className={styles.answer}>{q.typingText}</div>
                          <div className={styles.question}>{q.display}</div>
                        </div>
                      </>
                    );
                  }
                  return;
                })}
              </>
            )}
            <div className={styles.score}>
              <div className={styles.misTyping}>正解数</div>
              <div className={styles.misTypingScore}>{score} 問</div>
            </div>
          </>
        )}
        <div className={styles.btnWrap}>
          <Button
            btnTitle="リトライ"
            btnFun={handleReStart}
            disabled={disabled}
          />
          <Button
            btnTitle="ゲーム選択へ"
            btnFun={handleSelect}
            disabled={disabled}
          />
        </div>
      </div>
    </>
  );
};

export default EndScreen;
