import React from 'react';
import { Layout, Card, Row, Col, Typography, Button } from 'antd';
import { UserOutlined,  ProjectOutlined, BookOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import css from './css/Home.module.scss';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const Home: React.FC = () => {
  return (
    <Content style={{ padding: '0 50px', marginTop: 20 }} className={css.home}>
      <div className="site-layout-content" style={{ padding: 24, minHeight: 380 }}>
        <Title level={2}>个人博客</Title>
        <Paragraph>
          欢迎访问我的个人博客！在这里，您可以了解我的职业经历、技术能力和项目成果。
        </Paragraph>

        <Row gutter={[16, 16]} style={{ marginTop: 30 }}>
          <Col xs={24} sm={8}>
            <Card
              title="我的简历"
              hoverable
              cover={<div style={{ height: 140, background: '#f0f2f5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><UserOutlined style={{ fontSize: 64 }} /></div>}
            >
              <Card.Meta description="查看我的专业简历和职业技能" />
              <Button type="primary" style={{ marginTop: 16 }}>
                <Link to="/resume">查看简历</Link>
              </Button>
            </Card>
          </Col>
          <Col xs={24} sm={8}>
            <Card
              title="私人项目"
              hoverable
              cover={<div style={{ height: 140, background: '#f0f2f5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><ProjectOutlined style={{ fontSize: 64 }} /></div>}
            >
              <Card.Meta description="了解我的私人项目" />
              <Button type="primary" style={{ marginTop: 16 }}>
                <Link to="/project">查看项目</Link>
              </Button>
            </Card>
          </Col>
          <Col xs={24} sm={8}>
            <Card
              title="笔记"
              hoverable
              cover={<div style={{ height: 140, background: '#f0f2f5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><BookOutlined style={{ fontSize: 64 }} /></div>}
            >
              <Card.Meta description="好记性不如烂笔头" />
              <Button type="primary" style={{ marginTop: 16 }}>
                <Link to="/notebook">查看笔记</Link>
              </Button>
            </Card>
          </Col>
        </Row>
      </div>
    </Content>
  );
};

export default Home;
