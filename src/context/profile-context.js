import { createContext, useState } from "react";

export const ProfileContext = createContext({
   profile: null,
   setProfile: () => null,
});

export const ProfileContextProvider = ({ children }) => {
   const [profile, setProfile] = useState(null);

   return (
      <ProfileContext.Provider value={{ profile, setProfile }}>
         {children}
      </ProfileContext.Provider>
   );
};
