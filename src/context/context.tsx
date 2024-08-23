import React, {
  createContext,
  useState,
  ReactNode,
  useReducer,
  useContext,
} from "react";
import { userReducer, initialUserState } from "./reducers/userReducer";

interface Provider {
  children: ReactNode;
}

export const Context = createContext<{}>({});

export const useUserContext: any = () => useContext(Context);

const Provider = ({ children }: Provider) => {
  const [userState, userDispatch] = useReducer(userReducer, initialUserState);
  const [userData, setUserData] = useState<any>(null);

  return (
    <Context.Provider
      value={{
        userState,
        userDispatch,
        userData,
        setUserData,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;
