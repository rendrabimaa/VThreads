import { Route, Routes } from 'react-router-dom';
import Modal from 'react-modal';
import RegisterPage from './pages/auth/RegisterPage';
import LoginPage from './pages/auth/LoginPage';
import ProtectedRoute from './layouts/ProtectedRoute';
import MainPage from './pages';
import DetailThread from './pages/DetailThread';

function App() {
  Modal.setAppElement('#root');
  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute />}>
        <Route exact path="" element={<MainPage />} />
        <Route path="thread/:id" element={<DetailThread />} />
      </Route>
      <Route path="/auth/login" element={<LoginPage />} />
      <Route path="/auth/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
