import { Route, Routes } from 'react-router-dom';
import PageLayout from './components/layout/PageLayout';
import HomePage from './pages/HomePage';
import Protected from './user/Protected';
import { AuthContextProvider } from './firebase/Auth/AuthContext';
import { UserDashboard } from './pages/UserDashboard';

function App() {
    return (
        <AuthContextProvider>
            <Routes>
                <Route path="/" element={<PageLayout />}>
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
