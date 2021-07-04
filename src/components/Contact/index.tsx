/* eslint-disable @next/next/no-img-element */

import styles from "./style.module.scss";

export function Contact() {
  return (
    <div className={styles.contactContainer}>
      <section>
        <h3>Contatos</h3>
        <div>
          <img src="/icons/search.svg" alt="Search Contact" />
        </div>
      </section>
    </div>
  );
}
