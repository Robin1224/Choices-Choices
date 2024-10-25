import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <nav>
        <a href="/" className={styles.footerContent}>
          <img
            src="/images/visual-thinking-hbo-logo.svg"
            className={styles.logoFooter}
            alt="Visual thinking logo"
          />
          <p className={styles.title}>Visual Thinking in het hbo</p>
        </a>

        <div className={styles.iconsNav}>
          <ul>
            <li>
              <a href="https://www.instagram.com/charley_muhren/">
                <img
                  src="/images/instagram.svg"
                  alt="instagram"
                  className={styles.icon}
                />
                <span>Instagram</span>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/playlist?list=PLjrep0WCM97y9fznRYBVVKyDkzlT9fWEa">
                <img
                  src="/images/youtube.svg"
                  alt="youtube"
                  className={styles.icon}
                />
                <span>Youtube</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/charleymuhren/">
                <img
                  src="/images/linkedin.svg"
                  alt="linkedIn"
                  className={styles.icon}
                />
                <span>LinkedIn</span>
              </a>
            </li>
          </ul>
          <p>© Charley Muhren, 2024</p>
        </div>
      </nav>
    </footer>
  );
};
export default Footer;
