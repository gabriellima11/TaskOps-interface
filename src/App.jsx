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

// Rotas protegidas
const AdminRoute = ({ children }) => {
  const { userInfo: { user } } = useUser();
  if (!user?.admin) {
    return <Navigate to="/task" replace />;
  }
  return children;
};

const PrivateRoute = ({ children }) => {
  const { userInfo: { user }, loading } = useUser();

  if (loading) {
    return <div>Carregando...</div>; // pode colocar um spinner
  }

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return children;
};


function AppContent() {
  const [selectedCompany, setSelectedCompany] = useState(null);
  const location = useLocation();

  const hideSideMenu = location.pathname === '/';

  return (
    <>
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
                <PrivateRoute><Tasks filterCompany={selectedCompany} /></PrivateRoute>
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
    </>
  );
}

function App() {
  return (
    <UserProvider>
      <AppContent />
    </UserProvider>
  );
}

export default App;
