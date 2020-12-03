import React from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import db from '../config'
export default class ReadScreen extends  React.Component{

constructor(){
    super()
    this.state={
        story:[],
    }
}

componentDidMount=async()=>{
const query = await db.collection('story').get()
query.docs.map((doc)=>{
this.setState({
    story:[...this.state.story,doc.data()],
})
})

}

    render(){
        return (


          <ScrollView>       
        {
             this.state.story.map((transaction,index)=>{
                 return(
              <View key={index} style={{borderBottomWidth:2,marginTop:50}}>
                   <Text>{'Tile:'+ transaction.Title}</Text>
               <Text>{'Author'+ transaction.Author}</Text>  
                      <Text>{'Story:'+ transaction.Story}</Text> 
                    </View>
                   )
               })
           }            
                </ScrollView>
 


        )
    }
}
