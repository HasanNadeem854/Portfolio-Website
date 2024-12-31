// DataScienceProjects.jsx
import React from 'react';
import './DSP.css';

const DataScienceProjects = () => {
  const projects = [
    {
      title: 'Predictive Analytics on Sales Data',
      description: 'Developed a predictive model using machine learning algorithms to forecast sales trends based on historical data and seasonal patterns, resulting in a 20% increase in forecast accuracy.',
    },
    {
      title: 'Sentiment Analysis of Social Media Data',
      description: 'Utilized natural language processing techniques to analyze sentiments from Twitter data, providing insights into public opinion about various topics and brands.',
    },
    {
      title: 'Customer Segmentation for Marketing Campaigns',
      description: 'Implemented clustering techniques to segment customers based on purchasing behavior, enabling targeted marketing strategies that improved conversion rates by 15%.',
    },
    {
      title: 'Image Classification using Convolutional Neural Networks',
      description: 'Built a deep learning model to classify images with high accuracy. The model was trained on a large dataset and used for an application in automated quality inspection.',
    },
    {
      title: 'Real-time Anomaly Detection in Network Traffic',
      description: 'Designed a system for monitoring network traffic and identifying anomalies using unsupervised learning techniques, enhancing security protocols for the organization.',
    },
    {
      title: 'Interactive Data Visualization Dashboard',
      description: 'Created a dashboard using Python and Dash to visualize complex datasets, allowing stakeholders to interact with data insights and make data-driven decisions.',
    },
  ];

  return (
    <div className="data-science-projects page-content">
      <h2>Data Science Projects</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataScienceProjects;
