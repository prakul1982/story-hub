import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View,Alert,FlatList,KeyboardAvoidingView,ScrollView} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import * as firebase from 'firebase';
import db from '../config.js'
import { Header } from 'react-native-elements';

export default class WriteScreen extends  React.Component{

    constructor(){
        super()
        this.state={
            title:'',
            author:'',
            story:''
        }
    }

    SubmitStory=async()=>{
        
        db.collection('story').add({
            Author:this.state.author,
            Title:this.state.title,
            Story:this.state.author
        })
    Alert.alert('Your Story has been submitted')
    }

render(){
    
    return(

    <View>

        <Header
          backgroundColor={'skyblue'}
          centerComponent={{
            text: 'Story Hub',
            style: { color: 'white', fontSize: 20 },
          }}
        />

        <FlatList>  

            <View style={styles.inputView}> 
            
               <TextInput style={styles.TextInputStyleClass}

                 placeholder='Story Title'
                 multiline={true}
                 onChangeText={(text)=>{
                 this.setState({title:text})
                 }}
                 value={this.state.title}
                />

            </View>
            
            <View style={styles.inputView}> 
            
                <TextInput style={styles.TextInputStyleClass}

                 placeholder='Author'
                 multiline={true}
                 onChangeText={(text)=>{
                     this.setState({author:text})
                     }}
                    value={this.state.author}
                />

            </View>
            
            <View style={styles.inputVieww}> 

               <TextInput style={styles.TextInputStyleClasss}

                   placeholder='Write Your Story'
                   multiline={true}
                   onChangeText={(text)=>{
                   this.setState({story:text})
                    }}
                    value={this.state.story}
                />

            </View>

            <View style={styles.inputView}>

                <TouchableOpacity style={styles.scanButton}

                     onPress={this.SubmitStory}>

                    <Text style={styles.buttonText}>Submit</Text>

                </TouchableOpacity>
            </View>

        </FlatList> 

    </View>
    )
}
}


const styles = StyleSheet.create({

inputView:{flexDirection: 'row', margin: 20,justifyContent:'center' },

inputVieww:{height:400,flexDirection: 'row', margin: 20,justifyContent:'center',borderColor: 'black',borderWidth: 2, },

TextInputStyleClass:{width:373.5,textAlign: 'left',height: 50,borderWidth: 2,borderColor: 'black',backgroundColor :'white'},

TextInputStyleClasss:{width:373.5,textAlign: 'left',height: 50,borderWidth: 2,borderBottomWidth: 0,borderTopWidth: 0,borderColor: 'black',backgroundColor :'white'},

scanButton:{backgroundColor: 'grey', width: 85, borderWidth: 3},

buttonText:{fontSize:25,alignContent:'center',color:'white'},
})
