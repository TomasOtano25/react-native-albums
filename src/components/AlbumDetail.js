import React from 'react';
import { Image, Text, View, Linking } from 'react-native';

import Card from '../components/cards/Card';
import CardSection from '../components/cards/CardSection';
import Button from '../components/buttons/Button';

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image, url } = album;
  const { thumbnailContainerStyle, headerTextStyle, imageStyle } = styles;

  const handle = () => {
    Linking.openURL(url);
  };
  return (
      <Card>
        <CardSection>
            <View style={thumbnailContainerStyle}>
              <Image style={styles.thumbnailImageStyle} source={{ uri: thumbnail_image }} />
            </View>
            <View style={styles.headerContainerStyle}> 
              <Text style={headerTextStyle}>{title}</Text>
              <Text>{artist}</Text>
            </View>
          </CardSection>

          <CardSection>
              <Image style={imageStyle} source={{ uri: image }} />
          </CardSection>

          <CardSection>
              <Button onPress={() => handle()}>
                Buy Now!
              </Button>
        </CardSection>
      </Card>
  );
};

const styles = {
  headerContainerStyle: {
    justifyContent: 'space-around',
    flexDirection: 'column'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailImageStyle: { width: 50, height: 50, borderRadius: 50 },
  thumbnailContainerStyle: {
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;
