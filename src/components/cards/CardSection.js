import React from 'react';
import { View, StyleSheet } from 'react-native';

const CardSection = (props) => 
      <View style={styles.containerStyle}>
        {props.children}
      </View>;

const styles = StyleSheet.create({
  containerStyle: {
    borderBottomWidth: 1,
    borderColor: '#ddd',
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    position: 'relative' 
  }
});

export default CardSection;
