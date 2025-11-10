import styles from './index.module.css';
import { CaralIcon } from 'iconcaral2';
import Translate, {translate} from '@docusaurus/Translate';


export default function Heroportal() {
  return (
    <header className={styles.heroBanner}>
    <img src="img/blur1.png"  className={styles.blur1} alt="" srcset="" />
      <div className={`${styles.container} container`}>
        
        {/*<div className={styles.bubble}>
            <div className={styles.year}>2025</div>
            <Translate id="hero.bell" />
            <CaralIcon name='arrowRight'/>
        </div> */}
        <h1 className="hero__title">
          <Translate id="hero.title" />
          
        </h1>
        <p className={styles.phero} >
          <Translate id="hero.desc" />
        </p>
        
      </div>

      


    </header>
  );
}