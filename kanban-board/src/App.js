import React from "react"
import List from "./components/List/List"
import { useState } from "react"
import { v4 as uuid } from "uuid"
import store from "./utils/store"
import StoreApi from "./utils/storeApi"
import InputContainer from "../src/components/Input/InputContainer"
import { makeStyles } from "@material-ui/core/styles"
import { DragDropContext, Droppable } from "react-beautiful-dnd"
import LoginForm from  "./components/LoginForm/LoginForm"
import RegisterForm from "./components/RegisterForm/RegisterForm"
import AuthContextProvider from './contexts/AuthContext';
import CardComponent from "./components/Card/CardComponent"

const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    minHeight: "100vh",
    background: "#C4D7E0",
    width: "100%",
    overflowY: "auto",
  },
}))

function App() {
  
  return (
    <CardComponent/>
  )
}
export default App
