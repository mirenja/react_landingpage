import React from 'react';
import Link from 'next/link';
import styles from './SectionButton.module.css';

// props= targetSectionName,targetSectionId
export default function SectionButton({targetSectionName,targetSectionId}){

    return (
    <div>
        <Link href={`#${targetSectionId}`}>
        <button  className={`text-white font-thin  ${styles.scrollButton}`}>
        {targetSectionName}
        </button> 
        </Link>
    </div>
    );

}