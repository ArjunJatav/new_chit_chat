import type {
  FulfilledThemeConfiguration,
  Variant,
} from '@/theme/types/config';
import type { ComponentTheme, Theme } from '@/theme/types/theme';
import type { PropsWithChildren } from 'react';

import { DarkTheme, DefaultTheme } from '@react-navigation/native';
import { createContext, useCallback, useEffect, useMemo, useState } from 'react';
import { useColorScheme } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import {
  changeTheme,
  selectTheme,
  setDarkMode,
} from '@/store/theme';
import {
  generateBackgrounds,
  staticBackgroundStyles,
} from '@/theme/backgrounds';
import {
  generateBorderColors,
  generateBorderRadius,
  generateBorderWidths,
  staticBorderStyles,
} from '@/theme/borders';
import componentsGenerator from '@/theme/components';
import {
  generateFontColors,
  generateFontSizes,
  staticFontStyles,
} from '@/theme/fonts';
import { generateGutters, staticGutterStyles } from '@/theme/gutters';
import layout from '@/theme/layout';
import generateConfig from '@/theme/ThemeProvider/generateConfig';

type Context = {
  changeTheme: (variant: Variant | 'system') => void;
} & Theme;

export const ThemeContext = createContext<Context | undefined>(undefined);

function ThemeProvider({ children }: PropsWithChildren) {
  const dispatch = useDispatch();
  const currentTheme = useSelector(selectTheme);
  const colorScheme = useColorScheme();

  console.log('ThemeProvider - colorScheme:', colorScheme);
  console.log('ThemeProvider - currentTheme:', currentTheme);

  const [variant, setVariant] = useState<Variant>(
    currentTheme === 'system' ? (colorScheme === 'dark' ? 'dark' : 'default') : currentTheme
  );

  useEffect(() => {
    let newVariant: Variant;
    if (currentTheme === 'system') {
      newVariant = colorScheme === 'dark' ? 'dark' : 'default';
      console.log('ThemeProvider - Using system theme, colorScheme is:', colorScheme, 'newVariant:', newVariant);
    } else {
      newVariant = currentTheme;
      console.log('ThemeProvider - Using manual theme:', newVariant);
    }
    setVariant(newVariant);
    dispatch(setDarkMode(newVariant === 'dark'));
  }, [currentTheme, colorScheme, dispatch]);

  const changeThemeCallback = useCallback(
    (nextVariant: Variant | 'system') => {
      dispatch(changeTheme(nextVariant));
    },
    [dispatch],
  );

  // Flatten config with current variant
  const fullConfig = useMemo(() => {
    return generateConfig(variant) satisfies FulfilledThemeConfiguration;
  }, [variant]);

  const fonts = useMemo(() => {
    return {
      ...generateFontSizes(),
      ...generateFontColors(fullConfig),
      ...staticFontStyles,
    };
  }, [fullConfig]);

  const backgrounds = useMemo(() => {
    return {
      ...generateBackgrounds(fullConfig),
      ...staticBackgroundStyles,
    };
  }, [fullConfig]);

  const gutters = useMemo(() => {
    return {
      ...generateGutters(fullConfig),
      ...staticGutterStyles,
    };
  }, [fullConfig]);

  const borders = useMemo(() => {
    return {
      ...generateBorderColors(fullConfig),
      ...generateBorderRadius(),
      ...generateBorderWidths(),
      ...staticBorderStyles,
    };
  }, [fullConfig]);

  const navigationTheme = useMemo(() => {
    if (variant === 'dark') {
      return {
        ...DarkTheme,
        colors: fullConfig.navigationColors,
        dark: true,
      };
    }
    return {
      ...DefaultTheme,
      colors: fullConfig.navigationColors,
      dark: false,
    };
  }, [variant, fullConfig.navigationColors]);

  const theme = useMemo(() => {
    return {
      backgrounds,
      borders,
      colors: fullConfig.colors,
      fonts,
      gutters,
      layout,
      variant,
    } satisfies ComponentTheme;
  }, [variant, fonts, backgrounds, borders, fullConfig.colors, gutters]);

  const components = useMemo(() => {
    return componentsGenerator(theme);
  }, [theme]);

  const value = useMemo(() => {
    return { ...theme, changeTheme: changeThemeCallback, components, navigationTheme };
  }, [theme, components, navigationTheme, changeThemeCallback]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export default ThemeProvider;
