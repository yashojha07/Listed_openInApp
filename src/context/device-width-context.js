import { createContext, useState, useEffect } from "react";

export const DeviceContext = createContext({
   isMobile: null,
   setIsMobile: () => null,
});

export const DeviceContextProvider = ({ children }) => {
   const [isMobile, setIsMobile] = useState(false);

   useEffect(() => {
      if (window.innerWidth < 900) {
         setIsMobile(true);
      }
   }, []);

   return (
      <DeviceContext.Provider value={{ isMobile, setIsMobile }}>
         {children}
      </DeviceContext.Provider>
   );
};
