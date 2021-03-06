import React, { Component } from 'react';
import { View } from 'react-native';

import Header from '../components/headers/Header';
import AlbumList from '../components/AlbumList';

export default class Home extends Component {
  render() {
    return (
        <View style={{ flex: 1 }}>
            <Header>Albums</Header>
            <AlbumList />
        </View>
    );
  }
}
