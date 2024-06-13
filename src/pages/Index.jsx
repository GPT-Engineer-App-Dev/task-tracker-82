import { useState } from "react";
import { Container, VStack, HStack, Input, Button, Text, Checkbox, IconButton } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} w="100%">
        <HStack w="100%">
          <Input
            placeholder="Add a new todo"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <Button onClick={addTodo} colorScheme="teal">
            Add
          </Button>
        </HStack>
        {todos.map((todo, index) => (
          <HStack key={index} w="100%" p={2} borderWidth={1} borderRadius="md" justifyContent="space-between">
            <Checkbox isChecked={todo.completed} onChange={() => toggleTodo(index)}>
              <Text as={todo.completed ? "del" : undefined}>{todo.text}</Text>
            </Checkbox>
            <IconButton
              aria-label="Delete"
              icon={<FaTrash />}
              onClick={() => deleteTodo(index)}
              colorScheme="red"
            />
          </HStack>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;