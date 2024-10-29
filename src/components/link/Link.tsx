import styles from './Link.module.scss';

const Link = () => {
  return (
    <a
      href="https://portfolio-nextjs-jet-five.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.link}
    >
      制作者のサイトを見る
    </a>
  );
};

export default Link;
