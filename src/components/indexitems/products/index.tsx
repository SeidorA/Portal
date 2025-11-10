

import React from 'react';
import styles from './index.module.css';
import { Brand } from 'iconcaral2';
import { useColorMode } from '@docusaurus/theme-common';
import Translate, {translate} from '@docusaurus/Translate';
import Link from '@docusaurus/Link';

type productsItems = {
  title: string;
  description: string;
  link?: string;
  class: string;
};

const FeatureList: productsItems[] = [
    
    {
        title: 'Doxa',
        description: "owno.doxa",       
        class: 'doxa',
        link: "/docs/doxa/intro"
    },
    {
        title: 'Harbinger',
        description: "owno.harbinger",
        class: 'har',
        link: "/docs/harbinger/intro"
    },
    {
        title: 'Cloud Costing',
        description: "owno.cc",
        class: 'cc',
        link: "/docs/cc/intro"
    },{
        title: 'Feelings',
        description: "owno.feelings",       
        class: 'feel',
        link: "/docs/feelings/intro"
    }
];

function ProductItem({title, description, link,  class: className}: productsItems) {
  const { colorMode } = useColorMode();
  const lightSrc = `img/index/${title.toLowerCase()}_ligth.png `;
  const darkSrc = `img/index/${title.toLowerCase()}_dark.png `;

  return (
    <a href={link} className={styles.linkStyle}>
        <div className={`${styles.productItem} ${styles[className]}`}>      
        <div className="padding--md">
          <div className={styles.diplay__flex}>
            <Brand name={title.replace(/\s+/g, "")} size={34} />
            <h3 className={styles.productTitle}>{title}</h3>
          </div>
          <p className={styles.productDescription}>

            <Translate id={description} />
          </p>
        </div>
        <img src={colorMode === 'dark' ? darkSrc : lightSrc} className={styles.imgfloat} alt="" srcset="" />
      </div>
    </a>
  );
}

function SuperItem({ title, children,link, class: className }: ProductsItems) {
  const { colorMode } = useColorMode();
  const lightSrc = `img/index/${title.toLowerCase()}_ligth.png `;
  const darkSrc = `img/index/${title.toLowerCase()}_dark.png `;

  return (
    <a href={link} className={`${styles.superproductItem} ${styles[className]}`}>
      
      <div 
        className={styles.textsuper}
      >
        <div className={styles.diplay__flex}>
          <Brand name={title.replace(/\s+/g, "")} size={34} />
          <h3 className={styles.productTitle}>{title}</h3>
        </div>
        {children} 
      </div>

      <div className={styles.img_row}>
        <img src={colorMode === 'dark' ? darkSrc : lightSrc} className={styles.imgfloat} alt="" srcset="" />
        
      </div>
  
    </a>
  )
}

export default function Products() {
  return (
    <div className={styles.products}>
        <div className="container">
            <h1>
                <Translate id="ownp.title">
                    Productos Own Tech
                </Translate>
              </h1>
            
        </div>
        <div className={`${styles.parent} container`}>

            <SuperItem title='Crestone' class="crestone" link="/docs/crestone/intro" >
              <p><Translate id="owno.crestone" /></p>
            </SuperItem>

          
            {FeatureList.map((item, idx) => (
                <ProductItem    
                    key={idx}
                    title={item.title}
                    description={item.description}
                    img={item.img}
                    class={item.class}
                    link={item.link}
                    />
            ))}

            <SuperItem title='Daiana' class="daiana" link="/docs/daiana/intro" >
              <p><Translate id="owno.daiana" /></p>
            </SuperItem>

        </div>
        
    </div>
  );
}