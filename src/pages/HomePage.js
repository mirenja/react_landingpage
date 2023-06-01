
import Link from 'next/link';
import Layout from '../../components/layout';
import styles from './HomePage.module.css';
import Image from 'next/image';


export default function HomePage(){
    return (
        <>
            <Layout>
            <section className={styles.grid}>
            <div classname= {styles.heroImage}>
            <Image
                src="/images/hero1.png"
                alt="hero image"
                fill
                style={styles.backgroundImage}
            />
            <div className={styles.logo}>
            <Image
                src="/images/MONTRAIL BRAND-03 1.png"
                alt="logo"
                width="200"
                height="100"
                style={styles.logo}
            />
            <h4>STORIES OF INSPIRATION AND INNOVATION</h4>

            </div>
            </div>
            <div className={styles.nav}>

            </div>
            </section>
            
            </Layout>
        </>
    );
}