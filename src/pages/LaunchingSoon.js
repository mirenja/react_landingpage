import React from 'react';
import Layout from '../../components/layout';
import styles from '../pages/LaunchingSoon.module.css'

export default function LaunchingSoon(){
    return(
        <>
        <Layout>
            <div className= {styles.mainContent}>
                <div className={styles.imageArea}>
                    <div className={styles.backgroundImage}> </div>
                </div>
                <div className={styles.contentArea}>
                    <div className={styles.textContainer}>
                        <div className={styles.contentColumn}>
                            <div className={styles.contentRectangle}></div>
                        </div>
                        <div className={styles.contentColumn}>
                            <h1 className={styles.textRow}>TRAIL</h1>
                            <h1 className={styles.textRow}>BLAZERS</h1>
                            <h4>Launching Soon</h4>
                            <div className={styles.paragraphContainer}>
                                <p>
                                    The MONTRAIL Trailblazers series sheds light on the stories of modern-day trailblazers in various fields who have left a lasting positive impact on the world through their remarkable achievements.
                                </p>
                                <p className={styles.paragraphContainerLower}>
                                    Our video biographies offer a captivating and engaging depiction of the journeys of these inspiring individuals in a unique documentary style format; showcasing not only their triumphs but also giving insights into the obstacles and wealth of experiences these trailblazers have acquired over the years in order to create the impactful contributions we see today.
                                </p>
                            </div>
     
                        </div>  


              

                    </div>
                </div>

    
            </div>
        </Layout>   
        </>
    );
}

