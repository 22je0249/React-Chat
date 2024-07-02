import React, { useState } from 'react'
import "./addUser.css"
import { db } from '../../../../lib/firebase'
import { arrayUnion, collection,getDoc,  getDocs, query, serverTimestamp, setDoc, updateDoc, where } from 'firebase/firestore'
import { create } from 'zustand'
import { doc } from 'firebase/firestore'
import { useUserStore } from '../../../../lib/userStore'

const AddUser = () => {
const [user,setUser]= useState(null)
const {currentUser}= useUserStore();
const handleSearch=  async e=>{
    e.preventDefault()
    const formData = new FormData(e.target)
    const username= formData.get("username")

    try{
        const userRef = collection(db, "users");

        // Create a query against the collection.
        const q = query(userRef, where("username", "==", username));
       const querySnapShot =await getDocs(q)
       if(!querySnapShot.empty){
setUser(querySnapShot.docs[0].data());
       }
    }catch(err){
        console.log(err)

    }
};

const handleAdd = async ()=>{
    const chatRef= collection(db, "chats");
    const userChatRef= collection(db, "userchats")

    try{
    const newChatRef= doc(chatRef)
    await setDoc(newChatRef,{
        createdAt: serverTimestamp(),
        messages: [],

    });
    await updateDoc(doc(userChatRef, user.id),{
        chats:arrayUnion({
            chatId:  newChatRef.id,
            lastMessage:"",
            recieverId: currentUser.id,
            updateAt: Date.now(),
        }),
    });
    await updateDoc(doc(userChatRef, currentUser.id),{
        chats:arrayUnion({
            chatId:  newChatRef.id,
            lastMessage:"",
            recieverId: user.id,
            updateAt: Date.now(),
        }),
    });

    }catch(err){
        console.log(err);
    }
}

  return (
    
        <div className='addUser'>
        <form onSubmit={handleSearch}>
            <input type='text' placeholder='username' name='username' />
            <button>Search</button>
        </form>
        {user && <div className="user">
            <div className="detail">
                <img src={user.avatar || './avatar.png'} alt=''/>
                <span>{user.username}</span>

            </div>
            <button onClick={handleAdd}>Add User</button>
        </div>}
    </div>
    
  )
}

export default AddUser