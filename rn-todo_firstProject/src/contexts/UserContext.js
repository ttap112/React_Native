import { useContext, createContext, useState } from 'react';
import PropTypes from 'prop-types';

const UserContext = createContext();

export const useUserContext = () => UserContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.PropTypes = {
  Children: PropTypes.node,
};

export default UserContext;
