

import React from 'react';
import styles from './index.module.css';
import { Brand } from 'iconcaral2';
import { useColorMode } from '@docusaurus/theme-common';

type productsItems = {
  title: string;
  description: string;

  class: string;
};

const FeatureList: productsItems[] = [
    
    {
        title: 'Doxa',
        description: 'Doxa is an AI-powered survey platform that transforms feedback into actionable insights.',
       
        class: 'doxa',
    },
    {
        title: 'Harbinger',
        description: 'Harbinger anticipates business scenarios with predictive analytics and advanced forecasting.',
        class: 'har',
    },
    {
        title: 'Cloud Costing',
        description: 'Cloud Costing optimizes cloud expenses, providing transparency and control over resources..',
       
        class: 'cc',
    },{
        title: 'Feelings',
        description: 'Feelings analyzes sentiment and emotions in text, enhancing understanding of customer experiences.',
       
        class: 'feel',
    }
];

function ProductItem({title, description,  class: className}: productsItems) {
  const { colorMode } = useColorMode();
  const lightSrc = `img/index/${title.toLowerCase()}_ligth.png `;
  const darkSrc = `img/index/${title.toLowerCase()}_dark.png `;

  return (
    <div className={`${styles.productItem} ${styles[className]}`}>
      
      <div className="padding--md">
        <div className={styles.diplay__flex}>
          <Brand name={title.replace(/\s+/g, "")} size={34} />
          <h3 className={styles.productTitle}>{title}</h3>
        </div>
        <p className={styles.productDescription}>{description}</p>
      </div>
      <img src={colorMode === 'dark' ? darkSrc : lightSrc} className={styles.imgfloat} alt="" srcset="" />
    </div>
  );
}

function SuperItem({ title, children, class: className }: ProductsItems) {
  const { colorMode } = useColorMode();
  const lightSrc = `img/index/${title.toLowerCase()}_ligth.png `;
  const darkSrc = `img/index/${title.toLowerCase()}_dark.png `;

  return (
    <div className={`${styles.superproductItem} ${styles[className]}`}>
      <div 
        className="padding--md" 
        style={{
          width: '40%',
        }}
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
    </div>
  )
}

export default function Products() {
  return (
    <div className={styles.products}>
        <div className="container">
            <h1>Nuestros productos</h1>
        </div>
        <div className={`${styles.parent} container`}>

            <SuperItem title='Crestone' class="crestone" >
              <p>Crestone simplifies SAP data extraction, enabling seamless transfers to modern cloud platforms.</p>
            </SuperItem>

          
            {FeatureList.map((item, idx) => (
                <ProductItem    
                    key={idx}
                    title={item.title}
                    description={item.description}
                    img={item.img}
                    class={item.class} />
            ))}

            <SuperItem title='Daiana' class="daiana" >
              <p>Daiana is an AI assistant that automates workflows and improves knowledge-driven interactions.</p>
            </SuperItem>

        </div>
        
    </div>
  );
}