import styles from './SelectGames.module.scss';
import Link from '../../components/link/Link';
import ButtonWrap from '../../components/buttonWrap/ButtonWrap';

const SelectGames = () => {
  return (
    <div className={styles.root}>
      <div className={styles.contentWrap}>
        <ButtonWrap selectGames />
        <Link />
      </div>
    </div>
  );
};

export default SelectGames;
