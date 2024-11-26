'use client';

import styles from './about.module.css';

export default function About() {
  return (
    <main className={styles.container}>
      <section className={styles.header}>
        <h1 className={styles.title}>About Me</h1>
        <h2 className={styles.subtitle}>Web Developer & Graphic Designer</h2>
      </section>

      <section className={styles.aboutSection}>
        <div className={styles.aboutContent}>
          <div className={styles.profileInfo}>
            <h2 className={styles.sectionTitle}>The Journey</h2>
            <p className={styles.bio}>
              As a passionate Web Developer and Graphic Designer, I bring a unique blend of technical expertise and creative vision to every project. My approach combines timeless design principles with modern technological innovations, creating digital experiences that exude sophistication and elegance.
            </p>
            <p className={styles.bio}>
              With years of dedicated experience in both web development and graphic design, I&apos;ve cultivated a deep understanding of how to create digital solutions that not only look beautiful but also deliver exceptional functionality and user experience.
            </p>
            <div className={styles.values}>
              <h3>Core Values</h3>
              <ul>
                <li>Attention to Detail</li>
                <li>Timeless Design</li>
                <li>Technical Excellence</li>
                <li>Creative Innovation</li>
              </ul>
            </div>
          </div>

          <div className={styles.expertise}>
            <h2 className={styles.sectionTitle}>Expertise</h2>
            <div className={styles.skillSet}>
              <div className={styles.skillCategory}>
                <h3>Development</h3>
                <ul>
                  <li>Modern JavaScript Frameworks</li>
                  <li>Responsive Web Design</li>
                  <li>Full-Stack Development</li>
                  <li>Performance Optimization</li>
                </ul>
              </div>
              <div className={styles.skillCategory}>
                <h3>Design</h3>
                <ul>
                  <li>UI/UX Design</li>
                  <li>Brand Identity Design</li>
                  <li>Typography</li>
                  <li>Visual Communication</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.philosophy}>
        <h2 className={styles.sectionTitle}>Design Philosophy</h2>
        <p className={styles.philosophyText}>
          I believe in creating digital experiences that stand the test of time. My work is characterized by clean aesthetics, thoughtful functionality, and an unwavering commitment to quality. Every project is an opportunity to craft something that not only meets immediate needs but continues to provide value and beauty for years to come.
        </p>
      </section>

      <section className={styles.connect}>
        <h2 className={styles.sectionTitle}>Let&apos;s Connect</h2>
        <p className={styles.connectText}>
          I&apos;m always interested in discussing new projects and opportunities for collaboration.
        </p>
        <div className={styles.social}>
          <a href="https://www.linkedin.com/in/sadia-batool-39ba982b5" className={styles.socialLink}>LinkedIn</a>
          <a href="https://github.com/sadia-batool" className={styles.socialLink}>GitHub</a>
          
        </div>
        <a href="/contact" className={styles.contactButton}>Get in Touch</a>
      </section>
    </main>
  );
}
