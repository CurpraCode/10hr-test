import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "pages/Home";


function App() {
  return (
   <BrowserRouter>
   <ChakraProvider>
     <Routes>
       <Route path="/" element={<Home/>}/>
     </Routes>
   </ChakraProvider>
   </BrowserRouter>
  );
}

export default App;
