import React, { createContext, useState, useEffect, useContext } from 'react';
import { redirect, useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import { getCsrfToken } from '../../apiUtils/FetchHelper';

interface UserData {
    username: string;
    email: string;
    groups: string[];
}

interface AuthContextType {
    isAuthenticated: boolean;
    userData?: UserData;
    CSRFToken?: string;
}


const AuthContext = createContext<AuthContextType>({isAuthenticated: false, userData: undefined, CSRFToken: undefined});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [userData, setUserData] = useState<any>(null);
    const [CSRFToken, setCSRFToken] = useState<string>(getCsrfToken());
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        fetch('/api/user_data/', {
            credentials: 'include',
            method: 'POST',
            headers: { 'X-CSRFToken': CSRFToken }
        })
        .then(response => response.json())
        .then(data => {
            if (data.isAuthenticated) {
                setIsAuthenticated(true);
                setUserData(data.user);
            } 
        })
        .catch(error => console.error('Error:', error))
        .finally(() => setLoading(false));
    }, [CSRFToken]); // Include navigate in the dependency array

    if (loading) return <div>Loading...</div>;

    if(!isAuthenticated) {
        return <h1>NOT LOGGED IN</h1>;
    }
    return (
        <AuthContext.Provider value={{ isAuthenticated, userData, CSRFToken }}>
            {children}
        </AuthContext.Provider>
    );
};
