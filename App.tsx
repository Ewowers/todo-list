import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  Button,
  View,
  TouchableHighlight,
  FlatList,
} from "react-native";

export default function App() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]);
  const press = () => {
    setTodos([...todos, todo]);
    setTodo("");
  };
  console.log("------");
  return (
    <View style={{ marginTop: 20 }}>
      <View style={styles.view}>
        <TextInput
          value={todo}
          onChangeText={setTodo}
          style={styles.input}
          placeholder="Задача"
        />
        <TouchableHighlight style={styles.button} onPress={press}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableHighlight>
      </View>
      {todos.map((item: string, i: number) => (
        <TodoItem title={item} />
      ))}
    </View>
  );
}
interface todoProps {
  title: string;
}
const TodoItem = (props: todoProps) => {
  const { title } = props;
  return (
    <View style={styles.todoView}>
      <Text style={styles.todo}>{title}</Text>
      <TouchableHighlight style={styles.todoButton}>
        <Text style={{ fontSize: 18, color: "#fff" }}>x</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: "80%",
    height: 40,
    margin: 12,
    borderWidth: 0.5,
    padding: 10,
    borderRadius: 5,
  },
  button: {
    height: 40,
    width: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 24,
    color: "#fff",
  },
  view: {
    flexDirection: "row",
    alignItems: "center",
  },
  todo: {
    width: "80%",
    paddingLeft: 12,
    marginLeft: 12,
    marginRight: 12,
    borderBottomWidth: 0.5,
    borderRadius: 5,
  },
  todoView: {
    flexDirection: "row",
    marginBottom: 5,
  },
  todoButton: {
    height: 30,
    width: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    borderRadius: 5,
    padding: 0,
    margin: 0,
  },
});
