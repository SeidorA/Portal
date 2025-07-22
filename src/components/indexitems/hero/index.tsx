import styles from './index.module.css';
import { CaralIcon } from 'iconcaral2';

export default function Heroportal() {
  return (
    <header className={styles.heroBanner}>
    <img src="img/blur1.png"  className={styles.blur1} alt="" srcset="" />
      <div className={`${styles.container} container`}>
        
        <div className={styles.bubble}>
            <div className={styles.year}>2025</div>
            Ver todos los anuncios    <CaralIcon name='arrowRight'/>
        </div>
        <h1 className="hero__title">Explora el ecosistema de Seidor Analytics</h1>
        <p className={styles.phero} >Conoce nuestras soluciones, accede a sus documentaciones y mantente al tanto de los próximos eventos </p>
        
      </div>
    </header>
  );
}