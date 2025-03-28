import React, { PropsWithChildren } from 'react';
import { Layout, Menu, Card, Row, Col, Typography, Button } from 'antd';
import { UserOutlined, HistoryOutlined, CodeOutlined, HomeOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import css from './css/Layout.module.scss';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

const LayoutComponent: React.FC<PropsWithChildren> = ({ children }) => {
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
              label: <Link to="/resume">简历</Link>,
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
      {children}
      <Footer style={{ textAlign: 'center' }}>
        个人博客 ©{new Date().getFullYear()} Created by hvgublyh
      </Footer>
    </Layout>
  );
};

export default LayoutComponent;
