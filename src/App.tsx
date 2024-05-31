import { useMediaQuery } from "@mui/material";
import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import WebRoutes from './routes';
import { Provider } from "react-redux";
import store from "./store/store";

export const MobileContext = React.createContext<{ isMobile: boolean }>({
  isMobile: false,
});


function App() {

  const matches = useMediaQuery("(max-width:900px)");

  return (
    <BrowserRouter>
       <Provider store={store}>
      <MobileContext.Provider value={{ isMobile: matches }}>
        <WebRoutes />
      </MobileContext.Provider>
      <Toaster />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
