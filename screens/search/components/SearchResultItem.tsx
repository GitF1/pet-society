import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface SearchResultItemProps {
  avatar: string;
  name: string;
  description: string;
}

const SearchResultItem: React.FC<SearchResultItemProps> = ({
  avatar = 'https://placehold.co/200x200/000000/FFFFFF/png',
  name = '',
  description = '',
}) => {
  return (
    <View>
      <TouchableOpacity style={styles.searchResultItem}>
        <View style={styles.outerCircle}>
          <Image
            source={{
              uri: avatar,
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.searchUserTextBox}>
          <Text style={styles.searchUserText}>{name}</Text>
          <Text style={styles.searchUserDescription}>{description}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  outerCircle: {
    width: 60, // Adjust size as needed
    height: 60,
    borderRadius: 40, // Half of width/height to make it circular
    borderWidth: 3,
    borderColor: 'green', // Adjust border color
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  image: {
    width: '90%', // Slightly smaller than the container to fit inside
    height: '90%',
    borderRadius: 30, // Keep the image circular
  },
  searchResultItem: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10,
  },
  searchUserText: {},
  searchUserDescription: { color: '#777' },
  searchUserTextBox: {
    marginLeft: 10,
    marginTop: 10,
  },
});

export default SearchResultItem;
