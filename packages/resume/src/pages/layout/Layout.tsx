import React, { PropsWithChildren } from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined, HomeOutlined, ProjectOutlined, BookOutlined } from '@ant-design/icons';
import { Link, Outlet, useLocation } from 'react-router-dom';
import css from './css/Layout.module.scss';
const { Header, Footer } = Layout;

const LayoutComponent: React.FC<PropsWithChildren> = () => {
  const location = useLocation();
  const defaultSelectedKeys = React.useMemo(() => {
    return [location.pathname || '/home']
  }, [location.pathname]);
  const [selectedKeys, setSelectedKeys] = React.useState<string[]>(defaultSelectedKeys);
  return (
    <Layout className={css.layout} style={{ minHeight: '100vh' }}>
      <Header style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%', display: 'flex', alignItems: 'center' }}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={defaultSelectedKeys}
          selectedKeys={selectedKeys}
          onClick={(e) => {
            setSelectedKeys([e.key]);
          }}
          items={[
            {
              key: '/home',
              icon: <HomeOutlined />,
              label: <Link to="/">首页</Link>,
            },
            {
              key: '/resume',
              icon: <UserOutlined />,
              label: <Link to="/resume">简历</Link>,
            },
            {
              key: '/project',
              icon: <ProjectOutlined />,
              label: <Link to="/project">私人项目</Link>,
            },
            {
              key: '/notebook',
              icon: <BookOutlined />,
              label: <Link to="/notebook">笔记</Link>,
            },
          ]}
        />
      </Header>
      <Outlet />
      <Footer style={{ textAlign: 'center' }} >
        个人博客 ©{new Date().getFullYear()} Created by hvgublyh
      </Footer>
    </Layout>
  );
};

export default LayoutComponent;
