'use client';

import styles from './skills.module.css';

export default function Skills() {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Technical Proficiencies</h1>
        <p className={styles.subtitle}>Mastering the Art of Digital Creation</p>
      </header>

      <section className={styles.skillsSection}>
        <div className={styles.skillCategory}>
          <h2 className={styles.categoryTitle}>Web Development</h2>
          <div className={styles.skillsGrid}>
            <div className={styles.skillCard}>
              <h3>Frontend Development</h3>
              <ul>
                <li>React.js & Next.js</li>
                <li>TypeScript</li>
                <li>HTML5 & CSS3</li>
                <li>JavaScript (ES6+)</li>
                <li>Responsive Design</li>
              </ul>
            </div>

            <div className={styles.skillCard}>
              <h3>Backend Development</h3>
              <ul>
                <li>Node.js</li>
                <li>RESTful APIs</li>
                <li>Database Management</li>
                <li>Server Architecture</li>
              </ul>
            </div>

            <div className={styles.skillCard}>
              <h3>Development Tools</h3>
              <ul>
                <li>Git & Version Control</li>
                <li>Webpack</li>
                <li>npm/yarn</li>
                <li>Command Line</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.skillCategory}>
          <h2 className={styles.categoryTitle}>Graphic Design</h2>
          <div className={styles.skillsGrid}>
            <div className={styles.skillCard}>
              <h3>Design Software</h3>
              <ul>
                <li>Adobe Photoshop</li>
                <li>Adobe Illustrator</li>
                <li>Adobe InDesign</li>
                <li>Figma</li>
              </ul>
            </div>

            <div className={styles.skillCard}>
              <h3>Design Expertise</h3>
              <ul>
                <li>Brand Identity Design</li>
                <li>Typography</li>
                <li>Color Theory</li>
                <li>Layout Design</li>
              </ul>
            </div>

            <div className={styles.skillCard}>
              <h3>Visual Elements</h3>
              <ul>
                <li>Logo Design</li>
                <li>UI/UX Design</li>
                <li>Digital Illustration</li>
                <li>Motion Graphics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.specialization}>
        <h2 className={styles.sectionTitle}>Areas of Specialization</h2>
        <div className={styles.specializationGrid}>
          <div className={styles.specializationCard}>
            <h3>Modern Web Applications</h3>
            <p>Creating sophisticated, performant web applications with cutting-edge technologies</p>
          </div>
          <div className={styles.specializationCard}>
            <h3>Responsive Design</h3>
            <p>Crafting fluid, adaptive interfaces that provide exceptional user experiences across all devices</p>
          </div>
          <div className={styles.specializationCard}>
            <h3>Brand Development</h3>
            <p>Developing cohesive visual identities that communicate brand values with elegance</p>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <h2 className={styles.sectionTitle}>Let&apos;s Create Together</h2>
        <p className={styles.ctaText}>
          I bring a unique blend of technical expertise and creative vision to every project.
          Whether you&apos;re looking to establish a distinguished digital presence or elevate your existing platform,
          I&apos;m here to transform your vision into reality.
        </p>
        <a href="/contact" className={styles.ctaButton}>Discuss Your Project</a>
      </section>
    </main>
  );
}
