import React from 'react';
import Layout from '@theme/Layout';
import styles from './work.module.css';

const projects = [
  {
    title: 'Customer Churn Prediction System',
    period: '2024',
    status: 'Current',
    technologies: ['Python', 'Scikit-learn', 'XGBoost', 'Docker', 'FastAPI'],
    description: 'Developed an end-to-end machine learning system to predict customer churn with 92% accuracy.',
    highlights: [
      'Built ensemble model combining Random Forest and XGBoost',
      'Deployed API serving 10,000+ predictions daily',
      'Reduced customer churn by 18% through early intervention',
      'Implemented real-time model monitoring and drift detection',
    ],
    links: [
      { label: 'GitHub', url: 'https://github.com/username/project' },
      { label: 'Demo', url: 'https://demo.example.com' },
    ],
  },
  {
    title: 'Real-time Anomaly Detection Dashboard',
    period: '2023',
    status: 'Completed',
    technologies: ['Python', 'TensorFlow', 'Docker', 'Grafana', 'PostgreSQL'],
    description: 'Created a real-time anomaly detection system for monitoring server metrics.',
    highlights: [
      'Implemented LSTM-based autoencoder for anomaly detection',
      'Processed 1M+ data points per hour',
      'Built interactive visualization dashboard',
      'Achieved 95% detection accuracy with low false positive rate',
    ],
    links: [
      { label: 'GitHub', url: 'https://github.com/username/project' },
    ],
  },
  {
    title: 'NLP-Powered Content Recommendation Engine',
    period: '2023',
    status: 'Completed',
    technologies: ['Python', 'PyTorch', 'BERT', 'Redis', 'AWS'],
    description: 'Built a content recommendation system using natural language processing.',
    highlights: [
      'Fine-tuned BERT model for semantic understanding',
      'Improved user engagement by 35%',
      'Implemented efficient caching with Redis',
      'Deployed on AWS with auto-scaling',
    ],
    links: [
      { label: 'GitHub', url: 'https://github.com/username/project' },
      { label: 'Case Study', url: 'https://example.com/case-study' },
    ],
  },
  {
    title: 'Time Series Forecasting for Supply Chain',
    period: '2022',
    status: 'Completed',
    technologies: ['R', 'Prophet', 'Shiny', 'Docker'],
    description: 'Developed forecasting models to optimize inventory management.',
    highlights: [
      'Created multiple forecasting models (ARIMA, Prophet, LSTM)',
      'Reduced inventory costs by 22%',
      'Built interactive Shiny dashboard for stakeholders',
      'Automated weekly forecasting pipeline',
    ],
    links: [
      { label: 'GitHub', url: 'https://github.com/username/project' },
    ],
  },
  {
    title: 'Image Classification Pipeline',
    period: '2022',
    status: 'Completed',
    technologies: ['Python', 'TensorFlow', 'Kubernetes', 'MLflow'],
    description: 'Built a scalable image classification system for quality control.',
    highlights: [
      'Trained custom CNN achieving 98% accuracy',
      'Deployed on Kubernetes for scalability',
      'Implemented ML experiment tracking with MLflow',
      'Processing 50,000+ images daily',
    ],
    links: [
      { label: 'GitHub', url: 'https://github.com/username/project' },
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