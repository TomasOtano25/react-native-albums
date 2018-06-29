import React from 'react';
import { Image, Button, Text, View } from 'react-native';

import Card from '../components/cards/Card';
import CardSection from '../components/cards/CardSection';

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image } = album;
  const { thumbnailContainerStyle } = styles;
  return (
      <Card>
        <CardSection>
            <View style={thumbnailContainerStyle}>
              <Image style={styles.thumbnailImageStyle} source={{ uri: thumbnail_image }} />
            </View>
            <View style={styles.headerContainerStyle}> 
              <Text>{title}</Text>
              <Text>{artist}</Text>
            </View>
          </CardSection>
          <CardSection>
              <Image style={{ width: 100, height: 100 }} source={{ uri: album.image }} />
          </CardSection>
          <CardSection>
              <Button title='Buy'></Button>
        </CardSection>
      </Card>
  );
};

const styles = {
  headerContainerStyle: {
    justifyContent: 'space-around',
    flexDirection: 'column'
  },
  thumbnailImageStyle: { width: 50, height: 50, borderRadius: 50 },
  thumbnailContainerStyle: {
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export default AlbumDetail;
