import { createContext, useState, useContext } from 'react';

const ClubContext = createContext();

export function ClubProvider({ children }) {
    const [nameClub, setNameClub] = useState('');
    const [userRole, setUserRole] = useState(localStorage.getItem('role') || 'user');

    return (
        <ClubContext.Provider value={{ nameClub, setNameClub, userRole, setUserRole }}>{children}</ClubContext.Provider>
    );
}

export function isAuthenticated() {
    const token = localStorage.getItem('token');
    return !!token;
}

export function useClub() {
    const context = useContext(ClubContext);
    if (!context) {
        throw new Error('useClub must be used within a ClubProvider');
    }
    return context;
}
