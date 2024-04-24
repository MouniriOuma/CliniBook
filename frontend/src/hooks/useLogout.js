import { useAuthContext } from './useAuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useLogout = () => {
    const { dispatch } = useAuthContext();


    const logout = async () => {
        try {
        // Remove user from storage
        await AsyncStorage.removeItem('user');
        // Dispatch logout action
        dispatch({ type: 'LOGOUT' });

        } catch (error) {
        console.error('Error logging out:', error);
        }
    };

    return { logout };
};
