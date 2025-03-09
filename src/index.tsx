import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './assert/css/tailwind.css'
import CV from './pages/cv/Cv'
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
