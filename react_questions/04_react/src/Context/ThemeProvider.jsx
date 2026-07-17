import React, {createContext, useContext, useState} from 'react';
// 1. Initialize the context with a default value
const ThemeContext = createContext(null)

// 2. Create a custom provider component
export const ThemeProvider = ({children}) => {

    const [theme, setTheme]= useState('light')

    const toggleTheme = ()=>{
        setTheme((prevTheme)=>(prevTheme === 'light' ? 'dark' : 'light'))
    }

   // Pass state and functions down through the value prop
   return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 3. Create a clean custom hook for consumers

export const useTheme =()=>{
    const context = useContext(ThemeContext)
    if(!context){
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}




