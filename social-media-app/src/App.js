import React from 'react'
import Login from './pages/Login/Login';
import User from './pages/User/User';
import UserFav from './pages/User/UserFav/UserFav';
import Admin from './pages/Admin/Admin';
import NotFound from './pages/NotFound/NotFound';
import RedirectUser from '../src/pages/Redirect/RedirectUser';
import Private from './components/PrivateRoute/PrivateRoute';
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to={"/login"} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/redirect" element={<RedirectUser />}/>
        <Route path="/user" element={<Private role="user"> <User /> </Private>} />
        <Route path="/favorites" element={<Private role="user"> <UserFav /> </Private>} />
        <Route path="/admin" element={<Private role="admin"><Admin /></Private>}  />
        <Route path="/404" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;