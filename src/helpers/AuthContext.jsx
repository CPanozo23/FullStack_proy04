import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authenticatedUser, setAuthenticatedUser] = useState(null);
  const [permissions, setPermissions] = useState([]);

  return (
    <AuthContext.Provider value={{ authenticatedUser, setAuthenticatedUser, permissions, setPermissions }}>
      {children}
    </AuthContext.Provider>
  );
};
