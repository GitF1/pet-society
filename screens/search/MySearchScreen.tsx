import { View, TextInput, StyleSheet, FlatList, Image, ScrollView, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { useState } from 'react';

import MenuPillButton from '@/screens/search/components/MenuPillButton';

import SearchBar from './components/SearchBar';
import DiscoverTab from './components/DiscoverTab';
import AccountTab from './components/AccountTab';
import TagsTab from './components/TagsTab';

const hashtags = ['#helloform', '#clothesfashiondesign', 'ux', '#clothesfashiondesign2'];

// Get screen width for responsive layout

const MySearchScreen: React.FC = () => {
  const [selected, setSelected] = useState('Discover');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <View style={styles.container}>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <View style={styles.containerSearchFilter}>
        {['Discover', 'Account', 'Tags'].map(item => (
          <MenuPillButton key={item} item={item} selected={selected} setSelected={setSelected} />
        ))}
      </View>

      {selected === 'Discover' && <DiscoverTab />}
      {selected === 'Account' && <AccountTab />}
      {selected === 'Tags' && <TagsTab setSearchQuery={setSearchQuery} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },

  containerSearchFilter: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#fff',

    gap: '5px',
  },

  selectedButton: {
    marginRight: 5,
    backgroundColor: '#3B9678',
    paddingVertical: 10, // Vertical padding for better touch area
    paddingHorizontal: 15, // Horizontal padding for button width
    borderRadius: 20, // Rounded corners
    alignItems: 'center', // Center horizontally
    justifyContent: 'center', // Center vertically
  },
  filterButton: {
    marginRight: 5,
    backgroundColor: '#EAEAEA',
    paddingVertical: 10, // Vertical padding for better touch area
    paddingHorizontal: 15, // Horizontal padding for button width
    borderRadius: 20, // Rounded corners
    alignItems: 'center', // Center horizontally
    justifyContent: 'center', // Center vertically
    // borderWidth: 1,
  },
  selectedButtonText: {
    color: '#fff', // White text
    fontSize: 14, // Adjust font size
    fontWeight: 'bold', // Optional: Make text bold
  },
  filterButtonText: {
    color: '#777',
  },
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
  },
  searchUserText: {},
  searchUserDescription: { color: '#777' },
  searchUserTextBox: {
    marginLeft: 10,
    marginTop: 10,
  },
});

export default MySearchScreen;
