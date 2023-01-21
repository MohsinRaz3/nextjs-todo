"use client";
import {
  ChakraProvider,
  Heading,
  Container,
  Button,
  Input,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

async function addTodo(name, refresh) {
  await fetch(`/api/todo/add`, {
    method: "POST",
    body: JSON.stringify({ name }),
  });
  refresh();
}

export default function AddNewTodo() {
  const router = useRouter();
  let [name, setName] = useState("");
  return (
    <ChakraProvider>
      <Container
        w="100%"
        h="200px"
        bgGradient="linear(red.100 0%, orange.100 25%, yellow.100 50%)"
      >
        <Heading my="40px" py="25px">
          TODO-LIST CHAKRA-UI
        </Heading>
        <Input
          type="text"
          variant="filled"
          htmlSize={26}
          width="auto"
          placeholder="Add Todo Here"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <Button
          colorScheme="teal"
          size="sm"
          onClick={async () => {
            await addTodo(name, router.refresh);
            setName("");
          }}
        >
          Add
        </Button>
      </Container>
    </ChakraProvider>
  );
}
