import React, { useEffect, useRef, useState } from 'react';
import styles from './DefaultGame.module.scss';
import defaultQuestions from '../../../questions/defaultGameQuestion/defaultGameQuestion';
import { UseTypingGameContext } from '../../../context/useTypingGame';

const DefaultGame = () => {
  const {
    defaultPlay,
    playGame,
    setPlayGame,
    setMisTyped,
    setMisAction,
    setTime,
  } = UseTypingGameContext();
  const [question, setQuestion] = useState<string[]>(defaultQuestions);
  const [currentKey, setCurrentKey] = useState<number>(
    Math.floor(Math.random() * question.length)
  );
  const [typingText, setTypingText] = useState<string>(question[currentKey]);
  const [untyped, setUntyped] = useState<string[]>(typingText.split(''));
  const [typedText, setTypedText] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [questionsNum, setQuestionNum] = useState<number>(0);
  const questionsOfNum = 3;

  const textArea = useRef(null);

  const isThereQuestion = (newQuestion: string[]) => {
    const newQuestionsNum = questionsNum + 1;
    setQuestionNum(newQuestionsNum);
    if (newQuestionsNum === questionsOfNum) {
      setPlayGame(false);
    } else {
      // keyの更新
      const key = Math.floor(Math.random() * newQuestion.length);
      setCurrentKey(key);
      const newTypingText = newQuestion[key];
      setTypingText(newTypingText);
      setUntyped(newTypingText.split(''));
      // 入力済みのテキスト+inputを空にする
      setTypedText([]);
      setInputValue('');
    }
  };

  // 未入力がなければの処理
  const nextQuestion = () => {
    if (untyped.length <= 0) {
      // 出題配列から済みを削除
      const newQuestion = question.filter((value) => value !== typingText);
      setQuestion(newQuestion);
      isThereQuestion(newQuestion);
    }
    return;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValueLastCharacter = e.target.value.slice(-1);

    if (inputValueLastCharacter === untyped[0]) {
      const newUntyped = untyped;
      newUntyped.shift();
      const newTypedText = [...typedText, inputValueLastCharacter];
      setTypedText(newTypedText);
      setUntyped(newUntyped);
      setInputValue(newTypedText.join(''));
      nextQuestion();
    } else {
      setMisTyped((prev) => prev + 1);
      setMisAction(true);
    }
  };

  // defaultタイム計測
  useEffect(() => {
    if (!defaultPlay || !playGame) {
      return;
    }

    const isRunning = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(isRunning);
    };
    // eslint-disable-next-line
  }, [defaultPlay, playGame]);

  return (
    <>
      <div className={styles.question}>
        <span className={styles.marker}>{typedText.join('')}</span>
        <span>{untyped}</span>
      </div>
      <div className={styles.blinkingText}>半角英数で入力してください。</div>
      <textarea
        id="playGamesInput"
        className={styles.typingInput}
        autoComplete="off"
        autoFocus
        value={inputValue}
        onChange={handleInputChange}
        ref={textArea}
      />
    </>
  );
};

export default DefaultGame;
