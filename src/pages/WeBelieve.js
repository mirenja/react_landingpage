import React from 'react';
import Layout from '../../components/layout';
import styles from'./WeBelieve.module.css';

export default function WeBelieve(){
    return(
        <>
            <Layout>
                <div className={styles.grid}>
                    <div className={styles.headerContent}>
                        <h4>WHAT WE BELIEVE</h4>
                    </div>
                    <div className={styles.bodyParagraphsContainer}>
                        <p>
                        As human beings, our journeys are often intertwined. It’s usually through the inspiration we draw from the lives of others that we are moved to act and believe that we too can make a difference in the world.
                        </p>
                        <p>
                         At our core, we strive to showcase individuals who are transforming industries, positively impacting communities or significantly contributing to environmental preservation. We firmly believe that every person has the potential to be a trailblazer, to leave a positive mark on the world and inspire others to do the same.
                        </p>
                    </div>
                    <div className={styles.bodyimagesContainer}>
                        <h1>OUR</h1>
                        <h1>RAISON</h1>
                        <h1>D’ETRE</h1>
                    
                    </div>
                    <div><p>THIS IS ONGOING!!!</p></div>
                </div>
               
            </Layout>
        </>
    );
}