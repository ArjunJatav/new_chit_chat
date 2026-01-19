import { configureStore } from '@reduxjs/toolkit';
import { MMKV } from 'react-native-mmkv';

import theme from './theme';

const storage = new MMKV();

// Middleware to persist theme
const persistenceMiddleware = (store: any) => (next: any) => (action: any) => {
    const result = next(action);
    if (action.type.startsWith('theme/')) {
        const state = store.getState();
        storage.set('user_theme', state.theme.variant);
    }
    return result;
};

// Preload state from storage
const storedTheme = storage.getString('user_theme') as any;
// If stored theme is 'default', reset to 'system' to respect device settings
const initialTheme = (storedTheme === 'default' || !storedTheme) ? 'system' : storedTheme;

const preloadedState = {
    theme: {
        darkMode: false,
        variant: initialTheme,
    },
};

export const store = configureStore({
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(persistenceMiddleware),
    preloadedState,
    reducer: {
        theme,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
