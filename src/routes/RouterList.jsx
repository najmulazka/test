import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from '../components/pages/LandingPage.jsx';
import Por from '../components/pages/Por.jsx';

export const RouterList = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/por" element={<Por />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterList;
