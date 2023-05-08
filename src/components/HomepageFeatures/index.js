import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'OUR MISSION',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        The Interledger Foundation is a non-profit advocate for the web, promoting innovation, creativity, and inclusion by advancing open payment standards and technologies that seamlessly connect our global society.
      </>
    ),
  },
  {
    title: 'Focus Areas',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Shaping a more equitable web that is open to all relies on prioritizing systems and ideals to work together to advance our collective society. The following are areas in which we are prioritizing our influence.
      </>
    ),
  },
  {
    title: 'Financial Inclusion',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Financial inclusion means that any individual has equal access to the same financial services and products that allow them to participate in making and receiving payments. We are building equitable pathways to financial access, fueling inclusive growth across the world.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
