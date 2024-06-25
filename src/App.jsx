import React, { createContext, useState } from 'react';
import { Outlet } from "react-router-dom";
import Header from './Component/Header/Header';

export const UserContext = createContext(null);

function App() {
  const [userId, setUserId] = useState(null);
  
  return (
    <UserContext.Provider value={{ userId, setUserId}}>
      <div className="App">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
}

export default App;
