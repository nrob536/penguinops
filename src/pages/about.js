import React from 'react';
import Layout from '@theme/Layout';
import styles from './about.module.css';

const skills = {
  primary: [
    { name: 'Python', icon: '🐍' },
    { name: 'R', icon: '📊' },
    { name: 'SQL', icon: '🗄️' },
    { name: 'JavaScript', icon: '⚡' },
    { name: 'Deep Learning', icon: '🧠' },
    { name: 'Data Visualization', icon: '📈' },
  ],
  secondary: [
    { name: 'Git', icon: '📝' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Machine Learning', icon: '🤖' },
    { name: 'Proxmox', icon: '💻' },
    { name: 'Linux', icon: '🐧' }
  ],
};

const experience = [
  {
    title: 'Senior Data Scientist',
    company: 'Company Name',
    period: '2022 - Present',
    description: 'Leading data science initiatives and building ML models for production.',
    achievements: [
      'Developed predictive models improving accuracy by 25%',
      'Led team of 3 data scientists',
      'Deployed 5+ models to production',
    ],
  },
  {
    title: 'Data Scientist',
    company: 'Previous Company',
    period: '2020 - 2022',
    description: 'Built and deployed machine learning solutions.',
    achievements: [
      'Created automated reporting dashboards',
      'Reduced processing time by 40%',
      'Collaborated with cross-functional teams',
    ],
  },
];

const education = [
  {
    degree: 'Master of Data Science',
    institution: 'University Name',
    period: '2018 - 2020',
    description: 'Specialized in Machine Learning and Statistical Analysis',
  },
  {
    degree: 'Bachelor of Computer Science',
    institution: 'University Name',
    period: '2014 - 2018',
    description: 'Focus on Software Engineering and Algorithms',
  },
];

export default function About() {
  return (
    <Layout title="About" description="About page">
      <div className={styles.aboutContainer}>
        <div className="container">
          <section className={styles.section}>
            <h1>About Me</h1>
            <div className={styles.introduction}>
              <p>
                I'm a passionate Data Scientist with a strong foundation in statistical analysis, 
                machine learning, and data engineering. My journey in data science began with 
                curiosity about patterns in data and has evolved into a career focused on 
                extracting actionable insights from complex datasets.
              </p>
              <p>
                I specialize in building end-to-end machine learning pipelines, from data 
                collection and preprocessing to model deployment and monitoring. My approach 
                combines technical rigor with business acumen to deliver solutions that create 
                real value.
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <h2>Work Experience</h2>
            <div className={styles.timeline}>
              {experience.map((job, index) => (
                <div key={index} className={styles.timelineItem}>
                  <div className={styles.timelineMarker}></div>
                  <div className={styles.timelineContent}>
                    <h3>{job.title}</h3>
                    <p className={styles.company}>{job.company}</p>
                    <p className={styles.period}>{job.period}</p>
                    <p className={styles.description}>{job.description}</p>
                    <ul className={styles.achievements}>
                      {job.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.section}>
            <h2>Education</h2>
            <div className={styles.educationGrid}>
              {education.map((edu, index) => (
                <div key={index} className={styles.educationCard}>
                  <h3>{edu.degree}</h3>
                  <p className={styles.institution}>{edu.institution}</p>
                  <p className={styles.period}>{edu.period}</p>
                  <p className={styles.description}>{edu.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.section}>
            <h2>Skills</h2>
            
            <div className={styles.skillsSection}>
              <h3>Primary Skills</h3>
              <div className={styles.skillsGrid}>
                {skills.primary.map((skill, index) => (
                  <div key={index} className={styles.skillCard}>
                    <span className={styles.skillIcon}>{skill.icon}</span>
                    <span className={styles.skillName}>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.skillsSection}>
              <h3>Secondary Skills</h3>
              <div className={styles.skillsGrid}>
                {skills.secondary.map((skill, index) => (
                  <div key={index} className={styles.skillCard}>
                    <span className={styles.skillIcon}>{skill.icon}</span>
                    <span className={styles.skillName}>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}