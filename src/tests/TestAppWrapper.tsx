import { QueryClientProvider } from '@tanstack/react-query';
import { type PropsWithChildren } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { Provider } from 'react-redux';

import { store } from '@/store';
import { ThemeProvider } from '@/theme';
import '@/translations';

import { queryClient } from '../App';

function TestAppWrapper({ children }: PropsWithChildren) {
  return (
    <GestureHandlerRootView>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <ThemeProvider>{children}</ThemeProvider>
        </Provider>
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}

export default TestAppWrapper;
