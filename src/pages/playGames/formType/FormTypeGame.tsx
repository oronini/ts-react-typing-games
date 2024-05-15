import React, { useEffect, useState } from 'react';
import styles from './FormType.module.scss';
import { formGameQuestion } from '../../../types/type';
import questions from '../../../questions/formTypeGameQuestions/FormTypeGameQuestion';
import { UseTypingGameContext } from '../../../context/useTypingGame';

const FormTypeGame = () => {
  const { setAnswerId, setScore, setClearFlg, setPlayGame, setMisAction } =
    UseTypingGameContext();
  const [hiragana, setHiragana] = useState<string>('');
  const [question, setQuestion] = useState<formGameQuestion[]>(questions);
  const [currentKey, setCurrentKey] = useState<number>(
    Math.floor(Math.random() * question.length)
  );
  const [inputValue, setInputValue] = useState<string>('');
  const [questionsNum, setQuestionNum] = useState<number>(0);
  const questionsOfNum = 3;
  const timerSeconds = 15;
  const [countDownTimer, setCountDownTimer] = useState<number>(timerSeconds);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const katakana = value.replace(/[\u3042-\u3093]/g, (m) =>
      String.fromCharCode(m.charCodeAt(0) + 96)
    );
    const inputText = katakana.replace(/\s+/g, '');
    setInputValue(inputText);
    setHiragana(
      inputText.replace(/[\u30A2-\u30F3]/g, (m) =>
        String.fromCharCode(m.charCodeAt(0) - 96)
      )
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (hiragana === question[currentKey].typingText) {
      const newQuestion = question.filter(
        (Q) => Q.id !== question[currentKey].id
      );
      setScore((prev) => prev + 1);
      setCountDownTimer(timerSeconds);
      const newQuestionsNum = questionsNum + 1;
      setQuestionNum(newQuestionsNum);
      if (newQuestionsNum === questionsOfNum) {
        setClearFlg(true);
        setPlayGame(false);
      } else {
        setQuestion(newQuestion);
        const key = Math.floor(Math.random() * newQuestion.length);
        setCurrentKey(key);
        setAnswerId(newQuestion[key].id);
      }
    } else {
      setMisAction(true);
    }
    setInputValue('');
    setHiragana('');
  };

  useEffect(() => {
    setAnswerId(question[currentKey].id);
    // eslint-disable-next-line
  }, []);

  // カウントダウン;
  useEffect(() => {
    if (countDownTimer === -1) {
      setPlayGame(false);
    }

    const isRunning = setInterval(() => {
      setCountDownTimer((prevTime) => prevTime - 1);
    }, 1000);

    return () => {
      clearInterval(isRunning);
    };
    // eslint-disable-next-line
  }, [countDownTimer]);

  return (
    <div className={styles.root}>
      <div className={styles.countDownTime}>
        残り時間：
        <span className={countDownTimer < 3 ? styles.fzRed : ''}>
          {countDownTimer}
        </span>
        秒
      </div>
      <div className={styles.question}>
        <p>{question[currentKey].display}</p>
      </div>
      <div className={styles.blinkingText}>入力が終わったらEnter</div>
      <div className={styles.hiragana}>{hiragana}</div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          id="playGamesInput"
          type="text"
          className={styles.typingInput}
          autoComplete="off"
          autoFocus
          value={inputValue}
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
};

export default FormTypeGame;
