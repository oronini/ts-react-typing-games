import { useEffect } from 'react';
import Button from '../../components/button/Button';
import styles from './NoPcScreen.module.scss';
import { UseTypingGameContext } from '../../context/useTypingGame';
import Link from '../../components/link/Link';

const toGameMode = () => {
  console.log('click');
};

const NoPcScreen = () => {
  const { disabled, setDisabled } = UseTypingGameContext();

  useEffect(() => {
    setDisabled(false);
    // eslint-disable-next-line
  }, []);
  return (
    <div className={styles.root}>
      <div>
        <p>スマホ・タブレットの</p>
        <p>キーパットでは遊べません。</p>

        <div className={styles.btnWrap}>
          <p>キーボード接続の場合は</p>
          <Button
            btnTitle="ゲーム画面へ"
            btnFun={toGameMode}
            disabled={disabled}
          />
        </div>
        <Link />
      </div>
    </div>
  );
};

export default NoPcScreen;
