import "./utils/rem";
import "antd/dist/reset.css";
import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import './assert/css/tailwind.css'
import { px2remTransformer, StyleProvider } from "@ant-design/cssinjs";
import { Provider } from "react-redux";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";

import Cv from "./pages/cv/Cv";
import NavigationOrigin from "./pages/demo/NavigationOrigin";
import NavigationTarget from "./pages/demo/NavigationTarget";
import SubPage from "./pages/demo/subpage/SubPage";
import Home from "./pages/home/Home";
import Layout from "./pages/layout/Layout";
import Note from "./pages/note/Note";
import Project from "./pages/project/Project";
import { store } from "./redux/store";
import reportWebVitals from "./reportWebVitals";
const px2rem = px2remTransformer({
  rootValue: 16, // 32px = 1rem; @default 16
});

// Redirect component to ensure application starts with /resume path
const rootElement = document.querySelector("#root");
if (!rootElement) {
  throw new Error("Root element not found");
}
const root = createRoot(rootElement);
root.render(
  <StyleProvider transformers={[px2rem]}>
    <StrictMode>
      <Provider store={store}>
        <HashRouter>
          <Routes>
            <Route element={<Cv />} path="/resume" />
            <Route element={<NavigationOrigin />} path="/origin">
              <Route element={<SubPage />} path="subPage" />
            </Route>
            <Route element={<NavigationTarget />} path="/target" />
            <Route element={<Layout />} path="/">
              <Route element={<Home />} path="home" />
              <Route element={<Project />} path="project" />
              <Route element={<Note />} path="notebook" />
              {/* Redirect from root to /home */}
              <Route element={<Navigate replace to="/home" />} path="/" />
              <Route element={<Navigate replace to="/home" />} path="*" />
            </Route>
            {/* Add a catch-all redirect to handle any unmatched routes */}
            <Route element={<Navigate replace to="/" />} path="*" />
          </Routes>
        </HashRouter>
      </Provider>
    </StrictMode>
  </StyleProvider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
