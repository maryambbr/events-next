import Head from 'next/head';
import styles from '../styles/Layout.module.css';

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <div className={styles.container}>{children}</div>
    </div>
  );
}

Layout.defaultProps = {
  title: 'Events | Find Your Suitable Events',
  description: 'Find Your Suitable Events',
  keywords: 'events, sience, music, dj',
};
