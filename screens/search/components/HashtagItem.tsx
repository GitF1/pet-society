import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

interface HashtagItemProp {
  hashtag: string;
  description: string;
  setSearchQuery: (query: string) => void;
}

const HashtagItem: React.FC<HashtagItemProp> = ({
  hashtag = '',
  description = '',
  setSearchQuery,
}) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.searchResultItem}
        onPress={() => setSearchQuery(`#${hashtag}`)}>
        <View style={styles.hashtagIcon}>
          <FontAwesome name="hashtag" size={24} color="black" />
        </View>
        <View style={styles.searchUserTextBox}>
          <Text style={styles.searchUserText}>{hashtag}</Text>
          <Text style={styles.searchUserDescription}>{description}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '90%', // Slightly smaller than the container to fit inside
    height: '90%',
    borderRadius: 30, // Keep the image circular
  },
  searchResultItem: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
  },
  searchUserText: {},
  searchUserDescription: { color: '#777' },
  searchUserTextBox: {
    marginLeft: 10,
    marginTop: 10,
  },
  hashtagIcon: {
    marginRight: 10,
  },
});

export default HashtagItem;
