//React
import { useState, useEffect } from 'react'

//Components
import { Header } from './components/Header'
import { SideMenu } from './components/SideMenu'
import { Tasks } from './containers/Tasks'
import { Login } from './containers/Login'
import { Register } from './containers/Register'

//Toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Routes
import { Routes, Route, useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function App() {
  const [selectedCompany, setSelectedCompany] = useState(null);
  const location = useLocation();

  const hideSideMenu = location.pathname === '/' || location.pathname === '/register';


  const navigate = useNavigate();


  useEffect(() => {
    if (!hideSideMenu) {
        const user = JSON.parse(localStorage.getItem("user"));
        if (!user) {
            navigate("/");
        }
    }
}, [hideSideMenu, navigate]);
    return (
      <>
        {!hideSideMenu && <Header onSelectCompany={setSelectedCompany} />}
        <div style={{ display: 'flex' }}>
          {!hideSideMenu && <SideMenu />}
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/*" element={<Tasks filterCompany={selectedCompany} />} />
          </Routes>
        </div>
        <ToastContainer />
      </>
    )
  }
  export default App
