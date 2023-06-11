import { createRoot } from "react-dom/client";
import {
  createBrowserRouter
} from "react-router-dom";
import App from "./App";
import Signup from "./components/Signup"
import Signin from "./components/Signin"
import Form from "./components/Form"




const router = createBrowserRouter([
    {
      path: "/",
      element: 
        <Signup/>
    },
    {
        path: "/signin",
        element: 
          <Signin/>
      },
      {
        path: "/form",
        element: 
          <Form/>
      }
  ]);
  
  
  export default router