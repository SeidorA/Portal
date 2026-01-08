import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import Heroportal from '@site/src/components/indexitems/hero';
import Products from '@site/src/components/indexitems/products';
import Actin from '@site/src/components/indexitems/actin';
import { Brand } from 'iconcaral2';

import styles from './index.module.css';
import Translate, { translate } from '@docusaurus/Translate';


function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.banner}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Portal
        </Heading>
        <p className="hero__subtitle">
          <Translate id='banner.text'></Translate>
        </p>
        <div className={styles.buttons}>
        </div>
      </div>
    </header>
  );
}

type LinkProps = {
  link: string;
  title: string;
}

function documentationLink(link: string, title: string): ReactNode {
  return (
    <Link to={link} className={styles.docs}>
      <img src={`/img/index/Docs_${title}.png`} alt={title} />
      {title}
    </Link>
  );
}
const DocsList: LinkProps[] = [
  {
    title: 'Crestone',
    link: 'https://crestone-help.seidoranalytics.com/',
  }, {
    title: 'Daiana',
    link: 'https://daiana-help.seidoranalytics.com/',
  },

  {
    title: 'Harbinger',
    link: 'https://harbingerdocs.seidoranalytics.com/',
  }, {
    title: "Doxa",
    link: 'https://doxadocs.seidoranalytics.com/',
  }

];

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <Heroportal />

      <Products />
      <Actin />
      <HomepageHeader />
      <div className="container margin-top--lg margin-bottom--lg">
        <h2 ><Translate id='dox.text'></Translate></h2>
        <p><Translate id='dox.text.description'></Translate></p>
        <div className={styles.rowdocs}>
          {DocsList.map((props, idx) => (
            <div className={styles.docsrow} key={idx}>
              {documentationLink(props.link, props.title)}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
