import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

type Setting = {
    iconName: any,
    title: any,
}

const SettingComponent: React.FC = ({iconName, title, containerStyle, iconStyle, textStyle} : any) => {
    return (
        <View style={[styles.container, containerStyle]}>
            <View style={styles.settingContainer}>
                <Ionicons style={iconStyle} name={iconName}/>
                <Text style={textStyle}>{title}</Text>
            </View>

            <Ionicons style={styles.arrowIcon} name='chevron-forward-outline'/>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },

    settingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },

    settingIcon: {
        fontSize: 30,
    },

    arrowIcon: {
        fontSize: 16,
        color: '#898a83',
        alignSelf: 'center'
    }
})

export default SettingComponent;