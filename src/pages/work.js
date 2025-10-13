import React from 'react';
import Layout from '@theme/Layout';
import styles from './work.module.css';

const projects = [
  {
    title: 'Git learning environment',
    period: 'Agust 2024',
    status: 'Current',
    technologies: ['Git', 'shell scripting', 'R'],
    description: 'Developed an repository to test Git skills through a series of unsupervised challenges, from beginner to expert levels. Each task is set within a magical fantasy world.',
    highlights: [
      'Created immersive storylines and characters for each challenge',
      'Designed a variety of Git tasks covering branching, merging, rebasing, and conflict resolution',
      'Implemented automated feedback and hints for learners',
      'Open-sourced the project to encourage community contributions and improvements',
    ],
    links: [
      { label: 'GitHub', url: 'https://github.com/nrob536/git-fantasy-quest'},
    ],
  },
  {
    title: 'Predicting macroalgal introductions at a global and regional scales: trends and methods',
    period: 'Dec 2015 - Nov 2019',
    status: 'Completed',
    technologies: ['LaTex', 'R', 'Git', 'Machine Learning', 'GIS'],
    description: 'Doctoral thesis focused on predicting the introduction and spread of invasive macroalgal species using machine learning techniques and spatial analysis.',
    highlights: [
      'Developed predictive models using Random Forests and MaxEnt to identify potential invasion hotspots',
      'Analyzed large datasets of environmental and biological variables to understand factors driving invasions',
      'Published findings in peer-reviewed journals and presented at international conferences',
      'Contributed to open-source tools for ecological modeling and data visualization',
    ],
    links: [
      { label: 'GitHub', url: 'https://github.com/nrob536/doctoral-thesis' },
    ],
  },
  {
    title: 'Interactive Population Clock - Demo',
    period: 'September 2025',
    status: 'Current',
    technologies: ['R plumber', 'REST API', 'Docker', 'Cloud deployment', 'JavaScript', 'HTML', 'CSS'],
    description: 'Interactive Population Clock built with Plumber R package and deployed with Docker',
    highlights: [
      'Implemented REST API for real-time population data',
      'Containerized application using Docker for easy deployment',
      'Deployed on cloud infrastructure (Render.com) for scalability',
      'Developed interactive front-end using JavaScript, HTML, and CSS',
    ],
    links: [
      { label: 'GitHub', url: 'https://github.com/nrob536/popclock-api' },
      { label: 'live demo', url: 'https://nrob536.github.io/popclock-api/' },
    ],
  },
];

function ProjectCard({ project }) {
  return (
    <div className={styles.projectCard}>
      <div className={styles.projectHeader}>
        <div>
          <h3>{project.title}</h3>
          <div className={styles.projectMeta}>
            <span className={styles.period}>{project.period}</span>
            <span className={`${styles.status} ${styles[project.status.toLowerCase()]}`}>
              {project.status}
            </span>
          </div>
        </div>
      </div>
      
      <p className={styles.description}>{project.description}</p>
      
      <div className={styles.technologies}>
        {project.technologies.map((tech, index) => (
          <span key={index} className={styles.techBadge}>
            {tech}
          </span>
        ))}
      </div>
      
      <div className={styles.highlights}>
        <h4>Key Highlights:</h4>
        <ul>
          {project.highlights.map((highlight, index) => (
            <li key={index}>{highlight}</li>
          ))}
        </ul>
      </div>
      
      {project.links && project.links.length > 0 && (
        <div className={styles.projectLinks}>
          {project.links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectLink}
            >
              {link.label} →
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Work() {
  return (
    <Layout title="Work" description="My Projects">
      <div className={styles.workContainer}>
        <div className="container">
          <section className={styles.header}>
            <h1>My Work</h1>
            <p className={styles.subtitle}>
              A showcase of data science projects I've built, from machine learning models 
              to production systems. Each project demonstrates my approach to solving 
              real-world problems with data.
            </p>
          </section>
          
          <section className={styles.projectsSection}>
            <div className={styles.projectsGrid}>
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}