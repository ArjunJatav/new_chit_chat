import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { Variant } from '@/theme/types/config';

// Define a type for the slice state
interface ThemeState {
    darkMode: boolean;
    variant: Variant | 'system';
}

// Initial state
const initialState: ThemeState = {
    darkMode: false, // will be updated by listener or initial check
    variant: 'system',
};

export const themeSlice = createSlice({
    initialState,
    name: 'theme',
    reducers: {
        changeTheme: (state, action: PayloadAction<Variant | 'system'>) => {
            state.variant = action.payload;
        },
        setDarkMode: (state, action: PayloadAction<boolean>) => {
            state.darkMode = action.payload;
        },
    },
    selectors: {
        selectTheme: state => state.variant,
        selectIsDarkMode: state => state.darkMode,
    },
});

export const { changeTheme, setDarkMode } = themeSlice.actions;

export const { selectTheme, selectIsDarkMode } = themeSlice.selectors;

export default themeSlice.reducer;
