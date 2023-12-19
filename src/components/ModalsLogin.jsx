import React, { useState } from "react";
import {
  ChakraProvider,
  CSSReset,
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  Heading,
} from "@chakra-ui/react";

const ModalsLogin = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Login</ModalHeader>
        <ModalBody>
          <FormControl>
            <FormLabel>Username</FormLabel>
            <Input type="text" placeholder="Enter your username" mb={4} />
            <FormLabel>Password</FormLabel>
            <Input type="password" placeholder="Enter your password" mb={4} />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="teal" mr={3}>
            Login
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalsLogin;
