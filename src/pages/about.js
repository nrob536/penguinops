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
    title: 'Kaitātari Hoahoa — Design Analyst',
    company: 'Tautauranga Aotearoa - Stats NZ',
    period: 'February2023 - Present',
    description: 'Technical lead for national data science initiatives, focusing on health and wellbeing data to support decision-making and policy.',
    achievements: [
      'Maintainer and developer of two data portals: Ngā Tūtohu Aotearoa – Indicators Aotearoa New Zealand and the COVID-19 Data Portal.',
      'Stats NZ Shinyapps.io administrator, overseeing and troubleshooting over 200 Rshiny apps.',
      'Statistics NZ GitHub administrator, managing all private and public repositories published by Stats NZ.',
    ],
  },
  {
    title: 'Climate Database Technician',
    company: 'National Institute of Water and Atmospheric Research (formerly, NIWA)',
    period: 'February 2021- April 2022',
    description: 'Managed and enhanced climate data systems, ensuring high-quality data delivery for research and commercial use.',
    achievements: [
      'Created and R-shiny app to explore the catalogue of weather stations plus their associated error logs, and daily data upload status.',
      'Improved daily quality control procedures for the network of manual observer weather stations in New Zealand.',
      'Delivered Climate data services for more than 10 commercial contracts.',
    ],
  },
  {
    title: 'Molecular Biologist (Part-time)',
    company: 'National Institute of Water and Atmospheric Research (formerly, NIWA)',
    period: 'February 2021- April 2022',
    description: 'Conducted genetic sequencing and analysis to support biodiversity and ecological research projects.',
    achievements: [
      'Acquired experience working in a biocontainment laboratory analyzing genetic data for research projects.',
      'Produced hundreds of genetic sequences for the biodiversity programme on marine algae',
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