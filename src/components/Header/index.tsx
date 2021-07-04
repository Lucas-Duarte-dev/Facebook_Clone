import styles from "./style.module.scss";

export function Header() {
  return (
    <div className={styles.headerContainer}>
      <header>
        <img src="/icons/facebook.svg" alt="Logo" />
        <div>
          <input type="text" placeholder="Pesquisar no Facebook" />
          <img src="/icons/search.svg" alt="Search" />
        </div>
      </header>
      <nav>
        <a href="/">
          <img src="/icons/home.svg" alt="Home Page" />
        </a>
        <a href="">
          <img src="/icons/commerce.svg" alt="Commerce Page" />
        </a>
        <a href="">
          <img src="/icons/watch.svg" alt="Watch Page" />
        </a>
      </nav>
      <div className={styles.userInfo}>
        <section>
          <img
            src="https://avatars.githubusercontent.com/u/66844060?v=4"
            alt="Lucas"
          />
          <span>Lucas</span>
        </section>
      </div>
    </div>
  );
}
