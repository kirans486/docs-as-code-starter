
import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const features = [
  {
    title: 'API Management',
    text: 'Register, configure and publish APIs through a centralized platform.',
  },
  {
    title: 'Security and Access',
    text: 'Generate API tokens, manage permissions and secure API access.',
  },
  {
    title: 'Analytics and Monitoring',
    text: 'Monitor API traffic, track errors and analyze usage patterns.',
  },
];

export default function Home() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description="APIConnect product documentation"
    >
      <header className={clsx('hero', styles.hero)}>
        <div className="container">
          <h1 className={styles.heroTitle}>
            {siteConfig.title}
          </h1>

          <p className={styles.heroSubtitle}>
            {siteConfig.tagline}
          </p>

          <p>
            Your guide to API management, security and integration.
          </p>

          <Link
            className="button button--lg"
            style={{
              background: 'var(--acme-accent)',
              color: '#1f1740',
            }}
            to="/docs/intro"
          >
            Start reading
          </Link>
        </div>
      </header>

      <main className="container">
        <section className={styles.features}>
          {features.map((feature) => (
            <div key={feature.title} className={styles.card}>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </div>
          ))}
        </section>
      </main>
    </Layout>
  );
}
