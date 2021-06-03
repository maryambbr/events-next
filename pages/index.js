import Layout from '../components/Layout';
import styles from '../styles/Layout.module.css';

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <h1>Home</h1>
      </div>
    </Layout>
  );
}
