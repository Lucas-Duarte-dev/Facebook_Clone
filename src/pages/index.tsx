/* eslint-disable @next/next/no-img-element */
import styles from "../styles/homepage.module.scss";
import { Divisor } from "../components/Divisor";
import { CSSProperties } from "react";

export default function Home() {
  function iconProfile(position: number): CSSProperties {
    const icon: CSSProperties = {
      backgroundImage:
        "url('https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/1j-f6O0Xtyf.png?_nc_eui2=AeGeVsiV6A9AXXiI0ibQgXJGxCA0FsPulJTEIDQWw-6UlB4oQMuwZGWvW41672FmWrJl_DYIf0l7dVs9bSWtqHtn')",
      backgroundPosition: `0 ${position}px`,
      backgroundSize: "auto",
      width: 24,
      height: 24,
      backgroundRepeat: "no-repeat",
      display: "inline-block",
    };
    return icon;
  }

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
      <div className={styles.createPost}>
        <section>
          <img
            src="https://avatars.githubusercontent.com/u/66844060?v=4"
            alt="User Story"
          />
          <input type="text" placeholder="No que você está pensando, Lucas?" />
        </section>
        <Divisor />
        <section>
          <div>
            <i style={iconProfile(0)}></i>
            <span>Vídeos ao vivo</span>
          </div>
          <div>
            <i style={iconProfile(-125)}></i>
            <span>Foto/vídeo</span>
          </div>
          <div>
            <i style={iconProfile(-25)}></i>
            <span>Sentimento/atividade</span>
          </div>
        </section>
      </div>

      <div className={styles.postContainer}>
        <article>
          <header>
            <div>
              <img
                src="https://avatars.githubusercontent.com/u/66844060?v=4"
                alt="user"
              />
              <section>
                <p>Lucas Duarte</p>
                <span>3 min &#127760;</span>
              </section>
            </div>
          </header>
        </article>
      </div>
    </div>
  );
}
