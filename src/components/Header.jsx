import styles from "./Header.module.css";

const Header = (page) => {
  return (
    <header>
      <a href="/" className={styles.logo}>
        <img
          src="/visual-thinking-hbo-logo.svg"
          alt="Visual Thinking Logo"
        />
      </a>

      <nav>
        <ul>
          <li>
            <a
              href="/tekenmethodes"
            >
              Tekenmethodes
            </a>
          </li>
          <li>
            <a href="/over">
              Over
            </a>
          </li>
          <li>
            <a
              href="/minicursussen"
            >
              Minicursussen
            </a>
          </li>
          <li>
            <a href="/kennisclips">
              Kennisclips
            </a>
          </li>
          <li>
            <a href="/artikelen" className={styles.active}>
              Artikelen
            </a>
          </li>
          <li>
            <a href="/tekenruimte">
              Tekenruimte
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
