import { createContext, useContext, useState } from 'react';
import { Children, Props } from '../types/type';

const TypingGameContext = createContext({} as Props);

export const UseTypingGameContext = () => {
  return useContext(TypingGameContext);
};

export const TypingGameProvider = ({ children }: Children) => {
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
  };

  return (
    <TypingGameContext.Provider value={value}>
      {children}
    </TypingGameContext.Provider>
  );
};
