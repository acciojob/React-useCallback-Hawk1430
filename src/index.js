import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { ListContextProvider } from "./components/ListContext";



ReactDOM.render(
    <ListContextProvider>
        <App/>
    </ListContextProvider>, 
    document.getElementById("root"));
