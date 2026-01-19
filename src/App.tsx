import 'react-native-gesture-handler';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { MMKV } from 'react-native-mmkv';
import { Provider } from 'react-redux';

import ApplicationNavigator from '@/navigation/Application';
import { store } from '@/store';
import { ThemeProvider } from '@/theme';
import '@/translations';

export const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      retry: false,
    },
    queries: {
      retry: false,
    },
  },
});

export const storage = new MMKV();

function App() {
  return (
    <GestureHandlerRootView>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <ThemeProvider>
            <ApplicationNavigator />
          </ThemeProvider>
        </Provider>
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}

export default App;
