import Button from '../../components/button/Button';
import styles from './SelectGames.module.scss';
import { UseTypingGameContext } from '../../context/useTypingGame';
import { useEffect } from 'react';

const SelectGames = () => {
  const {
    disabled,
    setSelectScreen,
    setNotStarted,
    setDefaultPlay,
    setFormTypePlay,
    setTime,
    setDisabled,
    defaultTitle,
    formTypeTitle,
  } = UseTypingGameContext();

  const sameAction = () => {
    setSelectScreen(false);
    setNotStarted(true);
    setDisabled(true);
  };

  const handleDefaultBtn = () => {
    sameAction();
    setDefaultPlay(true);
  };

  const handleFormTypeBtn = () => {
    sameAction();
    setDefaultPlay(false);
    setFormTypePlay(true);
    setTime(10);
  };

  useEffect(() => {
    setDisabled(false);
    // eslint-disable-next-line
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.contentWrap}>
        <div className={styles.btnWrap}>
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
        </div>
      </div>
    </div>
  );
};

export default SelectGames;
