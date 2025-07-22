

import styles from './index.module.css';

type productsItems = {
  title: string;
  description: string;
img: string;
  class: string;
};

const FeatureList: productsItems[] = [
    {
        title: 'Caral',
        description: 'Caral is a platform that allows you to create and manage your own online store with ease.',
        img: 'img/blur1.png',
        class: 'crestone',
    },
    {
        title: 'Caral2',
        description: 'Caral2 is the next generation of Caral, offering enhanced features and better performance.',
        img: 'img/blur1.png',
        class: 'doxa',
    },
    {
        title: 'Caral3',
        description: 'Caral3 brings even more capabilities, including advanced analytics and AI-driven recommendations.',
        img: 'img/blur1.png',
        class: 'har',
    },
    {
        title: 'Caral4',
        description: 'Caral4 is the latest version, focusing on scalability and integration with third-party services.',
        img: 'img/blur1.png',
        class: 'cc',
    },{
        title: 'Caral5',
        description: 'Caral5 introduces a new user interface and improved user experience for your online store.',
        img: 'img/blur1.png',
        class: 'feel',
    },{
        title: 'Caral6',
        description: 'Caral6 enhances security features and provides better support for mobile devices.',
        img: 'img/blur1.png',
        class: 'daiana',
    }
];

function ProductItem({title, description, img, class: className}: productsItems) {
  return (
    <div className={`${styles.productItem} ${styles[className]}`}>
      
      <h3 className={styles.productTitle}>{title}</h3>
      <p className={styles.productDescription}>{description}</p>
    </div>
  );
}

export default function Products() {
  return (
    <div className={styles.products}>
        <div className="container">
            <h1>Nuestros productos</h1>
        </div>
        <div className={`${styles.parent} container`}>
            {FeatureList.map((item, idx) => (
                <ProductItem    
                    key={idx}
                    title={item.title}
                    description={item.description}
                    img={item.img}
                    class={item.class} />
            ))}

        </div>
    </div>
  );
}