import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";


const PostComponent: React.FC = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
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
                            resizeMode="stretch"
                        />
                        <Ionicons style={styles.copyIcons} name='copy'/>
                    </View>

                    <View style={styles.contentContainer}>
                        <Text style={styles.content}>Such a beautiful image!</Text>
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


                <View style={styles.postContainer}>

                    <View style={styles.postHeader}>
                        <Image style={styles.avatarImage} source={require('../../assets/images/avatar/avatar2.png')}/>
                        <View style={styles.postTitle}>
                            <Text style={styles.postAuthor} onPress={()=> router.push("/user/profile")}>Đình Duy</Text>
                            <Text style={styles.postGenre}>Business Analysist</Text>
                        </View>
                        <Ionicons style={styles.threeDots} name='ellipsis-horizontal' />
                    </View>

                    <View style={styles.postImageContainer}>
                        <Image 
                            style={styles.postImage}
                            source={require('../../assets/images/post_images/duy2.png')}
                            resizeMode="stretch"
                        />
                        <Ionicons style={styles.copyIcons} name='copy'/>
                    </View>

                    <View style={styles.contentContainer}>
                        <Text style={styles.content}>This game has really nice graphics!</Text>
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

                        <Text style={styles.likesCount}>Liked by you and 10 others</Text>
                    </View>
                </View>

                <View style={styles.postContainer}>

                    <View style={styles.postHeader}>
                        <Image style={styles.avatarImage} source={require('../../assets/images/avatar/avatar4.png')}/>
                        <View style={styles.postTitle}>
                            <Text style={styles.postAuthor} onPress={()=> router.push("/user/profile")}>Thái Hoàng</Text>
                            <Text style={styles.postGenre}>Programmer</Text>
                        </View>
                        <Ionicons style={styles.threeDots} name='ellipsis-horizontal' />
                    </View>

                    <View style={styles.postImageContainer}>
                        <Image 
                            style={styles.postImage}
                            source={require('../../assets/images/post_images/hoang.jpg')}
                            resizeMode="stretch"
                        />
                        <Ionicons style={styles.copyIcons} name='copy'/>
                    </View>

                    <View style={styles.contentContainer}>
                        <Text style={styles.content}>This anime is amazing! Gut Job!</Text>
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

                        <Text style={styles.likesCount}>Liked by you and 200 others</Text>
                    </View>
                </View>

                <View style={styles.postContainer}>

                    <View style={styles.postHeader}>
                        <Image style={styles.avatarImage} source={require('../../assets/images/avatar/avatar5.png')}/>
                        <View style={styles.postTitle}>
                            <Text style={styles.postAuthor} onPress={()=> router.push("/user/profile")}>Văn Toàn</Text>
                            <Text style={styles.postGenre}>Designer</Text>
                        </View>
                        <Ionicons style={styles.threeDots} name='ellipsis-horizontal' />
                    </View>

                    <View style={styles.postImageContainer}>
                        <Image 
                            style={styles.postImage}
                            source={require('../../assets/images/post_images/toan.jpg')}
                            resizeMode="stretch"
                        />
                        <Ionicons style={styles.copyIcons} name='copy'/>
                    </View>

                    <View style={styles.contentContainer}>
                        <Text style={styles.content}>I love the universe!</Text>
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

                        <Text style={styles.likesCount}>Liked by you and 0 others</Text>
                    </View>
                </View>

            </View>
        </ScrollView>
    )
}

const colors = {
    green: '#3c947c',
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        gap: 20
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
        height: 300,
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

    contentContainer: {
        width: '85%',
        alignSelf: 'center',
        marginTop: 10
    },

    content: {
        
    }
})

export default PostComponent;
