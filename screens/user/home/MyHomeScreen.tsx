import PostComponent from "@/components/PostComponent/PostComponent";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView } from "react-native";

const MyHomeScreen: React.FC = () => {
    const [users, setUsers] = useState([
        { name: "You", avatar: require('../../../assets/images/avatar/avatar1.png') },
        { name: "Đình Duy", avatar: require('../../../assets/images/avatar/avatar2.png') },
        { name: "Minh Vinh", avatar: require('../../../assets/images/avatar/avatar3.png') },
        { name: "Thái Hoàng", avatar: require('../../../assets/images/avatar/avatar4.png') },
        { name: "Văn Toàn", avatar: require('../../../assets/images/avatar/avatar5.png') },
    ]);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Media X</Text>
                <View style={styles.headerIconContainer}>
                    <TouchableOpacity>
                        <Ionicons name='add-outline' style={styles.headerIcon} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Ionicons name='notifications-outline' style={styles.headerIcon} />
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.allAvatarsContainer}>
                    {users.map((user, index) => (
                        <View key={index} style={styles.avatarContainer}>
                            <Image style={styles.avatarImage} source={user.avatar} />
                            <Text style={styles.nameText}>{user.name}</Text>
                        </View>
                    ))}
                </View>
            </ScrollView>

            <PostComponent />
        </View>
    );
};

const colors = {
    green: '#3c947c',
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 15,
        backgroundColor: '#FAFAFA',
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        alignSelf: 'center',
        width: '90%',
    },

    headerText: {
        fontSize: 28,
        color: colors.green,
        padding: 10,
        fontWeight: 'bold',
    },

    headerIconContainer: {
        flexDirection: 'row',
    },

    headerIcon: {
        padding: 10,
        fontSize: 28,
    },

    allAvatarsContainer: {
        flexDirection: 'row',
        marginHorizontal: 20,
        marginVertical: 20,
        gap: 20,
    },

    avatarContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    avatarImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 3,
        borderColor: colors.green,
    },

    nameText: {
        marginTop: 6,
    },
});

export default MyHomeScreen;
