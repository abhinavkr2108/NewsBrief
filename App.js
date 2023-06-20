import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Newscard from './components/Newscard';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Welcome To News Brief</Text>
      </View>
      <View>
        <Newscard/>
      </View>
     
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    backgroundColor: "#ebf0ed",
  },
  titleContainer:{
    margin: 30,
  },
  title:{
    fontSize: 20,
    fontWeight: "bold"
  },
  newsCard:{
    marginTop: 12,
    borderColor: "grey",
    borderWidth:1,
    backgroundColor: "white",
    width: "95%",
    borderRadius: 8,
  },
  newsTitle:{
    fontSize: 24,
    fontWeight: "bold",
    padding: 8,

  },
  imageContainer:{
    width: "100%",
    alignItems: "center"
  },
  newsImage:{
    width: "95%",
    height: 200,
  },
  descriptionContainer:{
    padding: 8,
  },
  newsDescription:{
    fontSize: 17,
  },
  btnContainer:{
    padding: 8,
    flex: 0,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  readMoreBtn:{
    
  },
  readMoreText:{
    backgroundColor: "#0995db",
    padding: 10,
    borderRadius: 5,
    color: "white",
  }

});

{/** 1c1c103f8bfe424ba1f7da7d2b4999f0 */}