import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({
   user: null,
   setUser: () => null,
});

export const UserContextProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const navigate = useNavigate();

   useEffect(() => {
      console.log("User: ", user);
      if (user) {
         navigate("/home");
      }
   }, [user, navigate]);

   return (
      <UserContext.Provider value={{ user, setUser }}>
         {children}
      </UserContext.Provider>
   );
};
