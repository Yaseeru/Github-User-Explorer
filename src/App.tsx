import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
// import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="container mx-auto p-4">
      <Routes>
        {/* Home page */}
        <Route path="/" element={<Home />} />

        {/* Profile page (dynamic username) */}
        <Route path="/:username" element={<Profile />} />

        {/* Catch-all 404 */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;
