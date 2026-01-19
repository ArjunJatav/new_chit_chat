import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Paths } from '@/navigation/paths';
import { Filters, Userscripts, Settings } from '@/screens';
import { useTheme } from '@/theme';
import { IconByVariant } from '@/components/atoms';
import type { BottomTabParamList } from '@/navigation/types';

const Tab = createBottomTabNavigator<BottomTabParamList>();

function BottomTabNavigator() {
    const { colors, navigationTheme } = useTheme();

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 20,
                    left: 20,
                    right: 20,
                    backgroundColor: navigationTheme.colors.card,
                    borderRadius: 30,
                    height: 70,
                    borderTopWidth: 0,
                    shadowColor: '#000',
                    shadowOffset: {
                        width: 0,
                        height: 4,
                    },
                    shadowOpacity: 0.30,
                    shadowRadius: 4.65,
                    elevation: 8,
                    paddingBottom: 10,
                    paddingTop: 10,
                },
                tabBarActiveTintColor: colors.purple500,
                tabBarInactiveTintColor: colors.gray800,
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: 'bold',
                    marginTop: 5
                }
            }}
        >
            <Tab.Screen
                name={Paths.Filters}
                component={Filters}
                options={{
                    tabBarLabel: 'Filters',
                    tabBarIcon: ({ color, size }: { color: string; size: number; focused: boolean }) => (
                        <IconByVariant path="filters" width={size} height={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name={Paths.Userscripts}
                component={Userscripts}
                options={{
                    tabBarLabel: 'Userscripts',
                    tabBarIcon: ({ color, size }: { color: string; size: number; focused: boolean }) => (
                        <IconByVariant path="userscripts" width={size} height={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name={Paths.Settings}
                component={Settings}
                options={{
                    tabBarLabel: 'Settings',
                    tabBarIcon: ({ color, size }: { color: string; size: number; focused: boolean }) => (
                        <IconByVariant path="settings" width={size} height={size} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default BottomTabNavigator;
