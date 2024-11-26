'use client';

import styles from './footer.module.css';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h2 className={styles.footerName}>Sadia Batool</h2>
          <p className={styles.footerTagline}>Web Developer & Graphic Designer</p>
        </div>

        <div className={styles.footerSection}>
          <h3 className={styles.footerHeading}>Navigation</h3>
          <div className={styles.footerNav}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/skills">Skills</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        <div className={styles.footerSection}>
          <h3 className={styles.footerHeading}>Connect</h3>
          <div className={styles.socialLinks}>
            <a href="https://www.linkedin.com/in/sadia-batool-39ba982b5" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/sadia-batool" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="mailto:eshaalZahrah5@gmail.com">Email</a>
          </div>
        </div>

        <div className={styles.footerSection}>
          <h3 className={styles.footerHeading}>Services</h3>
          <div className={styles.footerNav}>
            <span>Web Development</span>
            <span>UI/UX Design</span>
            <span>Brand Identity</span>
            <span>Digital Design</span>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p className={styles.copyright}>© 2024 All Rights Reserved</p>
        <p className={styles.signature}>Crafted with elegance by Sadia Batool</p>
      </div>
    </footer>
  );
}
