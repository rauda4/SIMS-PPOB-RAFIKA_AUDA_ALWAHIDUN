import { useEffect, useState } from 'react';
import AuthRoutes from './routes/AuthRoutes';
import LandingPageRoutes from './routes/LandingPageRoutes';

function App() {
  const token = localStorage.getItem('token');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    if (token) {
      setIsAuthenticated(true);
    }
  }, [token]);
  return <>{isAuthenticated ? <LandingPageRoutes /> : <AuthRoutes />}</>;
}

export default App;
