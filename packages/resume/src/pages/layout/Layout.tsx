import {
  BookOutlined,
  HomeOutlined,
  ProjectOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { useState, useMemo } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

import css from "./css/Layout.module.scss";
const { Footer, Header } = Layout;

function LayoutComponent() {
  const location = useLocation();
  const defaultSelectedKeys = useMemo(() => {
    let path = location.pathname.split("/")[1];
    path = path === "" ? "/home" : `/${path}`;
    return [path];
  }, [location.pathname]);

  const [selectedKeys, setSelectedKeys] =
    useState<string[]>(defaultSelectedKeys);
    
  return (
    <Layout className={css.layout} style={{ minHeight: "100vh" }}>
      <Header
        style={{
          alignItems: "center",
          display: "flex",
          position: "sticky",
          top: 0,
          width: "100%",
          zIndex: 1,
        }}
      >
        <div className="logo" />
        <Menu
          defaultSelectedKeys={defaultSelectedKeys}
          items={[
            {
              icon: <HomeOutlined />,
              key: "/home",
              label: <Link to="/home">首页</Link>,
            },
            {
              icon: <UserOutlined />,
              key: "/resume",
              label: <Link to="/resume">简历</Link>,
            },
            {
              icon: <ProjectOutlined />,
              key: "/project",
              label: <Link to="/project">个人项目</Link>,
            },
            {
              icon: <BookOutlined />,
              key: "/notebook",
              label: <Link to="/notebook">个人笔记</Link>,
            },
          ]}
          mode="horizontal"
          onClick={(event) => {
            setSelectedKeys([event.key]);
          }}
          selectedKeys={selectedKeys}
          theme="dark"
        />
      </Header>
      <Outlet />
      <Footer style={{ textAlign: "center" }}>
        个人博客 ©{new Date().getFullYear()} Created by hvgublyh
      </Footer>
    </Layout>
  );
};

export default LayoutComponent;
