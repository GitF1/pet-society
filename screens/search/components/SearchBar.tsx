import { Feather } from '@expo/vector-icons';
import { StyleSheet, TextInput, View } from 'react-native';

const SearchBar: React.FC = () => {
  return (
    <View style={styles.searchBar}>
      <Feather style={styles.searchIcon} name="search" size={20} color="#777" />
      <TextInput placeholder="Search #tag" style={styles.input} />
      <Feather style={styles.micIcon} name="mic" size={20} color="#777" />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  micIcon: { marginRight: 4 },
  searchIcon: { marginLeft: 4 },
  searchBar: {
    flexDirection: 'row',
    backgroundColor: '#f1f1f1',
    borderRadius: 30,
    padding: 10,
    alignItems: 'center',
  },
  input: {
    marginLeft: 10,
    flex: 1,
  },
});
