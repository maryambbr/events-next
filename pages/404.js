import { FaExclamationTriangle } from 'react-icons/fa';
import Link from 'next/link';
import Layout from '@/components/Layout';
import styles from '@/styles/404.module.css';

export default function NotFoundPage() {
  return (
    <Layout>
      <div className={styles.error}>
        <h1>
          <FaExclamationTriangle /> 404
        </h1>
        <h4>Sorry Somthing Went Wrong</h4>
        <Link href="/">Go Back To The Home Page</Link>
      </div>
    </Layout>
  );
}
