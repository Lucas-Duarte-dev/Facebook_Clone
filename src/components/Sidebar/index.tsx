/* eslint-disable @next/next/no-img-element */
import style from "./style.module.scss";
import { Divisor } from "../Divisor";

export function Sidebar() {
  return (
    <div className={style.sidebarContainer}>
      <section className={style.optionsForUser}>
        <div>
          <img
            src="https://avatars.githubusercontent.com/u/66844060?v=4"
            alt="user"
          />
          <span>Lucas Duarte</span>
        </div>
        <div>
          <img
            src="https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/5rR6LRpNc5u.png?_nc_eui2=AeFSY9kW9rrpmpxyTVwoAfZMFjhaWUpP68wWOFpZSk_rzHERBM4Ylt1BksfeQR3YojDfpCAcryokg1xp_WOOVv7O"
            alt="Covid-19"
          />
          <span>COVID-19: Central de Informações</span>
        </div>
        <div>
          <img
            src="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png?_nc_eui2=AeEZrKVTMQHYpVtIgzqj--rbqfpKmA4GtxSp-kqYDga3FC49r8RieQrSez9uVzY_ITwLL6HHSLthG4nr-QmmTOEW"
            alt="user"
          />
          <span>Amigos</span>
        </div>
        <div>
          <img
            src="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/he-BkogidIc.png?_nc_eui2=AeHqXQvBVPuhGq_AVSTz_-tLa4YXxTz5jX9rhhfFPPmNf8sB895mdvNdyvukLDDXsIWO09phFtLnlwJDnmRK86zF"
            alt="user"
          />
          <span>Lembranças</span>
        </div>
        <div>
          <img
            src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png?_nc_eui2=AeG2oUrgf0B3viouoIO_HpqZZ3xAUM5_bWpnfEBQzn9takPlkNRWB48YPUNb38Oc2NidUBiyYomZY6ipMXv-pMH9"
            alt="user"
          />
          <span>Grupos</span>
        </div>
      </section>
      <Divisor />
      <section></section>
    </div>
  );
}
