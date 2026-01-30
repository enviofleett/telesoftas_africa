import React from 'react';
import styles from './DigitalBackbone.module.css';

const DigitalBackbone = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.pillTitleContainer}>
                    <div className={styles.pillTitle}>
                        From Europe&apos;s Digital Backbone to Africa&apos;s Growth Frontier
                    </div>
                </div>
                <p className={styles.description}>
                    For over two decades, Helmes has supported the design and delivery of critical digital infrastructure
                    across Europe and globally — including contributions to the systems that power Estonia&apos;s internationally
                    recognised digital society. This experience has shaped how we think about scale, security, governance,
                    and long-term impact. Through Telesoftas Nigeria, we are bringing that same discipline and capability to
                    Africa — partnering with organizations that want to build not just for today, but for decades.
                </p>
            </div>
        </section>
    );
};

export default DigitalBackbone;
