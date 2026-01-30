"use client";

import { useState } from "react";
import styles from "./ShowcaseImage.module.css";

export default function ShowcaseImage() {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoId = "xi3kFHXZr94";

    return (
        <section className={styles.section}>
            <div className={styles.videoWrapper}>
                {!isPlaying ? (
                    <button
                        className={styles.thumbnailButton}
                        onClick={() => setIsPlaying(true)}
                        aria-label="Play video"
                    >
                        {/* YouTube thumbnail */}
                        <img
                            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                            alt="Video thumbnail"
                            className={styles.thumbnail}
                            loading="lazy"
                        />
                        {/* Play button overlay */}
                        <div className={styles.playButton}>
                            <svg viewBox="0 0 68 48" className={styles.playIcon}>
                                <path
                                    d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
                                    fill="#f00"
                                />
                                <path d="M 45,24 27,14 27,34" fill="#fff" />
                            </svg>
                        </div>
                    </button>
                ) : (
                    <iframe
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                        title="YouTube video"
                        className={styles.iframe}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="lazy"
                    />
                )}
            </div>
        </section>
    );
}
