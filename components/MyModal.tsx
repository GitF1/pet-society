import React, { FC } from 'react';
import { TouchableWithoutFeedback, StyleSheet, Modal, View } from 'react-native';

interface MyModalProps {
  children: React.ReactNode;
  visible: boolean;
  dismiss: () => void;
  transparent?: boolean;
  animationType?: 'none' | 'slide' | 'fade';
}

const MyModal: FC<MyModalProps> = ({
  children,
  visible,
  dismiss,
  transparent = true,
  animationType = 'none',
}) => {
  return (
    <Modal
      visible={visible}
      transparent={transparent}
      onRequestClose={dismiss}
      animationType={animationType}>
      <TouchableWithoutFeedback onPress={dismiss}>
        <View style={styles.modalOverlay} />
      </TouchableWithoutFeedback>

      <View style={styles.modalContent}>{children}</View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    // flex: 1,
    justifyContent: 'center',
    margin: '5%',
  },
  modalOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});

export default MyModal;
//https://stackoverflow.com/a/52936928
