import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const features = [
  {
    number: '01',
    title: 'Manage your APIs',
    text: 'Register APIs, configure endpoints and publish them through a centralized catalog.',
    link: '/docs/user-guides/register-api',
    linkText: 'Register an API',
  },
  {
    number: '02',
    title: 'Secure API access',
    text: 'Generate access tokens, configure permissions and control application access.',
    link: '/docs/user-guides/create-api-token',
    linkText: 'Create an API token',
  },
  {
    number: '03',
    title: 'Consume APIs',
    text: 'Send authenticated requests, review responses and troubleshoot common errors.',
    link: '/docs/user-guides/make-api-request',
    linkText: 'Make an API request',
  },
];

export default function Home() {
  return (
    <Layout
      title="APIConnect"
      description="Documentation for API management, security and integration."
    >
      <main className={styles.home}>
        <section className={styles.hero}>
          <div className={clsx('container', styles.heroContent)}>
            <span className={styles.eyebrow}>API MANAGEMENT PLATFORM</span>
            <h1>Build. Secure. Manage APIs.</h1>
            <p>
              Everything you need to register, protect and consume APIs
              through one centralized platform.
            </p>
            <div className={styles.heroActions}>
              <Link className="button button--primary button--lg" to="/docs/getting-started/quick-start">
                Get started
              </Link>
              <Link className={styles.secondaryLink} to="/docs/getting-started/architecture">
                Explore the architecture →
              </Link>
            </div>
          </div>
        </section>

        <section className={clsx('container', styles.section)}>
          <div className={styles.sectionHeading}>
            <span className={styles.eyebrow}>EXPLORE APICONNECT</span>
            <h2>Everything starts with an API.</h2>
            <p>Choose a task and follow the steps to get started.</p>
          </div>

          <div className={styles.featureGrid}>
            {features.map((feature) => (
              <article className={styles.featureCard} key={feature.number}>
                <span className={styles.featureNumber}>{feature.number}</span>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
                <Link to={feature.link}>{feature.linkText} →</Link>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.workflow}>
          <div className={clsx('container', styles.workflowInner)}>
            <div className={styles.workflowIntro}>
              <span className={styles.eyebrow}>A SIMPLE WORKFLOW</span>
              <h2>From registration to your first API request.</h2>
              <p>
                Follow these three steps to understand the basic APIConnect
                workflow.
              </p>
              <Link to="/docs/getting-started/quick-start">
                Follow the Quick Start guide →
              </Link>
            </div>

            <div className={styles.steps}>
              <div className={styles.step}>
                <span>01</span>
                <div>
                  <h3>Register</h3>
                  <p>Add your API to the API catalog.</p>
                </div>
              </div>
              <div className={styles.step}>
                <span>02</span>
                <div>
                  <h3>Secure</h3>
                  <p>Generate a token and configure access.</p>
                </div>
              </div>
              <div className={styles.step}>
                <span>03</span>
                <div>
                  <h3>Consume</h3>
                  <p>Send a request and review the response.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={clsx('container', styles.bottomSection)}>
          <div>
            <span className={styles.eyebrow}>NEED MORE INFORMATION?</span>
            <h2>Explore the APIConnect documentation.</h2>
            <p>Learn about the platform, its architecture and product updates.</p>
          </div>
         <Link
             className="button button--primary"
            to="/docs/getting-started/intro"
          >
          Browse documentation
          </Link>
        </section>
      </main>
    </Layout>
  );
}
