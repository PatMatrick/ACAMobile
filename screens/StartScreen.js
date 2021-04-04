import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import MainButton from '../components/MainButton';

function StartScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <View style={styles.logocontainer}>
          <Image style={styles.logo} source={require('./images/ACATitle.png')} />
        </View>
        <View>
        <MainButton
          onPress={() => navigation.navigate("Main Screen")}>
            New Game
        </MainButton>
        <MainButton onPress={() => navigation.navigate("Main Screen")}>
          Continue
        </MainButton>
        </View>
      </View>
    );
  }
  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        minHeight: "0%"
      },
      whitetext: {
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center' 
      },
      logo: {
        flex: 1,
        width: 350,
        height: 350,
        resizeMode: 'contain'
      },
      logocontainer: {
        flex: 1,
        backgroundColor: 'black',
        padding: 10,
        flexDirection: 'row',
        height: 0,
        minHeight: '5%',
        minWidth: '0%',
      }
    });

export default StartScreen;