import MyModal from '@/components/MyModal';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Dimensions, FlatList, Image, StyleSheet, View } from 'react-native';

const images = [
  {
    id: '1',
    uri: 'https://upload.wikimedia.org/wikipedia/en/3/34/Cars_2006.jpg',
  },
  {
    id: '2',
    uri: 'https://upload.wikimedia.org/wikipedia/en/3/34/Cars_2006.jpg',
  },
  { id: '3', uri: 'https://placehold.co/200x200/000000/FFFFFF/png' },
  { id: '4', uri: 'https://placehold.co/200x200/000000/FFFFFF/png' },
  { id: '5', uri: 'https://placehold.co/200x200/000000/FFFFFF/png' },
  { id: '6', uri: 'https://placehold.co/200x200' },
  { id: '7', uri: 'https://placehold.co/200x200/000000/FFFFFF/png' },
  {
    id: '8',
    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDXVmx6QegOP3TG7-e4VOwlhb-kMd3heeQ-w&s',
  },
  {
    id: '9',
    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKk4rdmQiuOkGcYKKJQBMT-9WxDeyD7Rbs9Q&s',
  },
  {
    id: '10',
    uri: 'https://static.wikia.nocookie.net/nichijou/images/2/26/Sakamoto.png/revision/latest?cb=20190531163434',
  },
  {
    id: '11',
    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKk4rdmQiuOkGcYKKJQBMT-9WxDeyD7Rbs9Q&s',
  },
  {
    id: '12',
    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKk4rdmQiuOkGcYKKJQBMT-9WxDeyD7Rbs9Q&s',
  },
];

const screenWidth = Dimensions.get('window').width;
const imageSize = screenWidth / 2 - 40; // 2 columns with some spacing

const DiscoverTab: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [currUri, setCurrUri] = useState('');

  return (
    <View style={styles.containerFlatList}>
      <MyModal
        visible={modalVisible}
        dismiss={() => {
          setModalVisible(false);
        }}>
        <View style={styles.modalContainer}>
          <Image source={{ uri: currUri }} style={styles.imageModal} />
        </View>
      </MyModal>

      <FlatList
        data={images}
        keyExtractor={item => item.id}
        numColumns={2} // Two-column layout
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              setCurrUri(item.uri);
              setModalVisible(!modalVisible);
            }}
            style={styles.imageContainer}>
            <Image source={{ uri: item.uri }} style={styles.imageFlatList} />
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerFlatList: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#fff',
  },
  modalContainer: {
    flex: 1, // Take full height
    // justifyContent: 'center', // Center vertically
    // alignItems: 'center', // Center horizontally
    alignSelf: 'center',

    flexDirection: 'row',
    // marginVertical: 250,
    // justifySelf: 'center',
    // padding: 100,

    // backgroundColor: '#fff',
  },
  imageModal: {
    width: imageSize * 2,
    height: imageSize * 2,
    borderRadius: 10, // Optional: rounded corners
  },
  imageContainer: {
    // flex: 1,

    margin: 5, // Space between images
  },
  imageFlatList: {
    width: imageSize,
    height: imageSize,
    borderRadius: 10, // Optional: rounded corners
  },

  flatListContainer: {
    paddingBottom: 20, // Space at the bottom
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },

  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default DiscoverTab;
