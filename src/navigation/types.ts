import type { Paths } from '@/navigation/paths';
import type { StackScreenProps } from '@react-navigation/stack';

export type RootScreenProps<
  S extends keyof RootStackParamList = keyof RootStackParamList,
> = StackScreenProps<RootStackParamList, S>;

export type RootStackParamList = {
  [Paths.Example]: undefined;
  [Paths.Startup]: undefined;
  [Paths.BottomTabs]: undefined;
};

export type BottomTabParamList = {
  [Paths.Filters]: undefined;
  [Paths.Userscripts]: undefined;
  [Paths.Settings]: undefined;
};
