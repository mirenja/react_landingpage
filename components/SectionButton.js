import React from 'react';
import Link from 'next/link';

// props= targetSectionName,targetSectionId
export default function SectionButton({targetSectionName,targetSectionId}){

    return (
    <div>
        <Link href={`#${targetSectionId}`}>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        {targetSectionName}
        </button>
        </Link>
    </div>
    );

}