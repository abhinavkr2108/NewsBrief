import React, { useState, useEffect } from 'react';
import { FlatList, Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Newscard() {
    const [newsData, setNewsData] = useState()
    const news = async()=>{
        try {
            const newsResponse = await fetch("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=1c1c103f8bfe424ba1f7da7d2b4999f0")
            const responseData = await newsResponse.json()
            setNewsData(responseData.articles)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
      news()
    }, [])
    
  return (
    <FlatList
        data={newsData}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index)=> index}
        renderItem={({item, index})=>{
            return(
                <View style={styles.newsCard}>
        
                <Text style={styles.newsTitle}>{item.title}</Text>
                <View style={styles.imageContainer}>
                  <Image 
                    style={styles.newsImage}
                    source ={{uri: item.urlToImage}}
                  >
                  </Image>
                </View>
                <View style={styles.descriptionContainer}>
                  <Text style={styles.newsDescription}>{item.description}</Text>
                </View>
                <View style={styles.btnContainer}>
                  <TouchableOpacity 
                    styles={styles.readMoreBtn}
                    onPress={()=>{Linking.openURL(item.url)}}>
                    <Text style={styles.readMoreText}> Read More {">"}</Text>
                  </TouchableOpacity>
                </View>
              </View>
              
            )
        }}/>
  )
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
      borderColor:"#ebf0ed",
      shadowColor: "grey",
      elevation: 2,
      borderWidth:1,
      backgroundColor: "white",
      width: "95%",
      borderRadius: 8,
      justifyContent: "center"
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


