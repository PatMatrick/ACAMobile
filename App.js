 import { StatusBar } from 'expo-status-bar';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import React, {useState} from 'react';
import AppLoading from 'expo-app-loading';
import { Button, StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { NavigationContainer, useLinkProps } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainButton from './components/MainButton';
import Colors from './constants/Colors';
import { block, color } from 'react-native-reanimated';
import Player from './player/Player';
import Rural_Layperson from './beastiary/beastiary';




const fetchFonts = () => {
  return Font.loadAsync({
    'zig': require('./fonts/zig.ttf')
  });
}


const PlayerIG = Object.create(Player)
const Rural_LaypersonIG = Object.create(Rural_Layperson)

var story = PlayerIG.storylist

function StartScreen({ navigation }) {
   return (
    <View style={styles.container}>
      <View style={styles.logocontainer}>
        <Image style={styles.logo} source={require('./images/ACATitle.png')} />
      </View>
      <View stlye={styles.container}>
      <MainButton style={styles.buttons}
        onPress={() => navigation.navigate("Main Screen")}>
          New Game
      </MainButton>
      <MainButton style={styles.buttons} onPress={() => navigation.navigate("Main Screen")}>
        Continue
      </MainButton>
      <View style={styles.logocontainer1}>

      </View>
      </View>
    </View>
  );
}


function MainScreen({ navigation }) {
  return (
    <View style={styles.maincard}>
      <View>
      <Text style={styles.toptext}>Name: {PlayerIG.name}</Text>
      <Text style={styles.whitetext}>Hit Points: {PlayerIG.health}</Text>
      <Text style={styles.whitetext}>Faith: {PlayerIG.faith}</Text>
      <Text style={styles.whitetext}>Gold: {PlayerIG.gold}</Text>
      <Text style={styles.whitetext}>Experience: {PlayerIG.exp}</Text>
      <Text style={styles.whitetext}>Weapon: {PlayerIG.currentweapon}</Text>
      <Text style={styles.whitetext}>Attack Power: {PlayerIG.baseattack}</Text>
      <Text style={styles.whitetext}>Potions: {PlayerIG.potions}</Text>
      </View>
      <View style={styles.buttonsfightleft}>
      <MainButton style={styles.buttons} onPress={() => navigation.navigate("Fight Screen")}>Fight</MainButton>
      <MainButton onPress={() => navigation.navigate("Inventory Screen")}>Inventory</MainButton>
      <MainButton onPress={() => navigation.navigate("Shop Screen")}>Shop Screen</MainButton>
      <MainButton onPress={() => navigation.navigate("Story Screen")}>Story Screen</MainButton>
      <MainButton onPress={() => navigation.navigate("Home")}>Exit</MainButton>
      </View>

    </View>
  );
}

function FightScreen({ navigation }) {
  
  return (
    <View style={styles.maincard}>
      <View>
        <Text style={styles.whitetext}>Hello</Text>
      </View>
      <View>
      <MainButton onPress={() => navigation.navigate("Main Screen")}>Go Back</MainButton>
      </View>
    </View>
  );
}

function ShopScreen({ navigation }) {
  return (
    <View>
      <Text>Shop Screen</Text>
    </View>
  );
}

function InventoryScreen({ navigation }) {
  return (
    <View>
      <Text>Inventory Screen</Text>
    </View>
  );
}

function StoryScreen({ navigation }) {
  return (
    <View>
      <Text>Story Screen</Text>
    </View>   
  );
}

function WeaponsScreen({ navigation }) {
  return (
    <View>
      <Text>Weapons List</Text>
    </View>
  )
}

function SpellsScreen({ navigation }) {
  return (
    <View>
      <Text>
        Spells
      </Text>
    </View>
  )
}

const Stack = createStackNavigator();

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);
  
  
  if (!dataLoaded) {
    return (
      <AppLoading
      startAsync={fetchFonts}
      onFinish={() => setDataLoaded(true)}
      onError={(err) => console.log(err)}
      />
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={StartScreen} /> 
        <Stack.Screen name="Main Screen" component={MainScreen} />
        <Stack.Screen name="Fight Screen" component={FightScreen}/>
        <Stack.Screen name="Shop Screen" component={ShopScreen}/>
        <Stack.Screen name="Inventory Screen" component={InventoryScreen}/>
        <Stack.Screen name="Story Screen" component={StoryScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    height: "100%",
    paddingBottom: 300
  },
  whitetext: {
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'zig',
    padding: 10,
  },
  toptext: {
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'zig',
    paddingTop: '30%',
    padding: 10,
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
    paddingTop: 100,
    flexDirection: 'row',
    height: 0,
    minHeight: '5%',
    minWidth: '0%',
  },
  maincard: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: 'black',
    elevation: 5,
    padding: 20,
    borderRadius: 10,
    height: "100%",
    width: '100%',
    marginLeft: 0,
    marginTop: 0,
  },
  buttons: { 
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 100,
    marginBottom: "50%",
  },
  logocontainer1: {
    backgroundColor: 'black',
    padding: 10,
    flexDirection: 'row',
    top: "10%",
    width: "100%",
    
  },
  buttonsfightleft: { 
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 100,
    marginBottom: "50%",
    right: 100,
  },
  });

