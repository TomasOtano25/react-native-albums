import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';

import axios from 'axios';

class AlbumList extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentWillMount() {
      console.log('componentWillMount in AlbumList');
      //debugger;
      //axios.get();
  }

  render() {
    return (
      <View>
        <ScrollView>
          <Text>
            Album List
          </Text>
        </ScrollView>
      </View>
    );
  }
}

export default AlbumList;
