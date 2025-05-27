import { create } from 'zustand';
export const useUserStore = create((set) => ({
    isLoggedIn: false,
    email: '',
    setLogin: (email) => {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('email', email);
        set({ isLoggedIn: true, email });
    },
    setLogout: () => {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('email');
        set({ isLoggedIn: false, email: '' });
        },
    loadUserFromStorage: () => {
        const isLogged = localStorage.getItem('isLoggedIn') === 'true';
        const email = localStorage.getItem('email') || '';
        set({ isLoggedIn: isLogged, email });
    }
}));
