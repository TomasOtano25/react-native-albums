import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const ButtonCard = ({ title, onPress }) => (
      <TouchableOpacity 
        style={styles.buttonStyle} 
        onPress={onPress} 
      >
        <Text style={styles.textStyle}>{title}</Text>
      </TouchableOpacity>
    );

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600'
    },
    buttonStyle: {
        flex: 1,
        borderRadius: 5,
        elevation: 1,
        backgroundColor: '#fff', 
        padding: 10,
        alignSelf: 'stretch',
        borderColor: '#007aff', //#007aff
        borderWidth: 1,
        marginHorizontal: 5
    }
}; 


export default ButtonCard;
