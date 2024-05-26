import styles from './App.module.scss';
import { useEffect } from 'react';
import SelectGames from './pages/selectGames/SelectGames';
import StartScreen from './pages/startScreen/StartScreen';
import CountDownTimer from './pages/countDownTimer/CountDownTimer';
import DefaultGame from './pages/playGames/default/DefaultGame';
import FormTypeGame from './pages/playGames/formType/FormTypeGame';
import EndScreen from './pages/endScreen/EndScreen';
import { UseTypingGameContext } from './context/useTypingGame';
import NoPcScreen from './pages/noPcScreen/NoPcScreen';

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
    deviceFlg,
    setDeviceFlg,
  } = UseTypingGameContext();

  useEffect(() => {
    const device = () => {
      const ua = navigator.userAgent;
      if (
        ua.indexOf('iPhone') > 0 ||
        ua.indexOf('iPod') > 0 ||
        (ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0)
      ) {
        setDeviceFlg(false);
      } else if (ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0) {
        setDeviceFlg(false);
      } else {
        setDeviceFlg(true);
      }
    };
    device();
    // eslint-disable-next-line
  }, []);

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
    <>
      {deviceFlg ? (
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
      ) : (
        <NoPcScreen />
      )}
    </>
  );
};

export default App;
