'use client';

import { useState, useEffect } from 'react';
import styles from './navbar.module.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContainer}>
        <div className={styles.navBrand}>
          <a href="/" className={styles.brandName}>Sadia Batool</a>
          <span className={styles.brandTitle}>Web Developer & Designer</span>
        </div>

        <div className={styles.navLinks}>
          <a href="/" className={styles.navLink}>Home</a>
          <a href="/about" className={styles.navLink}>About</a>
          <a href="/skills" className={styles.navLink}>Skills</a>
          <a href="/contact" className={styles.navLink}>Contact</a>
        </div>
      </div>
    </nav>
  );
}

