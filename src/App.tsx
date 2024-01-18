import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { HomePage } from './pages/HomePage/HomePage';

export const App = () => {
  const defaultPath = '/';
  return (
    <Router>
      <Routes>
        <Route path={defaultPath} element={<HomePage />} />
      </Routes>
    </Router>
  );
};
