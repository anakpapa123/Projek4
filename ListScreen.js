import React, { Component } from 'react';
import { ScrollView, StyleSheet, FlatList, Text, View, Image } from 'react-native';

import HumanRightsStore from '../components/HumanRightsStore';
import { ListItem, Left, Thumbnail, Body, Right } from 'native-base';

class ListScreen extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={{ justifyContent: 'center' }}>
          <Image
            style={{ width: 50, height: 50, alignSelf: 'center' }}
            source={{ uri: '../assets/images/logo.png' }}
          />
          <Text style={{ fontSize: 20, fontWeight: 'bold', alignSelf: 'center' }}>Kunci Gitar</Text>
        </View>

        <FlatList
          data={HumanRightsStore}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ListItem thumbnail button={true} onPress={() => {
              /* passing parameter dari data HumanRightStore ke DetailsScreen */
              this.props.navigation.navigate('Details', {
                id: item.id,
                title: item.title,
                content: item.content,
                photoDetail: item.photoDetail,
              });

            }}>
              <Left>
                <Thumbnail square source={item.photoList} />
              </Left>
              <Body>
                <Text>{item.title}</Text>
              </Body>
            </ListItem>
          )}
        />
      </ScrollView>
    );
  };
};

ListScreen.navigationOptions = {
  title: 'Guitariz',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});

export default ListScreen;
