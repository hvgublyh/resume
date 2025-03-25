import React from 'react';
import { Layout, Menu, Card, Row, Col, Typography, Button } from 'antd';
import { UserOutlined, HistoryOutlined, CodeOutlined, HomeOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import css from './css/Home.module.scss';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

const Home: React.FC = () => {
  return (
    <Layout className={css.layout} style={{ minHeight: '100vh' }}>
      <Header style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%', display: 'flex', alignItems: 'center' }}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['home']}
          items={[
            {
              key: 'home',
              icon: <HomeOutlined />,
              label: '首页',
            },
            {
              key: 'resume',
              icon: <UserOutlined />,
              label: <Link to="/cv">简历</Link>,
            },
            {
              key: 'experience',
              icon: <HistoryOutlined />,
              label: <Link to="#">个人经历</Link>,
            },
            {
              key: 'tech',
              icon: <CodeOutlined />,
              label: <Link to="#">技术栈</Link>,
            },
          ]}
        />
      </Header>
      <Content style={{ padding: '0 50px', marginTop: 20 }}>
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
                  <Link to="/cv">查看简历</Link>
                </Button>
              </Card>
            </Col>
            <Col xs={24} sm={8}>
              <Card
                title="个人经历"
                hoverable
                cover={<div style={{ height: 140, background: '#f0f2f5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><HistoryOutlined style={{ fontSize: 64 }} /></div>}
              >
                <Card.Meta description="了解我的工作经历和项目案例" />
                <Button type="primary" style={{ marginTop: 16 }}>
                  <Link to="#">查看经历</Link>
                </Button>
              </Card>
            </Col>
            <Col xs={24} sm={8}>
              <Card
                title="技术栈"
                hoverable
                cover={<div style={{ height: 140, background: '#f0f2f5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><CodeOutlined style={{ fontSize: 64 }} /></div>}
              >
                <Card.Meta description="我掌握的技术和开发工具" />
                <Button type="primary" style={{ marginTop: 16 }}>
                  <Link to="#">查看技术</Link>
                </Button>
              </Card>
            </Col>
          </Row>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        个人博客 ©{new Date().getFullYear()} Created with React & Ant Design
      </Footer>
    </Layout>
  );
};

export default Home;
