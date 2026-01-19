import type { RootScreenProps } from '@/navigation/types';

import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ActivityIndicator, Text, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

import { Paths } from '@/navigation/paths';
import { useTheme } from '@/theme';

import WhiteLogo from '../../../assets/Svg/WhiteLogo.svg';
import BlackLogo from '../../../assets/Svg/DarkLogo.svg';
import { SafeScreen } from '@/components/templates';

const MINIMUM_SPLASH_TIME = 3000; // 3 seconds

function Startup({ navigation }: RootScreenProps<Paths.Startup>) {
  const { colors, fonts, gutters, layout, navigationTheme, variant } = useTheme();
  const LogoComponent = variant === 'dark' ? BlackLogo : WhiteLogo;
  const { t } = useTranslation();
  const [canNavigate, setCanNavigate] = useState(false);
  console.log("colors", colors, navigationTheme);

  // Animated values for heartbeat animation
  const scale = useSharedValue(1);
  const opacity = useSharedValue(0);

  const { isError, isFetching, isSuccess } = useQuery({
    queryFn: () => {
      return Promise.resolve(true);
    },
    queryKey: ['startup'],
  });

  // Start heartbeat animation on mount
  useEffect(() => {
    opacity.value = withTiming(1, { duration: 600 });
    scale.value = withRepeat(
      withSequence(
        withTiming(1.2, { duration: 200 }),
        withTiming(1, { duration: 200 }),
        withTiming(1.2, { duration: 200 }),
        withTiming(1, { duration: 200 }),
        withTiming(1, { duration: 1000 }), // Pause
      ),
      -1, // Infinite repeat
      false, // Do not reverse
    );
  }, []);

  // Ensure minimum splash time
  useEffect(() => {
    const timer = setTimeout(() => {
      setCanNavigate(true);
    }, MINIMUM_SPLASH_TIME);

    return () => clearTimeout(timer);
  }, []);

  // Navigate only when both conditions are met
  useEffect(() => {
    if (isSuccess && canNavigate) {
      navigation.reset({
        index: 0,
        routes: [{ name: Paths.BottomTabs }],
      });
    }
  }, [isSuccess, canNavigate, navigation]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
      opacity: opacity.value,
    };
  });

  return (
    <SafeScreen>
      <View
        style={[
          layout.flex_1,
          layout.col,
          layout.itemsCenter,
          layout.justifyCenter,
          { backgroundColor: navigationTheme.colors.background },
        ]}
      >
        <Animated.View style={animatedStyle}>
          <LogoComponent width={300} height={300} />
        </Animated.View>
        {isFetching ? (
          <ActivityIndicator color={colors.purple500} size="large" style={[gutters.marginVertical_24]} />
        ) : undefined}
        {isError ? (
          <Text style={[fonts.size_16, fonts.red500]}>{t('common_error')}</Text>
        ) : undefined}
      </View>
    </SafeScreen>
  );
}

export default Startup;
