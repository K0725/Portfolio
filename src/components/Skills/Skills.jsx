import React from 'react';
import Image from 'next/image';
import { Skills } from '../constants/index';
import Link from 'next/link';
import styles from './Skills.module.css';

export default function Skills() {
    return (
        <>
            {Skills.map((skill) => (
                <div key={skill.name} className={`${styles.skill} relative inline-block transition-all cursor-pointer group`}>
                    {skill.certificate ? (
                        <Link href={skill.certificate} target='_blank' rel={`noopener noreferrer`}>
                            <Image
                                className={`${styles.skillImage} object-contain h-[50px] transition duration-300 ease-in-out border border-gray-500 ${skill.certificate ? styles.hoverBg : ''} rounded-md w-[50px] xl:w-[100px] xl:h-[100px] filter grayscale-0 group-hover:grayscale md:w-28 md:h-28 sm:h-20 sm:w-20`}
                                src={skill.image} alt={`${skill.name} skill badge`} width={200} height={200}
                            />
                        </Link>
                    ) : (
                        <Image
                            className={`${styles.skillImage} object-contain h-[50px] transition duration-300 ease-in-out border border-gray-500 rounded-md w-[50px] xl:w-[100px] xl:h-[100px] filter grayscale-0 group-hover:grayscale md:w-28 md:h-28 sm:h-20 sm:w-20`}
                            src={skill.image} alt={`${skill.name} skill badge`} width={200} height={200}
                        />
                    )}
                </div>
            ))}
        </>
    );
}