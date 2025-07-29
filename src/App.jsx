import { useState } from 'react';

// Components
import { Header } from './components/Header';
import { SideMenu } from './components/SideMenu';
import { Tasks } from './containers/Tasks';
import { Login } from './containers/Login';
import { Register } from './containers/Register';
import { Users } from './containers/Users';
import { EditUsers } from './containers/EditUser';

// Toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Routes
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';

// Hooks
import { UserProvider, useUser } from './hooks/userContext';

// Rota protegida para admin
const AdminRoute = ({ children }) => {
  const { userInfo: { user } } = useUser();

  if (!user || !user.admin) {
    return <Navigate to="/" replace />;
  }

  return children;
};

// Rota protegida para usuários logados
const PrivateRoute = ({ children }) => {
  const { userInfo: { user } } = useUser();

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return children;
};

function App() {
  const [selectedCompany, setSelectedCompany] = useState(null);
  const location = useLocation();

  const hideSideMenu = location.pathname === '/';

  return (
    <UserProvider>
      {!hideSideMenu && <Header onSelectCompany={setSelectedCompany} />}
      <div style={{ display: 'flex' }}>
        {!hideSideMenu && <SideMenu />}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/register"
            element={
              <AdminRoute>
                <Register />
              </AdminRoute>
            }
          />
          <Route
            path="/*"
            element={
              <PrivateRoute>
                <Tasks filterCompany={selectedCompany} />
              </PrivateRoute>
            }
          />
          <Route
            path="/users"
            element={
              <AdminRoute>
                <Users />
              </AdminRoute>
            }
          />
          <Route
            path="/edit-users"
            element={
              <AdminRoute>
                <EditUsers />
              </AdminRoute>
            }
          />
        </Routes>
      </div>
      <ToastContainer />
    </UserProvider>
  );
}

export default App;
