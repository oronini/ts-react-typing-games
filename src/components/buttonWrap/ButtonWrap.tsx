import { useEffect } from 'react';
import { UseTypingGameContext } from '../../context/useTypingGame';
import Button from '../button/Button';
import styles from './ButtonWrap.module.scss';
import { propsButtonWrap } from '../../types/type';

const ButtonWrap = ({ selectGames, startScreen }: propsButtonWrap) => {
  const {
    disabled,
    setDisabled,
    setSelectScreen,
    setDefaultPlay,
    setFormTypePlay,
    setCountScreen,
    setMisTyped,
    setTime,
    setScore,
    setClearFlg,
    setNotStarted,
    defaultTitle,
    formTypeTitle,
  } = UseTypingGameContext();

  useEffect(() => {
    setDisabled(false);
    // eslint-disable-next-line
  }, []);

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

  const selectSameAction = () => {
    setSelectScreen(false);
    setNotStarted(true);
    setDisabled(true);
  };

  const handleDefaultBtn = () => {
    selectSameAction();
    setDefaultPlay(true);
  };

  const handleFormTypeBtn = () => {
    selectSameAction();
    setDefaultPlay(false);
    setFormTypePlay(true);
    setTime(10);
  };

  const handleStartBtn = () => {
    setNotStarted(false);
    setCountScreen(true);
    setDisabled(true);
  };

  return (
    <div className={styles.btnWrap}>
      {selectGames ? (
        <>
          <Button
            btnTitle={defaultTitle}
            btnFun={handleDefaultBtn}
            disabled={disabled}
          />
          <Button
            btnTitle={formTypeTitle}
            btnFun={handleFormTypeBtn}
            disabled={disabled}
          />
        </>
      ) : startScreen ? (
        <>
          <Button
            btnTitle="スタート"
            btnFun={handleStartBtn}
            disabled={disabled}
          />
          <Button
            btnTitle="ゲーム選択へ"
            btnFun={handleSelect}
            disabled={disabled}
          />
        </>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default ButtonWrap;
