import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { UserContextProvider } from "./context/user-context";
import { DeviceContextProvider } from "./context/device-width-context";
import { ProfileContextProvider } from "./context/profile-context";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <React.StrictMode>
      <GoogleOAuthProvider clientId="64115452199-2ud8640n1re07pnuldg9384ij6mcnfrn.apps.googleusercontent.com">
         <BrowserRouter>
            <UserContextProvider>
               <DeviceContextProvider>
                  <ProfileContextProvider>
                     <App />
                  </ProfileContextProvider>
               </DeviceContextProvider>
            </UserContextProvider>
         </BrowserRouter>
      </GoogleOAuthProvider>
   </React.StrictMode>
);


reportWebVitals();
