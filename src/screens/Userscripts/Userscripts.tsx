import { SafeScreen } from '@/components/templates';
import { useTheme } from '@/theme';
import { Text, View } from 'react-native';

function Userscripts() {
    const { layout, fonts, navigationTheme } = useTheme();

    return (
        <SafeScreen>
            <View style={[layout.flex_1, layout.justifyCenter, layout.itemsCenter, { backgroundColor: navigationTheme.colors.background }]}>
                <Text style={[fonts.size_24, fonts.bold, fonts.gray800]}>Userscripts</Text>
            </View>
        </SafeScreen>
    );
}

export default Userscripts;
