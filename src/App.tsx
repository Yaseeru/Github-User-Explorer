import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const Profile = lazy(() => import('./pages/Profile'));

function App() {
  return (
    <div className="container mx-auto p-4">
      <Suspense fallback={<p className="text-center">Loading page...</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:username" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
