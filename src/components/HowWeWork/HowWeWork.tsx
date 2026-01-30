import React from 'react';
import Image from 'next/image';
import styles from './HowWeWork.module.css';

const HowWeWork = () => {
    const processSteps = [
        {
            title: "Clarity First",
            description: "We define goals, constraints, and success metrics together."
        },
        {
            title: "Designed Strategy",
            description: "We identify what must be true for success and focus on the few strategies that matter."
        },
        {
            title: "Disciplined Execution",
            description: "Phased delivery, continuous feedback, and transparent communication."
        },
        {
            title: "Sustainable Scale",
            description: "Systems, teams, and processes designed to outlive the engagement. This approach has been shaped by work in highly regulated and mission-critical environments — including national digital systems — where failure is not an option and longevity matters."
        }
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.leftContent}>
                    <div className={styles.imageBox}>
                        <Image
                            src="/TeleSoftasLagos-139 1.png"
                            alt="Team working together"
                            fill
                            className={styles.featuredImage}
                        />
                    </div>

                    <h2 className={styles.title}>How we work</h2>
                    <span className={styles.label}>Purpose</span>

                    <div className={styles.mainDescription}>
                        <p>Operationalise the brand promise.</p>
                        <p>Being the best partner for growth requires more than capability. It requires clarity, discipline, and shared responsibility. Our approach ensures growth is not accidental, but engineered.</p>
                    </div>
                </div>

                <div className={styles.rightContent}>
                    <div className={styles.stepsBox}>
                        {processSteps.map((step, index) => (
                            <React.Fragment key={index}>
                                <div className={styles.step}>
                                    <h3 className={styles.stepTitle}>{step.title}</h3>
                                    <p className={styles.stepDescription}>{step.description}</p>
                                </div>
                                {index < processSteps.length - 1 && <div className={styles.divider}></div>}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowWeWork;
