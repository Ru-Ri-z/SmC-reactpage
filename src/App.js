import React from "react";
import Navigation from "./navigator/Navigation";
import { SurfContextProvider } from './context'

const App = () => {
  return (
    <SurfContextProvider>
      <Navigation />
    </SurfContextProvider>
  )
};

export default App;
