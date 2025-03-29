import React from 'react';
import { Card, Row, Col, Typography, Tag } from 'antd';
import { GithubOutlined, GlobalOutlined } from '@ant-design/icons';
import styles from './css/Project.module.scss';
import projects from '@/assert/ts/project';

const { Title, Paragraph } = Typography;



const Project: React.FC = () => {
  return (
    <div className={styles.project}>

      {projects.map((project) => (
        <Card key={project.id} className={styles.projectCard}>
          <Row gutter={16}>
            <Col xs={24} md={24}>
              <Title level={3}>{project.name}</Title>

              <div style={{ marginBottom: 16 }}>
                {project.repoUrl && (
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className={styles.linkIcon}>
                    <GithubOutlined /> 源代码
                  </a>
                )}
                {project.demoUrl && (
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className={styles.linkIcon}>
                    <GlobalOutlined /> 在线演示
                  </a>
                )}
              </div>

              <Paragraph>{project.description}</Paragraph>

              <div>
                <Title level={4}>功能特点</Title>
                <div>
                  {project.features.map((feature, index) => (
                    <Tag key={index} color="blue" className={styles.featureTag}>{feature}</Tag>
                  ))}
                </div>
              </div>

              <div style={{ marginTop: 16 }}>
                <Title level={4}>成就</Title>
                <ul>
                  {project.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </Col>
          </Row>
        </Card>
      ))}
    </div>
  );
};

export default Project;
