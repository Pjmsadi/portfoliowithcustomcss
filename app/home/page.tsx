'use client';

import { useEffect } from 'react';
import styles from './home.module.css';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Image from 'next/image';

export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight * 0.75;
        if (isVisible) {
          element.classList.add(styles.visible);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className={styles.main}>
      <Navbar />
      
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={`${styles.heroTitle} animate-on-scroll`}>
            Sadia Batool
          </h1>
          <p className={`${styles.heroSubtitle} animate-on-scroll`}>
            Web Developer & Graphic Designer
          </p>
          <p className={`${styles.heroText} animate-on-scroll`}>
            Crafting elegant digital experiences with timeless sophistication
          </p>
          <a href="/contact" className={`${styles.ctaButton} animate-on-scroll`}>
            Let&apos;s Collaborate
          </a>
        </div>
      </section>

      <section className={styles.services}>
        <h2 className={`${styles.sectionTitle} animate-on-scroll`}>Services</h2>
        <div className={styles.serviceGrid}>
          <div className={`${styles.serviceCard} animate-on-scroll`}>
            <h3>Web Development</h3>
            <p>Creating responsive and performant websites with modern technologies</p>
          </div>
          <div className={`${styles.serviceCard} animate-on-scroll`}>
            <h3>UI/UX Design</h3>
            <p>Designing intuitive and beautiful user interfaces and experiences</p>
          </div>
          <div className={`${styles.serviceCard} animate-on-scroll`}>
            <h3>Brand Identity</h3>
            <p>Developing cohesive and memorable brand identities</p>
          </div>
          <div className={`${styles.serviceCard} animate-on-scroll`}>
            <h3>Digital Design</h3>
            <p>Creating stunning visual assets for digital platforms</p>
          </div>
        </div>
      </section>

      <section className={styles.featured}>
        <h2 className={`${styles.sectionTitle} animate-on-scroll`}>Featured Work</h2>
        <div className={styles.projectGrid}>
          <div className={`${styles.projectCard} animate-on-scroll`}>
            <div className={styles.projectImage}>
              <Image
                src="/3.jpg"
                alt="Luxury Brand Website Preview"
                width={350}
                height={300}
                objectFit="cover"
              />
            </div>
            <h3>Luxury Brand Website</h3>
            <p>Web Development, UI/UX Design</p>
          </div>
          <div className={`${styles.projectCard} animate-on-scroll`}>
            <div className={styles.projectImage}>
              <Image 
                src="/2.jpg"
                alt="E-commerce Platform Preview"
                width={335}
                height={300}
                objectFit="cover"
              />
            </div>
            <h3>E-commerce Platform</h3>
            <p>Full-stack Development, Brand Identity</p>
          </div>
          <div className={`${styles.projectCard} animate-on-scroll`}>
            <div className={styles.projectImage}>
              <Image
                src="/1.jpg" 
                alt="Corporate Identity Preview"
                width={335}
                height={300}
                objectFit="cover"
              />
            </div>
            <h3>Corporate Identity</h3>
            <p>Brand Design, Digital Assets</p>
          </div>
        </div>
      </section>

      <section className={styles.testimonials}>
        <h2 className={`${styles.sectionTitle} animate-on-scroll`}>Client Testimonials</h2>
        <div className={styles.testimonialGrid}>
          <blockquote className={`${styles.testimonialCard} animate-on-scroll`}>
            &ldquo;Sadia&apos;s attention to detail and professional approach made our project a complete success.&rdquo;
            <cite>- Sarah Johnson, CEO</cite>
          </blockquote>
          <blockquote className={`${styles.testimonialCard} animate-on-scroll`}>
            &ldquo;Working with Sadia was a pleasure. She brought our vision to life beautifully.&rdquo;
            <cite>- Michael Chen, Creative Director</cite>
          </blockquote>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
