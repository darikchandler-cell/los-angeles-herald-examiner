import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router';
import Home from './pages/Home';
import ArticlePage from './pages/ArticlePage';
import SearchPage from './pages/SearchPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:id" element={<ArticlePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}
