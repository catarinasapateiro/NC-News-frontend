import { createContext, useState } from "react";

export const AccountContext = createContext(null);

export const AccountProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState([
    {
      username: "tickle122",
      name: "Tom Tickle",
      avatar_url:
        "https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953",
    },
  ]);
  return (
    <AccountContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      {children}
    </AccountContext.Provider>
  );
};
