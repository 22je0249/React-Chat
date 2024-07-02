import { useEffect, useState } from 'react'

import List from './components/list/List'
import Chat from './components/chat/Chat'
import Detail from './components/detail/Detail'
import Login from './components/login/Login'
import Notification from './components/notification/Notification'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './lib/firebase'
import {useUserStore} from './lib/userStore'

function App() {
  const [count, setCount] = useState(0)
    const{currentUser, isLoading, fetchUserInfo}= useUserStore();

    useEffect(()=>{
      const unSub = onAuthStateChanged(auth,(user)=>{
        fetchUserInfo(user?.uid)
      });
      return ()=>{
        unSub();
      };
    },[fetchUserInfo]);

    console.log(currentUser);
    if(isLoading) return  <div className="loading">Loading</div>
  return (
  
      <div className='container'>
        {currentUser ? (
        <>
       <List/>
       <Chat/>
       <Detail  />
        </>
         ) :(
          <Login/>
        )}
        <Notification/>
      </div>
      
  
  )
}

export default App