import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface SearchHistoryHeaderProps {
  clear: () => void;
}

const SearchHistoryHeader: React.FC<SearchHistoryHeaderProps> = ({ clear }) => {
  return (
    <View style={styles.searchHistoryTitle}>
      <Text style={styles.searchHistoryTitleRecentText}>Recent</Text>
      <TouchableOpacity onPress={() => clear()}>
        <Text style={styles.searchHistoryTitleClearAll}>Clear All</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  searchHistoryTitle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  searchHistoryTitleRecentText: {
    fontWeight: 'bold',
  },
  searchHistoryTitleClearAll: {
    color: '#3B9678',
  },
});

export default SearchHistoryHeader;
