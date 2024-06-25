import React, { createContext, useState } from 'react';
import { Outlet } from "react-router-dom";
export const UserContext = createContext(null);

function App() {
  const [userId, setUserId] = useState(null);
  
  return (
    <UserContext.Provider value={{ userId, setUserId}}>
      <div className="App">
        <Outlet />
      </div>
    </UserContext.Provider>
  );
}

export default App;
