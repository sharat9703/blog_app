import {createContext,useEffect,useState} from 'react';
import Axios from 'axios';

export const AuthContext = createContext()

export const AuthContextProvider = ({children})=>{
  const [currentUser, SetcurrentUser] = useState(JSON.parse(localStorage.getItem("user"))||null)  
  const login = async(inputs) =>{
     const res = await Axios.post("http://localhost:8500/api/auth/login",inputs);
     SetcurrentUser(res.data);
  } 
  const logout = async()=>{
    await Axios.post("http://localhost:8500/api/auth/logout");
    SetcurrentUser(null);
  }
  useEffect(()=>{
     localStorage.setItem("user",JSON.stringify(currentUser));
  },[currentUser]);

  return (
    <AuthContext.Provider value={{currentUser,login,logout}}>
      {children}
    </AuthContext.Provider>
  )
} 