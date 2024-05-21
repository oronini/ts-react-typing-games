import { createContext, useContext, useEffect, useState } from 'react';
import { Children, Props, formGameQuestion } from '../types/type';
import { collection, getDocs } from 'firebase/firestore';
import db from '../firebase';
import { DocumentData } from 'firebase-admin/firestore';

const TypingGameContext = createContext({} as Props);

export const UseTypingGameContext = () => {
  return useContext(TypingGameContext);
};

export const TypingGameProvider = ({ children }: Children) => {
  const [formTypeQuestions, setFormTypeQuestions] = useState<
    formGameQuestion[] | DocumentData[]
  >([{}]);
  const [defaultQuestions, setDefaultQuestions] = useState<string[]>([]);
  const [selectScreen, setSelectScreen] = useState<boolean>(true);
  const [notStarted, setNotStarted] = useState<boolean>(false);
  const [countScreen, setCountScreen] = useState<boolean>(false);
  const [playGame, setPlayGame] = useState<boolean>(false);
  const [defaultPlay, setDefaultPlay] = useState<boolean>(true);
  const [formTypePlay, setFormTypePlay] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(false);
  const [misTyped, setMisTyped] = useState<number>(0);
  const [time, setTime] = useState<number>(0);
  const [misAction, setMisAction] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [clearFlg, setClearFlg] = useState<boolean>(false);
  const [answerId, setAnswerId] = useState<number>(0);
  const defaultTitle = 'スタンダード';
  const formTypeTitle = '難読漢字';

  useEffect(() => {
    const defaultGameData = collection(db, 'defultGameQuestion');
    getDocs(defaultGameData).then((snapShot) => {
      // console.log(snapShot.docs.map((doc) => doc.data().questions));
      const data = snapShot.docs.map((doc) => doc.data().questions);
      setDefaultQuestions(data[0]);
    });

    const formGameData = collection(db, 'obj');
    getDocs(formGameData).then((snapShot) => {
      // console.log(snapShot.docs.map((doc) => doc.data()));
      const data = snapShot.docs.map((doc) => doc.data());
      setFormTypeQuestions(data);
    });
  }, []);

  const value = {
    selectScreen,
    setSelectScreen,
    notStarted,
    setNotStarted,
    countScreen,
    setCountScreen,
    playGame,
    setPlayGame,
    defaultPlay,
    setDefaultPlay,
    formTypePlay,
    setFormTypePlay,
    disabled,
    setDisabled,
    misTyped,
    setMisTyped,
    time,
    setTime,
    misAction,
    setMisAction,
    score,
    setScore,
    clearFlg,
    setClearFlg,
    answerId,
    setAnswerId,
    defaultTitle,
    formTypeTitle,
    defaultQuestions,
    formTypeQuestions,
  };

  return (
    <TypingGameContext.Provider value={value}>
      {children}
    </TypingGameContext.Provider>
  );
};
