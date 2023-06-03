import styles from './layout.module.css';
import '../src/styles/index.css'


export default function Layout({ children }) {
    return <div className={styles.container}>{children}</div>;
  }