import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import LoginForm from "./loginForm/LoginForm.jsx";
import RegisterPage from './Signup/RegisterPage.jsx';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/login' element={<LoginForm />} />
                <Route path='/register' element={<RegisterPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
