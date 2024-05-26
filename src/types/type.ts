// === context ===

import { DocumentData } from 'firebase-admin/firestore';

export type Children = {
  children: JSX.Element;
};

export type Props = {
  selectScreen: boolean;
  setSelectScreen: React.Dispatch<React.SetStateAction<boolean>>;
  notStarted: boolean;
  setNotStarted: React.Dispatch<React.SetStateAction<boolean>>;
  countScreen: boolean;
  setCountScreen: React.Dispatch<React.SetStateAction<boolean>>;
  playGame: boolean;
  setPlayGame: React.Dispatch<React.SetStateAction<boolean>>;
  defaultPlay: boolean;
  setDefaultPlay: React.Dispatch<React.SetStateAction<boolean>>;
  formTypePlay: boolean;
  setFormTypePlay: React.Dispatch<React.SetStateAction<boolean>>;
  disabled: boolean;
  setDisabled: React.Dispatch<React.SetStateAction<boolean>>;
  misTyped: number;
  setMisTyped: React.Dispatch<React.SetStateAction<number>>;
  time: number;
  setTime: React.Dispatch<React.SetStateAction<number>>;
  misAction: boolean;
  setMisAction: React.Dispatch<React.SetStateAction<boolean>>;
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  clearFlg: boolean;
  setClearFlg: React.Dispatch<React.SetStateAction<boolean>>;
  answerId: number;
  setAnswerId: React.Dispatch<React.SetStateAction<number>>;
  defaultTitle: string;
  formTypeTitle: string;
  defaultQuestions: string[];
  formTypeQuestions: formGameQuestion[] | DocumentData[];
  deviceFlg: boolean;
  setDeviceFlg: React.Dispatch<React.SetStateAction<boolean>>;
};

// === components ===
// --- button ---
export type propsButtonType = {
  btnTitle: string;
  btnFun?: () => void;
  disabled: boolean;
};

// === questions ===
// --- defaultGameQuestion ---
export type defaultGameQuestion = string[];

export type defaultGameQuestion2 = {
  id: number;
  question: string;
  japanese: string;
  kana: string;
};

// --- formTTypeGameQuestion ---
export type formGameQuestion = {
  id: number;
  display: string;
  typingText: string;
};
