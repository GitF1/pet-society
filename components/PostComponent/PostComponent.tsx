import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";


const PostComponent: React.FC = () => {
    return (
        <View style={styles.container}>
            <View style={styles.postContainer}>

                <View style={styles.postHeader}>
                    <Image style={styles.avatarImage} source={require('../../assets/images/avatar/avatar3.png')}/>
                    <View style={styles.postTitle}>
                        <Text style={styles.postAuthor} onPress={()=> router.push("/user/profile")}>Minh Vinh</Text>
                        <Text style={styles.postGenre}>Coder</Text>
                    </View>
                    <Ionicons style={styles.threeDots} name='ellipsis-horizontal' />
                </View>

                <View style={styles.postImageContainer}>
                    <Image 
                        style={styles.postImage}
                        source={require('../../assets/images/wallpaper.jpg')}
                    />
                    <Ionicons style={styles.copyIcons} name='copy'/>
                </View>

                <View style={styles.postFooter}>

                    <View style={styles.postActionsContainer}>
                        <View style={styles.footerItemContainer}>
                            <Ionicons style={styles.heartIcon} name="heart-outline"/>
                            <Text style={styles.postActionText}>Like</Text>
                        </View>

                        <View style={styles.footerItemContainer}>
                            <Ionicons style={styles.commentIcon} name="chatbox-ellipses-outline"/>
                            <Text style={styles.postActionText} onPress={()=> router.push("/user/comment")}>Comment</Text>
                        </View>

                        <View style={styles.footerItemContainer}>
                            <Ionicons style={styles.shareIcon} name="share-outline"/>
                            <Text style={styles.postActionText}>Share</Text>
                        </View>
                    </View>

                    <Text style={styles.likesCount}>Liked by you and 500 others</Text>
                </View>
            </View>
        </View>
    )
}

const colors = {
    green: '#3c947c',
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },

    postContainer: {
        flex: 1,
        // borderWidth: 2,
        borderRadius: 18,
        backgroundColor: '#FFF',
        width: '85%',
    },

    avatarImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        borderWidth: 3,
        borderColor: colors.green,
    },

    postHeader: {
        flexDirection: 'row',
        padding: 20,
        alignItems: 'center'
    },

    postTitle: {
        marginLeft: 12,
        justifyContent: 'center'
    },

    postAuthor: {
        fontSize: 16,
        fontWeight: 600,
    },

    postGenre: {
        marginTop: 2,
        fontSize: 12,
        color: '#898a83'
    },

    threeDots: {
        marginLeft: 'auto',
        fontSize: 24
    },

    postImageContainer: {
        flex: 1,
        position: 'relative',
    },

    postImage: {
        width: '85%',
        alignSelf: 'center',    
        borderRadius: 18,
        flex: 1,
    },

    copyIcons: {
        color: '#fff',
        position: 'absolute',
        top: 10,
        right: '10%',
        fontSize: 24
    },

    postFooter: {
        width: '90%',
        alignSelf: 'center',
        marginTop: 8,
        marginBottom: 50 //*,
        // flexDirection: 'row',
        // alignItems: 'center',
    },

    footerItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    heartIcon: {
        color: 'pink',
        fontSize: 28, //*
        marginLeft: 14,
    },

    postActionText: {
        marginLeft: 10,
        fontSize: 14,
        marginBottom: 0, //*
    },

    commentIcon: {
        color: 'black',
        fontSize: 28,
        marginLeft: 14,
    },

    shareIcon: {
        color: 'black',
        fontSize: 28,
        marginLeft: 14,
    },

    likesCount: {
        marginTop: 4,
        marginLeft: 10,
        marginBottom: 10,
    },

    postActionsContainer: {
        flexDirection: 'row',
    },
})

export default PostComponent;
