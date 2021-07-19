/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Button,
    ScrollView,
    Dimensions,
    Switch
} from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { RadioButton } from "react-native-paper";
import { SelectMultipleButton, SelectMultipleGroupButton } from 'react-native-selectmultiple-button';
//  import AppBar from "./src/components/AppBar";
//  import Todo from "./src/components/Todo";
//  import TodoList from "./src/components/TodoList";


const Todo = (props) => {
    //console.log(props.todo, "logging props");
    return (
        <View style={styles.listTile}>
            
            <BouncyCheckbox fillColor = "green" unfillColor = "#FFFFFF" iconStyle={{ borderColor: "grey" }} onPress={() => props.checkTodo(props.todo.key)} />
            {/* <SelectMultipleButton
                multiple={true}
                value={interest}
                selected={this.state.multipleSelectedData.includes(interest)}
                singleTap={(valueTap) => this._singleTapMultipleSelectedButtons(interest)} /> */}
            {/* <Icon
          name={props.todo.isChecked ? "check-circle" : "radio-button-unchecked"}
          style={styles.leading}
          size={20}
          color="#666666"
          onPress={() => props.checkTodo(props.todo.key)}
        /> */}
            <Text style={styles.title}>{props.todo.name}</Text>
            <Button
                name="delete"
                style={styles.trailing}
                size={20}
                color="#666666"
                onPress={() => props.deleteTodo(props.todo.key)}
                title="delete"></Button>
        </View>
    );
}

export default function App() {
    const [title, setTitle] = useState("");

    // iniitalize empty object todo
    const [todo, setTodo] = useState({});

    // Initalize empty array to store todos
    const [todos, setTodos] = useState([]);

    // function to add todo object in todo list
    const addTodo = () => {
        if (title.length > 0) {
            // Add todo to the list
            setTodos([...todos, { key: Date.now(), name: title, isChecked: false }]);
            // clear the value of the textfield
            setTitle("");
        }
    };

    // function to mark todo as checked or unchecked
    const checkTodo = id => {
        // loop through todo list and look for the the todo that matches the given id param
        // update the state using setTodos function
        setTodos(
            todos.map(todo => {
                if (todo.key === id) {
                    todo.isChecked = !todo.isChecked;
                    console.log("is checked: " + todo.isChecked)
                }
                return todo;
            })
        );
    };

    // function to delete todo from the todo list
    const deleteTodo = id => {
        // loop through todo list and return todos that don't match the id
        // update the state using setTodos function
        setTodos(todos.filter(todo => {
            return todo.key !== id;
        }));
    };

    useEffect(() => {
        console.log(todos.length, "TodoList length");
        //console.log(todos);
    }, [todos]);

    return (
        <View style={styles.container}>
            <View style={styles.statusBar}></View>
            {/* <AppBar /> */}
            <View style={styles.todo}>
                
                <TextInput
                    placeholder="Add a todo"
                    value={title}
                    onChangeText={value => setTitle(value)}
                    style={styles.textbox}
                />
                <Button title="Add" color="#7F39FB" onPress={() => addTodo()} />
            </View>

            <ScrollView>
                {todos.map(todo => (
                    <Todo
                        key={todo.key}
                        todo={todo}
                        checkTodo={checkTodo}
                        deleteTodo={deleteTodo}
                    />
                ))}
            </ScrollView>
        </View>
    );
}
const { height } = Dimensions.get('window')
const { width } = Dimensions.get('window')
const styles = StyleSheet.create({
    statusBar: {
        backgroundColor: "#7F39FB",
        color: "#fff",
        width: "100%",
        height: height * 0.09,
        marginBottom: height * 0.01,
        alignItems: "center",
        justifyContent: "center",

        //  marginTop: height*0.07,

    },
    checkbox: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    statusBarText: {
        position: 'absolute',
        color: "white",
        bottom: 0,
        fontSize: 34,
        textAlign: "center",
    },
    container: {
        flex: 1,

        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "flex-start"
    },
    todo: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    textbox: {
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "#7F39FB",
        borderRadius: 8,
        padding: 10,
        margin: 10,
        width: "80%"
    },
    listTile: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "white",
        padding: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: "#666666"
    },
    leading: {
        width: "20%"
    },
    title: {
        width: "60%",
        fontSize: 18
    },
    trailing: {
        width: "20%"
    }
});
 // import React, {useState} from 'react';
 // import { Text, View, Button, ScrollView, StyleSheet, Dimensions, Switch } from 'react-native';

 // let id = 0

 // const Todo = props => (
 //  <View style={styles.todoContainer}>
 //    <Switch value={props.todo.checked} onValueChange={props.onToggle} />
 //    <Button onPress={props.onDelete} title = "delete" />
 //    <Text>{props.todo.text}</Text>
 //  </View>
 //   )



 // const App = () => {

 //  const [todos, setTodos] = useState([])
 //  const addTodo = () => {
 //   id++
 //   const text = TODO number ${id}
 //   setTodos({
 //    todos: [
   //     ...todos,
//     {id: id, text: text, checked: false},
//    ],
//   })
//  } 

//  const toggleTodo = (id) => {
//   setTodos({
//    todos: todos.map(todo => {
//     if (todo.id != id) return todo
//     return {
//      id: todo.id,
//      text: todo.text,
//      checked: !todo.checked
//     }
//    })
//   })
//  } 

//  const removeTodo = (id) => {
//   setTodos({
//    todos: [
//     {todos}.filter(todo => todo.id !== id)
//    ]

//   })
//   console.log(todos)
//  } 

//  return (
//   <View style = {styles.appContainer}>
//    {/* <Text>Todo count: {todos.length}</Text>
//    <Text>Unchecked todo count: {todos.filter(todo => !todo.checked).length}</Text> */}
//    <Button onPress = { () => addTodo() } title = "Add TODO"/>
//    <ScrollView>
//     {todos.flatList(todo => (<Todo 
//      onToggle = {() => toggleTodo(todo.id)} 
//      onDelete = {() => removeTodo(todo.id)}
//      todo = {todo}
//     />))}
//    </ScrollView>
//   </View>

//  )


// }
// const {height} = Dimensions.get('window')
// const {width} = Dimensions.get('window')

// const styles = StyleSheet.create({  
//   appContainer: {
//  flex: 1,
//  paddingTop:  height * 0.07,
//  marginHorizontal: width * 0.03,

//   },
//   todoContainer: {
//  flexDirection: 'row',
//     alignItems: 'center',

//   }

// }) 

// export default App;