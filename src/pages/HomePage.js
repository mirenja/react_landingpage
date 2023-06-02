
import Link from 'next/link';
import Layout from '../../components/layout'
import styles from './HomePage.module.css';
import Image from 'next/image';
import SectionButton from '../../components/SectionButton';
import LaunchingSoon from './LaunchingSoon';


export default function HomePage(){
    return (
        <>
            <Layout>
            <section className={styles.grid}>
                <div className= {styles.heroImage}>
                    <div >
                        <Image
                            src="/images/MONTRAIL BRAND-03 1.png"
                            alt="logo"
                            width="450"
                            height="200"
                            style={styles.logo}
                            priority
                        />
                    </div>
                    <div className= {styles.tagLine}><p>STORIES OF INSPIRATION AND INNOVATION</p></div>
                       
                </div>
                {/* could i use a for loop to make this more concise? */}
                <div className={styles.nav}>
                    <SectionButton targetSectionName="LAUNCHING SOON" targetSectionId="launching-soon"/>
                </div>
            </section>
            
            </Layout>
            <section id='launching-soon'>
                <LaunchingSoon />
            </section>
            
        </>
    );
}

