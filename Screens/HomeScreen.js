import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity,Image ,SafeAreaView} from 'react-native';
import { Header } from 'react-native-elements';
export default class HomeScreen extends Component{
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

  getWord=(word)=>{
    var searchKeyword=word.toLowerCase()
    var url = "https://rupinwhitehatjr.github.io/dictionary/"+searchKeyword+".json"
    //console.log(url)
    return fetch(url)
    .then((data)=>{
      if(data.status===200)
      {
        return data.json()
      }
      else
      {
        return null
      }
    })
    .then((response)=>{
        //console.log(response)

        var responseObject = response
        //var word = responseObject.word
        //var lexicalCategory = responseObject.results[0].lexicalEntries[0].lexicalCategory.text
        if(responseObject)
        {
          var wordData = responseObject.definitions[0]
          //console.log(responseObject.definitions[0])
          var definition=wordData.description
          var lexicalCategory=wordData.wordtype
          //console.log(lexicalCategory)
          this.setState({
            "word" : this.state.text, 
            "definition" :definition,
            "lexicalCategory": lexicalCategory     
            
          })
        }
        else
        {
          this.setState({
            "word" : this.state.text, 
            "definition" :"Not Found",
            
          })

        }
    
    })
  }

  render(){
    return(
    

      <View style={styles.container}>
     
     <Text style = {styles.header}>         Pocket Dictonary </Text>
      
        <Image
          style={styles.imageIcon}
          source={{
            uri:
              'https://www.educationworld.com/a_lesson/lesson/images/vocabulary.gif',
          }}
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
                definition : ""
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
          <Text style={{fontSize:20,color:'pink'}}>
            {
              this.state.isSearchPressed && this.state.word === "Loading..."
              ? this.state.word
              : ""
            }
          </Text>
            {
              this.state.word !== "Loading..." ?
              (
                <View style={{justifyContent:'center', marginLeft:10 ,color:'red'}}>
                  <View style={styles.detailsContainer}>
                    <Text style={styles.detailsTitle}>
                      Word :{" "}
                    </Text>
                    <Text style={{fontSize:18 ,color:'yellow'}}>
                      {this.state.word}
                    </Text>
                  </View>
                  <View style={styles.detailsContainer}>
                    <Text style={styles.detailsTitle}>
                      Type :{" "}
                    </Text>
                    <Text style={{fontSize:18,color:'yellow'}}>
                      {this.state.lexicalCategory}
                    </Text>
                  </View>
                  <View style={{flexDirection:'row',flexWrap: 'wrap',color:'yellow'}}>
                    <Text style={styles.detailsTitle}>
                      Definition :{" "}
                    </Text>
                    <Text style={{ fontSize:18,color:'yellow'}}>
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
  container: {
    flex:1,
     borderWidth:2, 
     backgroundColor: '#121212'
  },
  header:{
    backgroundColor:'red'
    ,fontSize:"180%"
  },
    imageIcon: {
    marginTop: 30,
    width: 150,
    height: 150,
    marginLeft: 100,
  },
  inputBoxContainer: {
    flex:0.3,
    alignItems:'center',
    justifyContent:'center'
    ,color:'pink'
  },
  inputBox: {
    marginTop: 20,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
    color:'pink'
   , borderColor:'blue'
      },
  searchButton: {
    width: '40%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderWidth: 2,
    borderRadius: 10
        ,borderColor:'green'
  },
  searchText:{
    fontSize: 20,
    fontWeight: 'bold'
    ,color:'yellow'
  },
  outputContainer:{
    flex:0.7,
    alignItems:'center'
    ,color:'pink'
  },
  detailsContainer:{
    flexDirection:'row',
    alignItems:'center'
    ,color:'pink'
  },
  detailsTitle:{
    color:'orange',
    fontSize:20,
    fontWeight:'bold'
    
  }
});
