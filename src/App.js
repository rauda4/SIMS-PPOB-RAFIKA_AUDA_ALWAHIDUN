import { Route, Routes } from 'react-router-dom';
import AuthRoutes from './routes/AuthRoutes';
import LandingPageRoutes from './routes/LandingPageRoutes';

function App() {
  return (
    <Routes>
      <Route
        path='/*'
        element={<LandingPageRoutes />}
      />
      <Route
        path='/auth/*'
        element={<AuthRoutes />}
      />
    </Routes>
  );
}

export default App;
