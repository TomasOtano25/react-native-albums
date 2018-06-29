import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = (props) => 
    <View style={styles.containerStyle}> 
        {props.children}
    </View>;

const styles = StyleSheet.create({
    containerStyle: {
        borderRadius: 2,
        borderColor: '#ddd',
        borderWidth: 1,
        borderBottomWidth: 0,
        marginHorizontal: 5,
        marginTop: 10,
        elevation: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        backgroundColor: '#fff'
    }
});

export default Card;
