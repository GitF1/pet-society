import SettingComponent from "@/components/SettingsComponent/SettingComponent";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

const SettingsScreen: React.FC = ({icon, title} : any) => {
    return (
        <View style={styles.container}>

            <View style={styles.header}>

                <View style={styles.headerTitle}>
                    <Ionicons style={styles.closeIcon} name='close-outline'/>
                    <Text style={styles.settingsText}>Settings</Text>
                    <View></View>
                </View>

                <View style={styles.headerContent}>
                    <View style={styles.searchBar}>
                        <Ionicons style={styles.searchIcon} name='search-outline'/>
                        <Text style={styles.searchText}>Search</Text>
                    </View>
                    <Ionicons style={styles.microIcon} name='mic-outline' />
                </View>

            </View>

            <View style={styles.settingsContainer}>

                <SettingComponent 
                    iconName='create-outline' 
                    title='Edit Profile' 
                    iconStyle={styles.settingIcon} 
                    textStyle={styles.settingText}
                    containerStyle={{paddingTop: 20, paddingHorizontal: 25}}
                />

                <SettingComponent 
                    iconName='globe-outline' 
                    title='Language' 
                    iconStyle={styles.settingIcon} 
                    textStyle={styles.settingText}
                    containerStyle={{paddingTop: 15, paddingHorizontal: 25}}
                />

                <SettingComponent 
                    iconName='person-outline' 
                    title='Friends' 
                    iconStyle={styles.settingIcon} 
                    textStyle={styles.settingText}
                    containerStyle={{paddingTop: 15, paddingHorizontal: 25}}
                />

                <Text style={styles.preferencesText}>Preferences</Text>

                <SettingComponent 
                    iconName='notifications-outline' 
                    title='Notifications' 
                    iconStyle={styles.settingIcon} 
                    textStyle={styles.settingText}
                    containerStyle={{paddingTop: 0, paddingHorizontal: 25}}
                />

                <SettingComponent 
                    iconName='shield-outline' 
                    title='Account & Privacy' 
                    iconStyle={styles.settingIcon} 
                    textStyle={styles.settingText}
                    containerStyle={{paddingTop: 15, paddingHorizontal: 25}}
                />

                <SettingComponent 
                    iconName='moon-outline' 
                    title='Theme' 
                    iconStyle={styles.settingIcon} 
                    textStyle={styles.settingText}
                    containerStyle={{paddingTop: 15, paddingHorizontal: 25}}
                />

                <SettingComponent 
                    iconName='help-circle-outline' 
                    title='Media X Help' 
                    iconStyle={styles.settingIcon} 
                    textStyle={styles.settingText}
                    containerStyle={{paddingTop: 15, paddingHorizontal: 25}}
                />

                <SettingComponent 
                    iconName='alert-outline' 
                    title='About' 
                    iconStyle={styles.settingIcon} 
                    textStyle={styles.settingText}
                    containerStyle={{paddingTop: 15, paddingHorizontal: 25}}
                />

                <View style={styles.footer}>
                    <Ionicons style={styles.logoutIcon} name='log-out-outline'/>
                    <Text style={styles.logoutText}>Log out</Text>
                </View>

            </View>



        </View>
    )   
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        flexWrap: 'wrap',
    },

    header: {
        backgroundColor: '#3c947c',
        width: '100%',
        paddingVertical: 15,
    },

    headerTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingTop: 20,
    },

    settingsText: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 700,
    },

    closeIcon: {
        fontSize: 24,
        color: '#fff'
    },

    headerContent: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10, //*dif margin vs padding
        paddingVertical: 6,
        marginVertical: 15,
        width: '85%',
        alignSelf: 'center',
        borderRadius: 24,
    },

    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        paddingVertical: 10,
    },

    searchIcon: {
        fontSize: 20,
    },

    searchText: {
        color: '#898a83',
    },

    microIcon: {
        fontSize: 20,
    },

    settingsContainer: {
        marginTop: 6,
        backgroundColor: '#fff',
        borderRadius: 30,
        flex: 1,
    },

    settingIcon: {
        fontSize: 30,
    },

    settingText: {
        fontSize: 18,
    },

    preferencesText: {
        paddingLeft: 15,
        fontSize: 24,
        fontWeight: 'bold',
        paddingVertical: 25,
    },

    // ...
    footerContainer: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 25,
    },

    footer: {
        width: '85%',
        backgroundColor: '#3c947c',
        alignSelf: 'center',
        marginTop: 15,
        paddingVertical: 22,
        borderRadius: 28,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
    },

    logoutText: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 700,
    },

    logoutIcon: {
        fontSize: 24,
        color: '#fff',
    }
})

export default SettingsScreen;