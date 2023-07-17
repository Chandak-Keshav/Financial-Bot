import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import DefaultPage from './components/pages/DefaultPage'
import Buy from './components/BuySell/Buy';
import LoginForm from "./components/loginForm/LoginForm.jsx";
import RegisterPage from './components/Signup/RegisterPage.jsx';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<AppLayout />}>
                    <Route path='/login' element={<LoginForm />} />
                    <Route path='/register' element={<RegisterPage />} />
                    <Route path='/analyze' element={<DefaultPage />} />
                    <Route path='/wallet' element={<DefaultPage />} />
                    <Route path='/store' element={<DefaultPage />} />
                    <Route path='/account' element={<DefaultPage />} />
                    <Route path='/' element={<Buy />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
