import { FlatList, ScrollView, StyleSheet, View } from 'react-native';
import SearchResultItem from './SearchResultItem';
import SearchHistoryHeader from './SearchHistoryHeader';

const searchResults = [
  {
    avatar: 'https://placehold.co/200x200/000000/FFFFFF/png',
    name: 'John Doe',
    description: 'Lifelong traveler & coffee enthusiast.',
  },
  {
    avatar: 'https://placehold.co/200x200/ff0000/FFFFFF/png',
    name: 'Jane Smith',
    description: 'Aspiring writer & cat lover.',
  },
  {
    avatar: 'https://placehold.co/200x200/00ff00/FFFFFF/png',
    name: 'Michael Johnson',
    description: 'Tech geek & open-source contributor.',
  },
  {
    avatar: 'https://placehold.co/200x200/0000ff/FFFFFF/png',
    name: 'Emily Davis',
    description: 'Passionate about photography & nature.',
  },
  {
    avatar: 'https://placehold.co/200x200/ff00ff/FFFFFF/png',
    name: 'David Wilson',
    description: 'Entrepreneur & startup advisor.',
  },
  {
    avatar: 'https://placehold.co/200x200/ffff00/000000/png',
    name: 'Sophia Martinez',
    description: 'Fitness enthusiast & healthy living advocate.',
  },
  {
    avatar: 'https://placehold.co/200x200/00ffff/000000/png',
    name: 'Chris Brown',
    description: 'Gamer & esports analyst.',
  },
  {
    avatar: 'https://placehold.co/200x200/808080/FFFFFF/png',
    name: 'Olivia Taylor',
    description: 'Foodie & recipe creator.',
  },
  {
    avatar: 'https://placehold.co/200x200/800000/FFFFFF/png',
    name: 'Daniel Anderson',
    description: 'History buff & bookworm.',
  },
  {
    avatar: 'https://placehold.co/200x200/008000/FFFFFF/png',
    name: 'Emma Thomas',
    description: 'Music producer & vinyl collector.',
  },
];

const AccountTab: React.FC = () => {
  return (
    <View style={styles.scrollContainer}>
      <SearchHistoryHeader />
      <View style={styles.scrollContainer}>
        <FlatList
          data={searchResults}
          keyExtractor={item => item.avatar}
          renderItem={({ item }) => (
            <SearchResultItem
              avatar={item.avatar}
              name={item.name}
              description={item.description}
            />
          )}
        />

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    // paddingTop: StatusBar.currentHeight,
  },
});

export default AccountTab;
