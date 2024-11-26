'use client';

import styles from './contact.module.css';

export default function Contact() {
  return (
    <main className={styles.container}>
      <section className={styles.header}>
        <h1 className={styles.title}>Contact</h1>
        <h2 className={styles.subtitle}>Let&apos;s Create Something Extraordinary</h2>
      </section>

      <section className={styles.contactSection}>
        <div className={styles.contactGrid}>
          <div className={styles.contactInfo}>
            <h3>Get in Touch</h3>
            <p>
              I&apos;m always interested in discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <br />
            <div className={styles.infoDetails}>
              <div className={styles.infoItem}>
            
              </div>
              <div className={styles.infoItem}>
                <h4>Email</h4>
                <p>eshaalZahrah5@gmail.com</p>
                <br />
              </div>
              <div className={styles.infoItem}>
                <h4>Social</h4>
                <div className={styles.socialLinks}>
                  <a href="https://www.linkedin.com/in/sadia-batool-39ba982b5" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  <br />
                  <a href="https://github.com/sadia-batool" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.contactForm}>
            <h3>Send a Message</h3>
            <form>
              <div className={styles.formGroup}>
                <label htmlFor="name"></label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  placeholder="Your Name"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  placeholder="Your Email"
                />
              </div>

            

              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  required 
                  placeholder="Your Message"
                  rows={6}
                ></textarea>
              </div>

              <button type="submit" className={styles.submitButton}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
