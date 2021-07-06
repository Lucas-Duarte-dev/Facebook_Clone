/* eslint-disable @next/next/no-img-element */
import styles from "../styles/homepage.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.storysContainer}>
        <div>
          <img
            src="https://avatars.githubusercontent.com/u/66844060?v=4"
            alt="User Story"
          />
          <div>
            <img src="/icons/plus.svg" alt="Add" />
          </div>
          <span>Criar story</span>
        </div>
      </section>
      <div className={styles.createPost}></div>
    </div>
  );
}
