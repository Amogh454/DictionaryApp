import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { Header } from 'react-native-elements';
import dictionary from '../db';
export default class main extends Component{
  constructor() {
    super();
    this.state = {
      text: '',
      isSearchPressed: false,
      isLoading: false,
      word  : "Loading...",
      lexicalCategory :'',
      definition : ""
    };
  }

  getWord=(text)=>{

    try{
      var word = dictionary[text]["word"]
      var lexicalCategory = dictionary[text]["lexicalCategory"]
      var definition = dictionary[text]["definition"]
      this.setState({
        "word" : word,
        "lexicalCategory" : lexicalCategory,
        "definition" : definition
      })
    }
    catch(err){
      alert("Sorry This word is not available for now")
      this.setState({
        'text':'',
        'isSearchPressed':false
      })
    }
  }

  render(){
    return(
      <View>
        <Header
          backgroundColor={'#990066'}
          centerComponent={{
            text: "Amogh's Dictionary",
            style: { color: '#fff', fontSize: 20.4 , fontWeight:"bold", justifyContent:"space-evenly"},
          }}
        />

<Image
        style = {styles.img}
        source={require('../assets/appIcon.png')}
        />
        <View style={styles.inputBoxContainer}>
          <TextInput
            style={styles.inputBox}
            onChangeText={text => {
              this.setState({
                text: text,
                isSearchPressed: false,
                word  : "Loading...",
                lexicalCategory :'',
                examples : [],
                defination : ""
              });
            }}
            value={this.state.text}
          />

          <TouchableOpacity
            style={styles.searchButton}
            onPress={() => {
              this.setState({ isSearchPressed: true });
              this.getWord(this.state.text)
            }}>
            <Text style={styles.searchText}>Search</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.outputContainer}>
          <Text style={{fontSize:20}}>
            {
              this.state.isSearchPressed && this.state.word === "Loading..."
              ? this.state.word
              : ""
            }
          </Text>
            {
              this.state.word !== "Loading..." ?
           (
                <View style={{justifyContent:'center', marginLeft:10 }}>
                  <View style={styles.detailsContainer}>
                    <Text style={styles.detailsT}>
                      Word :{" "}
                    </Text>
                    <Text style={{fontSize:18 }}>
                      {this.state.word}
                    </Text>
                  </View>
                  <View style={styles.detailsContainers}>
                    <Text style={styles.detailsTitle}>
                      Type :{" "}
                    </Text>
                    <Text style={{fontSize:18}}>
                      {this.state.lexicalCategory}
                    </Text>
                  </View>
                  <View style={{flexDirection:'row',flexWrap: 'wrap', marginTop:60}}>
                    <Text style={styles.detailsTitle}>
                      Definition :{" "}
                    </Text>
                    <Text style={{ fontSize:18}}>
                      {this.state.definition}
                    </Text>
                  </View>
                </View>
              )
              :null
            }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  inputBox: {
    width: '80%',
    textAlign: 'center',
    height: 40,
    alignSelf: 'center',
    borderWidth: 3,
    outline: 'none',
    marginTop:50,
    marginBottom:50
  },
  searchButton: {
    backgroundColor: '#9900ff',
    borderColor: '#ffff00',
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 15,
    width: 200,
    height: 50,
    textAlign: 'center',
    marginBottom:20
  },
  searchText:{
    fontSize: 30,
    fontWeight: 'bold',
    color:'#fff',
    alignSelf:"center",
    
  },
  outputContainer:{
    flex:0.7,
    alignItems:'center'
  },
  detailsContainer:{

    flexDirection:'row',
    alignItems:'center',
    marginTop:50,
  },

  detailsTitle:{
    color:'indigo',
    fontSize:20,
    fontWeight:'bold',
    marginTop:30


  },

    detailsT:{
    color:'indigo',
    fontSize:20,
    fontWeight:'bold',
 


  },

  img:{
    width:300,
    height:250,
    marginTop: 20,
    alignSelf:"center",

    
  },

  



});