import styles from './Link.module.scss';

const Link = () => {
  return (
    <a
      href="#"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.link}
    >
      サイトを見る
    </a>
  );
};

export default Link;
