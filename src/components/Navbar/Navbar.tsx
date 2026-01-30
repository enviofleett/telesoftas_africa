"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMobileMenuOpen]);

    const dropdownLinks = [
        { href: "/what-we-do", label: "What We Do" },
        { href: "/partnerships", label: "Partnerships" },
        { href: "/how-we-work", label: "How We Work" },
        { href: "/events-ecosystem", label: "Events & Ecosystem" },
        { href: "/growth-labs", label: "Growth Labs" },
    ];

    const mainLinks = [
        { href: "/", label: "Home" },
        { href: "/insights", label: "Insights" },
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" },
        { href: "/proof", label: "Proof" },
    ];

    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    return (
        <nav className={styles.navbar}>
            <div className={styles.glassContainer}>
                <div className={styles.logoContainer}>
                    <Link href="/">
                        <img
                            src="/png 2.svg"
                            alt="TeleSoftas Logo"
                            className={styles.logoImage}
                        />
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className={styles.navLinks}>
                    <Link href="/" className={styles.link}>Home</Link>
                    <Link href="/insights" className={styles.link}>Insights</Link>
                    <Link href="/about" className={styles.link}>About</Link>
                    <Link href="/contact" className={styles.link}>Contact</Link>
                    <Link href="/proof" className={styles.link}>Proof</Link>
                </div>

                <div className={styles.dropdownWrapper} ref={dropdownRef}>
                    <button
                        className={styles.exploreBtn}
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                        Explore Telesoftas
                        <svg
                            className={`${styles.chevron} ${isDropdownOpen ? styles.chevronUp : ''}`}
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </button>

                    {isDropdownOpen && (
                        <div className={styles.dropdown}>
                            {dropdownLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={styles.dropdownLink}
                                    onClick={() => setIsDropdownOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>

                {/* Mobile Hamburger Button */}
                <button
                    className={styles.hamburger}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle mobile menu"
                >
                    <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.hamburgerLineOpen1 : ''}`}></span>
                    <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.hamburgerLineOpen2 : ''}`}></span>
                    <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.hamburgerLineOpen3 : ''}`}></span>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`${styles.mobileMenuOverlay} ${isMobileMenuOpen ? styles.mobileMenuOverlayOpen : ''}`} onClick={closeMobileMenu}></div>

            {/* Mobile Menu */}
            <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
                <div className={styles.mobileMenuContent}>
                    <div className={styles.mobileMenuSection}>
                        <span className={styles.mobileMenuLabel}>Navigation</span>
                        {mainLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={styles.mobileMenuLink}
                                onClick={closeMobileMenu}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                    <div className={styles.mobileMenuSection}>
                        <span className={styles.mobileMenuLabel}>Explore Telesoftas</span>
                        {dropdownLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={styles.mobileMenuLink}
                                onClick={closeMobileMenu}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}
