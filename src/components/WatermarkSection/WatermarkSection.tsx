import React from 'react';
import styles from './WatermarkSection.module.css';

const WatermarkSection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.textContainer}>
                <span className={styles.watermarkText}>Telesoftas</span>
            </div>
        </section>
    );
};

export default WatermarkSection;
