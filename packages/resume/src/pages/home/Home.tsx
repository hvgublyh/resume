import { BookOutlined, ProjectOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Card, Col, Layout, Row, Typography } from 'antd';
import { Link } from 'react-router-dom';

import css from './css/Home.module.scss';

const { Content } = Layout;
const { Paragraph, Title } = Typography;

const gutter_cards = 16;
function Home() {
  return (
    <Content className={css.home} style={{ marginTop: 20, padding: '0 50px' }}>
      <div className="site-layout-content" style={{ minHeight: 380, padding: 24 }}>
        <Title level={2}>个人博客</Title>
        <Paragraph>
          欢迎访问我的个人博客！在这里，您可以了解我的职业经历、技术能力和项目成果。
        </Paragraph>

        <Row gutter={[gutter_cards, gutter_cards]} style={{ marginTop: 30 }}>
          <Col sm={8} xs={24}>
            <Card
              cover={<div style={{ alignItems: 'center', background: '#f0f2f5', display: 'flex', height: 140, justifyContent: 'center' }}><UserOutlined style={{ fontSize: 64 }} /></div>}
              hoverable
              title="我的简历"
            >
              <Card.Meta description="查看我的专业简历和职业技能" />
              <Button style={{ marginTop: 16 }} type="primary">
                <Link to="/resume">查看简历</Link>
              </Button>
            </Card>
          </Col>
          <Col sm={8} xs={24}>
            <Card
              cover={<div style={{ alignItems: 'center', background: '#f0f2f5', display: 'flex', height: 140, justifyContent: 'center' }}><ProjectOutlined style={{ fontSize: 64 }} /></div>}
              hoverable
              title="个人项目"
            >
              <Card.Meta description="了解我的个人项目" />
              <Button style={{ marginTop: 16 }} type="primary">
                <Link to="/project">查看项目</Link>
              </Button>
            </Card>
          </Col>
          <Col sm={8} xs={24}>
            <Card
              cover={<div style={{ alignItems: 'center', background: '#f0f2f5', display: 'flex', height: 140, justifyContent: 'center' }}><BookOutlined style={{ fontSize: 64 }} /></div>}
              hoverable
              title="个人笔记"
            >
              <Card.Meta description="好记性不如烂笔头" />
              <Button style={{ marginTop: 16 }} type="primary">
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
