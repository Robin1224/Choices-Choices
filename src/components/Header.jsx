import "./Header.css";

const Header = () => {
  return (
    <header>
      <a href="/" class="logo">
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
            <a href="/artikelen">
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
