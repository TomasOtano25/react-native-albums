import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Header = (props) => {
      const { textStyle, viewStyle } = styles;
      const { children } = props;
      return (
        <View style={viewStyle}>
          <Text style={textStyle}>{children}</Text>
        </View>
      );
};


const styles = StyleSheet.create({
  viewStyle: {
      alignItems: 'flex-start',
      justifyContent: 'center',
      height: 60,
      backgroundColor: '#eee', //#f8f8f8
      padding: 15,
      shadowOffset: { width: 0, height: 10 },
      shadowColor: '#000',
      shadowOpacity: 0.2,
      elevation: 2,
      position: 'relative'
  },
  textStyle: {
    color: '#111',
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default Header; 

