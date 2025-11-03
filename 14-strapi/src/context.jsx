import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({children}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [pageId, setPageId] = useState(null);

    const closeSidebar = () => {
      setIsSidebarOpen(false);
    }

    const openSidebar = () => {
      setIsSidebarOpen(true);
    }

    return (
        <AppContext.Provider value={{isSidebarOpen, closeSidebar, openSidebar, pageId, setPageId}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
  return useContext(AppContext);
}
