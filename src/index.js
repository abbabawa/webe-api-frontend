import React from 'react';
import ReactDOM from 'react-dom';
import './css/style.css';
import './bootstrap/css/bootstrap.min.css';
import Login from './components/Login';
import reportWebVitals from './reportWebVitals';
import { Container, Row } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import WeGallery from './pages/WeGallery';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Container fluid className="">
        <Row className=''>
          <Routes>                    
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/gallery" element={<WeGallery />} />
          </Routes>
        </Row>
      </Container>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
