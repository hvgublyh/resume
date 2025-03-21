import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './assert/css/tailwind.css'
import CV from './pages/cv/Cv'
import Page1 from './pages/demo/page1'
import Page2 from './pages/demo/page2'
import Page1A from './pages/demo/subpage/page1A';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/reset.css'; // Modern Ant Design import
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom"
import { Provider } from 'react-redux'
import { store } from './redux/store';

// Redirect component to ensure application starts with /resume path
const RedirectToResume = () => {
  useEffect(() => {
    // If we're at the root without the /resume prefix, redirect to /resume
    if (window.location.pathname === '/') {
      window.location.href = '/resume';
    }
  }, []);
  
  return null;
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RedirectToResume />
    <Provider store={store} >
      <BrowserRouter basename="resume">
        <Routes>
          <Route path="/cv" element={<CV />} />
          <Route path="/page1" element={<Page1 />} >
            <Route path="Page1A" element={<Page1A />} />
          </Route>
          <Route path="/page2" element={<Page2 />} />
          <Route path="/" element={<CV />} />
          {/* Add a catch-all redirect to handle any unmatched routes */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
