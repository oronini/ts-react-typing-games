// import Button from '../../components/button/Button';
import styles from './EndScreen.module.scss';
import { UseTypingGameContext } from '../../context/useTypingGame';
// import { useEffect } from 'react';
import ButtonWrap from '../../components/buttonWrap/ButtonWrap';
import Link from '../../components/link/Link';

const EndScreen = () => {
  const {
    defaultPlay,
    misTyped,
    time,
    score,
    clearFlg,
    answerId,
    formTypeQuestions,
  } = UseTypingGameContext();

  const mm = Math.floor(time / 60)
    .toString()
    .padStart(2, '0');

  const ss = Math.floor(time % 60)
    .toString()
    .padStart(2, '0');

  return (
    <>
      <div className={styles.root}>
        {defaultPlay ? (
          <>
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
        <ButtonWrap />
        <Link />
      </div>
    </>
  );
};

export default EndScreen;
