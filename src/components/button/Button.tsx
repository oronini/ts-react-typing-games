import { propsButtonType } from '../../types/type';
import styles from './Button.module.scss';

const Button = ({ btnTitle, btnFun, disabled }: propsButtonType) => {
  return (
    <button className={styles.button} onClick={btnFun} disabled={disabled}>
      <span>{btnTitle}</span>
    </button>
  );
};

export default Button;
