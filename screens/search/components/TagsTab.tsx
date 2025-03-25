import { FlatList, StyleSheet, View } from 'react-native';
import HashtagItem from './HashtagItem';
import SearchHistoryHeader from './SearchHistoryHeader';
import MenuPillButton from './MenuPillButton';
import { useState } from 'react';

const hashtags = ['#helloform', '#clothesfashiondesign', '#ux', '#clothesfashiondesign23'];
const resultHashtags = ['helloform', 'clothesfashiondesign', 'ux', 'clothesfashiondesign23'];

const TagsTab: React.FC = () => {
  const [hashtag, setHashtag] = useState('');

  return (
    <View>
      <SearchHistoryHeader />
      <View style={styles.hashtagsContainer}>
        {hashtags.map(item => (
          <MenuPillButton item={item} selected={hashtag} setSelected={setHashtag} />
        ))}
      </View>
      <View style={styles.scrollContainer}>
        <FlatList
          data={resultHashtags}
          keyExtractor={item => item}
          renderItem={({ item }) => <HashtagItem hashtag={item} description="" />}
          
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  hashtagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  scrollContainer: {
    flex: 1,
    // paddingTop: StatusBar.currentHeight,
  },
});

export default TagsTab;
