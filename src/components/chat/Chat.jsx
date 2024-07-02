import React, { useEffect, useRef } from 'react'
import { useState } from 'react';
import "./chat.css"
import  EmojiPicker from "emoji-picker-react";
const Chat = () => {
  const [open,setOpen]= useState(false);
  const [text,setText]= useState("");
  const endRef = useRef(null)
  useEffect(()=>(
    endRef.current?.scrollIntoView({behavior: "smooth"})
  ),[])
  const handleEmoji = e=>{
    setText((prev)=> prev+ e.emoji);
    setOpen(false)
  }
  return (
    <div className='chat'>
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt=""/>
          <div className="texts">
            <span>Pavan Kumar</span>
            <p>
              jhfkhku3k3fbk24bk
            </p>
          </div>
        </div>
        <div className="icons">
        <img src="./phone.png" alt=""/>
        <img src="./video.png" alt=""/>
        <img src="./info.png" alt=""/>
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt=""/>
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, cupiditate molestiae minima expedita non numquam quisquam, suscipit molestias dolorum, ipsum reprehenderit ipsa ipsam a ea exercitationem nisi deleniti maxime. Autem!
            </p>
            <span>1min ago</span>
          </div>
        </div>
        <div className="message own">
          
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, cupiditate molestiae minima expedita non numquam quisquam, suscipit molestias dolorum, ipsum reprehenderit ipsa ipsam a ea exercitationem nisi deleniti maxime. Autem!
            </p>
            <span>1min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt=""/>
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, cupiditate molestiae minima expedita non numquam quisquam, suscipit molestias dolorum, ipsum reprehenderit ipsa ipsam a ea exercitationem nisi deleniti maxime. Autem!
            </p>
            <span>1min ago</span>
          </div>
        </div>
        <div className="message own">
           
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, cupiditate molestiae minima expedita non numquam quisquam, suscipit molestias dolorum, ipsum reprehenderit ipsa ipsam a ea exercitationem nisi deleniti maxime. Autem!
            </p>
            <span>1min ago</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>
      <div className="bottom">
      <div className="icons">
      <img src="./img.png" alt=""/>
      <img src="./camera.png" alt=""/>
      <img src="./mic.png" alt=""/>
    
      </div>
      <input type='text' placeholder='Type a message....' value={text} onChange={(e)=> setText(e.target.value)}></input>
      <div className="emoji">
      <img src="./emoji.png" alt="" onClick={() => setOpen((prev) => !prev)}/>
      <div className="picker">
      <EmojiPicker open={open} onEmojiClick={handleEmoji}/>
      </div>
      </div>
      <button className='sendButton'>Sender</button>
      </div>
    </div>
  )
}

export default Chat