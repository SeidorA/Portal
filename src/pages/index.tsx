import type {ReactNode} from 'react';
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
import Translate, {translate} from '@docusaurus/Translate';


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
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

function documentationLink( link: string, title: string ): ReactNode {
  return (
    <Link
      className="docs_list"
      to={link}>
      <div className="box">
        <Brand name={title}  size={40}/>
      </div>
      {title}
    </Link>
  );
}
const DocsList: LinkProps[] = [
  {
    title: 'Crestone',
    link: 'https://crestone-help.seidoranalytics.com/',
  },{
    title: 'Daiana',
    link: 'http://daiana.seidoranalytics.com:3030/es/home',
  },
  {
    title: 'Doxa',
    link: 'https://doxa-help.seidoranalytics.com/',
  }
  
];

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <Heroportal />

      <Products />
      <Actin />
      <HomepageHeader />
      <div className="container margin-top--lg margin-bottom--lg">
        <div className="row">
          <div className="col col--3">
            <h1><Translate id='dox.text'></Translate></h1>
          </div>
          {DocsList.map((props, idx) => (
            <div className="col col--3" key={idx}>
              {documentationLink(props.link, props.title)}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
