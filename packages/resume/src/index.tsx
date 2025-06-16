import "./utils/rem";
import "antd/dist/reset.css";
import "./index.css";

import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
// import './assert/css/tailwind.css'
import { px2remTransformer, StyleProvider } from "@ant-design/cssinjs";
import { Provider } from "react-redux";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";

const Cv = lazy(() => import('./pages/cv/Cv'));
const Note = lazy(() => import('./pages/note/Note'));
const Project = lazy(() => import('./pages/project/Project'));

import { ThemeProvider } from "styled-components";

import NavigationOrigin from "./pages/demo/NavigationOrigin";
import NavigationTarget from "./pages/demo/NavigationTarget";
import SubPage from "./pages/demo/subpage/SubPage";
import Home from "./pages/home/Home";
import Layout from "./pages/layout/Layout";
import Loading from "./pages/main/loading";
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

// preload
function preloadRoutes() {
  requestIdleCallback(() => {
    void import('./pages/cv/Cv')
    void import('./pages/note/Note')
    void import('./pages/project/Project')
  });
}

preloadRoutes();

const root = createRoot(rootElement);
const theme = {
  colors: {
    background: '#333',
    text: '#fff',
    // 其他颜色属性
  },
  mode: 'dark' // 可以把当前模式作为属性
  // 其他主题相关属性
};
root.render(
    <StyleProvider transformers={[px2rem]}>
      <ThemeProvider theme={theme}>
      <StrictMode>
        <Provider store={store}>
          <HashRouter>
            <Suspense fallback={<Loading />} >
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
            </Suspense>
          </HashRouter>
        </Provider>
      </StrictMode>
      </ThemeProvider>
    </StyleProvider>
);


reportWebVitals();
