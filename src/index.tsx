import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './assert/css/tailwind.css'
import CV from './pages/cv/Cv'
import Page1 from './pages/demo/page1'
import Page2 from './pages/demo/page2'
import Page1A from './pages/demo/subpage/page1A';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.css';
import { Route, Routes, BrowserRouter } from "react-router-dom"
import { Provider } from 'react-redux'
import { store } from './redux/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store} >
      <BrowserRouter basename="resume" >
        <Routes>
          <Route path="/cv" element={<CV />} >
          </Route>
          <Route path="/page1" element={<Page1 />} >
            <Route path="Page1A" element={<Page1A />} >
            </Route>
          </Route>
          <Route path="/page2" element={<Page2 />} >
          </Route>
          <Route path="/" element={<CV />} >
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
