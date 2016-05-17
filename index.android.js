/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  StatusBar,
  View,
  ToolbarAndroid,
  Platform,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Image
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? 20 : 25;
const HEADER_HEIGHT = Platform.OS === 'ios' ? 44 + STATUS_BAR_HEIGHT : 56 + STATUS_BAR_HEIGHT;

class shopp extends Component {
  render() {
    let actions = [{
     title: 'Хайх',
     show: 'always',
     icon: require('./assets/icon-search.png')
    },{
     title: 'Сагс',
     show: 'always',
     icon: require('./assets/icon-shop-bag.png')
    },{
     title: 'Мэдэгдэл',
     show: 'always',
     icon: require('./assets/icon-notification.png')
    },{
     title: 'Профайл',
     show: 'always',
     icon: require('./assets/icon-account-menu.png')
    }];
    return (
      <View style={styles.container}>
        <StatusBar
          transclude={true}
          animated={true}
          backgroundColor="#fff"
          barStyle="light-content"
          />
        <ToolbarAndroid
          navIcon={require('./assets/icon-menu.png')}
          title="Home"
          titleColor="#3c3c3c"
          actions={actions}
          style={styles.toolbar}>
        </ToolbarAndroid>
        <ScrollView>
          <View style={styles.categoryContainer}>
            <TouchableOpacity style={styles.category}>
              <View>
                <Image source={require('./assets/icon-man.png')} style={styles.categoryImage}/>
                <Text style={styles.categoryText}>MAN</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.category}>
              <View>
                <Image source={require('./assets/icon-woman.png')} style={styles.categoryImage}/>
                <Text style={styles.categoryText}>WOMAN</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.category}>
              <View>
                <Image source={require('./assets/icon-kids.png')} style={styles.categoryImage}/>
                <Text style={styles.categoryText}>KIDS</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.category}>
              <View>
                <Image source={require('./assets/icon-sale.png')} style={styles.categoryImage}/>
                <Text style={styles.categoryText}>SALE</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.bigCard}>
            <TouchableOpacity>
              <View>
                <Image source={require('./assets/fashion-1.jpg')} 
                  resizeMode={Image.resizeMode.cover} 
                  style={styles.cardImage}/>
                <Image source={require('./assets/brand-day.png')} 
                  resizeMode={Image.resizeMode.contain}
                  style={{width: SCREEN_WIDTH - 20}}/>
                <Text style={styles.cardText}>Flat 40% off on new arrivals, and many other offers!</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.bannerContainer}>
            <Image source={require('./assets/adidas-neo-shoes.jpg')}
              resizeMode={Image.resizeMode.cover}
              style={styles.bannerImage}/>
            <View style={styles.bannerDescription}>
              <Image source={require('./assets/logo-adidas.png')}
                resizeMode={Image.resizeMode.contain}/>
              <Text style={styles.bannerText}>
                Step in the comfort with the new cloudfoam technology
              </Text>
              <TouchableOpacity 
                style={styles.bannerButton}
                activeOpacity="0.7">
                <Text style={{color: '#fff'}}>
                  SHOP NOW
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f1f5f7',
    height: SCREEN_HEIGHT
  },
  toolbar: {
    height: HEADER_HEIGHT - STATUS_BAR_HEIGHT,
    backgroundColor: '#fff',
    elevation: 1
  },
  categoryContainer: {
    height: 90,
    backgroundColor: '#fff',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 3,
    elevation: 1,
    flexDirection: 'row',
  },
  category: {
    flex: 1,
    alignItems: 'center',
    justifyContent : 'center',
    height: 90
  },
  categoryImage: {
    alignSelf: 'center'
  },
  categoryText: {
    textAlign : 'center',
    color: '#3c3c3c'
  },
  bigCard: {
    backgroundColor: '#fff',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 3,
    elevation: 1,
    flex: 1,
    flexDirection: 'row',
  },
  cardImage: {
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    height: 220,
    width: SCREEN_WIDTH - 20
  },
  cardText: {
    fontSize: 12,
    textAlign: 'center',
    paddingBottom: 5,
    color: '#747474'
  },
  bannerContainer: {
    backgroundColor: '#fff',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 30,
    borderRadius: 3,
    elevation: 1,
    flex: 1,
    flexDirection: 'row',
    height: 150
  },
  bannerImage: {
    flex: 1,
    borderTopLeftRadius: 3,
    borderBottomLeftRadius: 3
  },
  bannerDescription: {
    flex: 2,
    alignItems: 'center'
  },
  bannerText: {
    textAlign: 'center',
    fontSize: 13,
  },
  bannerButton: {
    borderRadius: 3,
    backgroundColor: '#3c3c3c',
    padding: 10,
    alignSelf: 'center',
    marginTop: 10,
  }
});

AppRegistry.registerComponent('shopp', () => shopp);
