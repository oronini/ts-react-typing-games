import styles from './App.module.scss';
import { useEffect } from 'react';
import SelectGames from './pages/selectGames/SelectGames';
import StartScreen from './pages/startScreen/StartScreen';
import CountDownTimer from './pages/countDownTimer/CountDownTimer';
import DefaultGame from './pages/playGames/default/DefaultGame';
import FormTypeGame from './pages/playGames/formType/FormTypeGame';
import EndScreen from './pages/endScreen/EndScreen';
import { UseTypingGameContext } from './context/useTypingGame';

const App = () => {
  const {
    selectScreen,
    notStarted,
    playGame,
    defaultPlay,
    formTypePlay,
    countScreen,
    misAction,
    setMisAction,
    defaultTitle,
    formTypeTitle,
  } = UseTypingGameContext();

  // ミス時のアクション用
  useEffect(() => {
    if (!misAction) {
      return;
    }

    const misTypeAction = setTimeout(() => {
      setMisAction(!misAction);
    }, 100);

    return () => {
      clearTimeout(misTypeAction);
    };
    // eslint-disable-next-line
  }, [misAction]);

  return (
    <label htmlFor={defaultPlay || formTypePlay ? 'playGamesInput' : ''}>
      <div className={styles.container}>
        {misAction ? <div className={styles.misTypeOverRay}></div> : ''}
        {selectScreen ? (
          <h2>タイピングゲーム</h2>
        ) : notStarted && defaultPlay ? (
          <h2>{defaultTitle}</h2>
        ) : notStarted && formTypePlay ? (
          <h2>{formTypeTitle}</h2>
        ) : (
          ''
        )}
        {selectScreen ? (
          <SelectGames />
        ) : notStarted ? (
          <StartScreen />
        ) : countScreen ? (
          <CountDownTimer />
        ) : defaultPlay && playGame ? (
          <DefaultGame />
        ) : formTypePlay && playGame ? (
          <FormTypeGame />
        ) : (
          <EndScreen />
        )}
      </div>
    </label>
  );
};

export default App;
