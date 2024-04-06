import React,  {useState} from 'react'
import { View, ScrollView, TextInput, Button, StyleSheet, FlatList, Text } from 'react-native'

const TodoListScreen = () => {
  const [todoListData, setTodoListData] = useState([]);
  const [ todoText, setTodoText ] = useState("");

  const handleChangeText = (text) => {
    setTodoText(text);
  }
  const handleButtonPress = () =>{
    if ( todoText.trim().length > 0 ) {

      setTodoListData((value) => value.concat( {text: todoText}));
      setTodoText("");
      
    }
  }

  const handleRenderLsitItem = ({item}) => {
    
    return <View style={styles.item}>
            <Text style={styles.title}>{item.text}</Text>
          </View>
  }
  return (
    <View style={styles.container} >
    
      <View>
        <TextInput 
          placeholder='Escribe tu palabra' 
          style={styles.textInput}
          placeholderTextColor="#C4C4C4"
          value={todoText}
          onChangeText={handleChangeText}
          />
        <Button 
          title='Enter' 
          onPress={handleButtonPress}
          style={styles.button}
          />
      </View>
      <View>
        <FlatList 
          data={todoListData}
          renderItem={handleRenderLsitItem}
          keyExtractor={(item) => item.text}
          />
      </View>
    
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#FFFBFB",
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 12,
    paddingRight: 12,
    
  },
  textInput:{
    backgroundColor:"#F5F5F5",
    color: "#212121",
    fontSize: 18,
    marginBottom: 16
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
})

export default TodoListScreen;