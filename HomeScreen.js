import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';

import { MonoText } from '../components/StyledText';

class HomeScreen extends Component {
  render() {
    return (
      <View style={[styles.container, { justifyContent: 'center' }]}>
        <View
          style={{ alignItems: 'center' }}
          contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
              
              source={require('../assets/images/logo.png')}
              style={styles.welcomeImage}
              style={{ width: 300, height: 150, alignSelf: 'center' }}
            />
          </View>

          <View style={styles.getStartedContainer}>
            <View
              style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>

            <Button
              title="Chord"
              onPress={() => this.props.navigation.navigate('BottomTab')}
            />  
            </View>
            
            
            <View
              style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
            <Button
              title="Song"
              onPress={() => this.props.navigation.navigate('BottomTab')}
            />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    backgroundColor: '#87CEEB',
  },
  contentContainer: {
    paddingTop: 10,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    width: 150,
    height: 300,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
    margin: 50,
    width: 200
  },

});

export default HomeScreen;
