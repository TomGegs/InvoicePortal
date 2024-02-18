import { Route, Routes } from 'react-router-dom';
import LoginWrapper from './components/layout/LoginWrapper';
import HomePage from './pages/HomePage';
import Protected from './user/Protected';
import UserDashboard from './pages/UserDashboard';
import { AuthContextProvider } from './firebase/Auth/AuthContext';

function App() {
    return (
        <AuthContextProvider>
            <Routes>
                <Route path="/" element={<LoginWrapper />}>
                    <Route path="/" index element={<HomePage />} />
                </Route>
                <Route element={<Protected />}>
                    <Route path="/account" element={<UserDashboard />} />
                </Route>
            </Routes>
        </AuthContextProvider>
    );
}

export default App;
