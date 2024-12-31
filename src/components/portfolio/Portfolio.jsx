import React from 'react';
import './Portfolio.css';
import ds01 from '../../assets/ds01.PNG';
import ds02 from '../../assets/ds02.PNG';
import ds03 from '../../assets/ds03.PNG';
import ds04 from '../../assets/ds04.PNG';
import ds05 from '../../assets/ds05.PNG';
import ds06 from '../../assets/ds06.PNG';
import ecommerceSalesDashboard from '../../assets/ECOMMERCE SALES DASHBOARD POWER BI.png';
import financialBudgetTracker from '../../assets/financial budget tracker for etsy template.jpeg';
import googleAnalyticsDashboard from '../../assets/Google analytics Dashboard.png';
import googleSheetsDashboard from '../../assets/google sheets dashboard for music school.png';
import bigQuerySql from '../../assets/BigQuery===Sql.png';
import customerAnalysisPowerBi from '../../assets/customer analysis power bi.png';


const Portfolio = () => {
  // Data Analysis Projects
  const dataAnalysisProjects = [
    {
      title: 'Sales Data Analysis for E-commerce',
      description: 'Analyzed large sales datasets for an e-commerce platform to identify trends and optimize marketing strategies using Python and SQL.',
      imageUrl: ecommerceSalesDashboard, // Use imported image variable
      githubLink: 'https://github.com/yourgithub/sales-data-analysis',
    },
    {
      title: 'Customer Segmentation Analysis',
      description: 'Performed customer segmentation using clustering algorithms (K-means) to help a retail company personalize marketing campaigns.',
      imageUrl: customerAnalysisPowerBi,
      githubLink: 'https://github.com/yourgithub/customer-segmentation',
    },
    {
      title: 'Financial Performance Dashboard',
      description: 'Created an interactive financial dashboard using Power BI to provide real-time insights on revenue, profit, and expenses for a client.',
      imageUrl: financialBudgetTracker,
      githubLink: 'https://github.com/yourgithub/financial-dashboard',
    },
  ];

  // Data Engineering Projects
  const dataEngineeringProjects = [
    {
      title: 'Data Pipeline for E-commerce',
      description: 'Designed and implemented a scalable data pipeline using Apache Kafka big query, and Python to process and analyze e-commerce transaction data in real-time.',
      imageUrl: bigQuerySql, // Use imported image variable
      githubLink: 'https://github.com/yourgithub/data-pipeline-ecommerce',
    },
    {
      title: 'ETL Pipeline for CRM Data',
      description: 'Developed an ETL (Extract, Transform, Load) pipeline using Apache Airflow to automate data extraction and integration from CRM systems into a Google sheet',
      imageUrl: googleSheetsDashboard,
      githubLink: 'https://github.com/yourgithub/crm-etl-pipeline',
    },
    {
      title: 'Data Warehouse Design for Analytics',
      description: 'Designed a data warehouse using AWS Redshift to centralize business data, enabling more efficient analytics and reporting for an enterprise for analytics pupose.',
      imageUrl: googleAnalyticsDashboard,
      githubLink: 'https://github.com/yourgithub/data-warehouse-analytics',
    },
  ];

  const webProjects = [
    {
      title: 'E-commerce Website',
      description: 'Developed a full-stack e-commerce platform (for food-chain) using MERN stack, featuring user authentication, product management, and payment integration.',
      imageUrl: ds01, // Use imported image variable
      githubLink: 'https://github.com/kakawait/hugo-tranquilpeak-theme',
    },
    {
      title: 'Portfolio Website',
      description: 'Created a responsive portfolio website showcasing my projects and skills using React and Tailwind CSS, enhancing my online presence.',
      imageUrl: ds02,
      githubLink: 'https://github.com/kakawait/hugo-tranquilpeak-theme',
    },
    {
      title: 'Real-time Chess Application',
      description: 'Built a chess application with real-time updates using Socket.io and Node.js, enabling users to communicate seamlessly.',
      imageUrl: ds03,
      githubLink: 'https://github.com/kakawait/hugo-tranquilpeak-theme',
    },
  ];

  const mobileProjects = [
    {
      title: 'Fitness Tracker App',
      description: 'Developed a mobile application that tracks fitness activities and nutrition using Appsheet, integrating with health APIs for accurate data.',
      imageUrl: ds04,
      githubLink: 'https://github.com/kakawait/hugo-tranquilpeak-theme',
    },
    {
      title: 'Customer Relation Management App',
      description: 'Created an app to help users plan their trips by providing suggestions for destinations, accommodations, and itineraries using Appsheet.',
      imageUrl: ds05,
      githubLink: 'https://github.com/kakawait/hugo-tranquilpeak-theme',
    },
    {
      title: 'Kanban App',
      description: 'Built a mobile task management application allowing users to create, update, and delete tasks, implemented with a clean UI using Appsheet.',
      imageUrl: ds06,
      githubLink: 'https://github.com/kakawait/hugo-tranquilpeak-theme',
    },
  ];

  const renderProject = (project) => (
    <li key={project.title} className="project-card">
      <img src={project.imageUrl} alt={project.title} className="project-image" />
      <div className="project-details">
        <h4>{project.title}</h4>
        <p>{project.description}</p>
        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
          View on GitHub
        </a>
      </div>
    </li>
  );

  return (
    <div className="portfolio page-content">
      <h2>Portfolio</h2>

      <h3>Data Engineering Projects</h3>
      <ul className="project-list">
        {dataEngineeringProjects.map(renderProject)}
      </ul>
      <h3>Data Analysis Projects</h3>
      <ul className="project-list">
        {dataAnalysisProjects.map(renderProject)}
      </ul>

      <h3>Web Projects</h3>
      <ul className="project-list">
        {webProjects.map(renderProject)}
      </ul>

      <h3>Mobile Projects</h3>
      <ul className="project-list">
        {mobileProjects.map(renderProject)}
      </ul>
    </div>
  );
};

export default Portfolio;
