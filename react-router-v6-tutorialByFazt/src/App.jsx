

import { BrowserRouter, Route, Routes,Navigate } from 'react-router-dom'

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import {UsersPage} from './pages/UsersPage'
import {NotFoundPage} from './pages/NotFoundPage'
import Navbar from './components/Navbar'
import { UserPage } from './pages/UserPage'
import { Dashboard } from './pages/Dashboard'

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/about" element={ <AboutPage /> } />
        
        {/* antes de la version 6 aqui necesitaría un exact.Ahora lo controla él mediante un algoritmo */}
        <Route path="/users" element={<UsersPage />} />
        
        {/* puedo usar params con :name,esto no ha cambiado */}

        <Route path="/users/:id" element={<UserPage />} />
       {/* Puedo redireccionar con <Navigate /> .Es el extinto <Redirect /> */}
        <Route path="/usuarios" element={
          <Navigate replace to="/users" />
        } />

        {/* debo crear las rutas hijas asi.Despues hay que usar <Outlet> en el componente padre para decirle donde renderizarse.Esto sólo es la declaración */}
        <Route path="/dashboard" element={<Dashboard />} >
          <Route path="welcome" 
              element={<h1>Welcome to the dashboard</h1>} />
          <Route path="goodbye" 
              element={<h1>Goodbye!</h1>} />
        </Route>

        <Route path="*" element={<NotFoundPage /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
