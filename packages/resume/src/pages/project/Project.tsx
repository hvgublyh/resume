import projects from '@/assert/ts/project';
import { GithubOutlined, GlobalOutlined } from '@ant-design/icons';
import { Card, Col, Row, Tag, Typography } from 'antd';

import styles from './css/Project.module.scss';

const { Paragraph, Title } = Typography;



function Project()  {
  return (
    <div className={styles.project}>

      {projects.map((project) => (
        <Card className={styles.projectCard} key={project.id}>
          <Row gutter={16}>
            <Col md={24} xs={24}>
              <Title level={3}>{project.name}</Title>

              <div style={{ marginBottom: 16 }}>
                {project.repoUrl ? <a className={styles.linkIcon} href={project.repoUrl} rel="noopener noreferrer" target="_blank">
                    <GithubOutlined /> 源代码
                  </a> : undefined}
                {project.demoUrl ? <a className={styles.linkIcon} href={project.demoUrl} rel="noopener noreferrer" target="_blank">
                    <GlobalOutlined /> 在线演示
                  </a> : undefined}
              </div>

              <Paragraph>{project.description}</Paragraph>

              <div>
                <Title level={4}>功能特点</Title>
                <div>
                  {project.features.map((feature) => (
                    <Tag className={styles.featureTag} color="blue" key={feature}>{feature}</Tag>
                  ))}
                </div>
              </div>

              <div style={{ marginTop: 16 }}>
                <Title level={4}>成就</Title>
                <ul>
                  {project.achievements.map((achievement) => (
                    <li key={achievement}>{achievement}</li>
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
