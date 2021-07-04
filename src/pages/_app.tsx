import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

import "../styles/global.scss";
import styles from "../styles/app.module.scss";

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.appContainer}>
      <Header />
      <section>
        <Sidebar />
        <Component {...pageProps} />
      </section>
    </div>
  );
}

export default MyApp;
