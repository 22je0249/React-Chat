import React from 'react'
import "./detail.css"
import { auth } from '../../lib/firebase'
const Detail = () => {
  return (
    <div className='detail'>
      <div className="user">
        <img src="./avatar.png" alt=""/>
        <h2>
          Pavan Kumar
        </h2>
        <p>kfiwuwiowekiikie</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt=""/>

          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt=""/>

          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy help</span>
            <img src="./arrowUp.png" alt=""/>
            
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Photos</span>
            <img src="./arrowDown.png" alt=""/>
            
          </div>
          <div className="photos">
            <div className="photoItems">
              <div className="photoDetail">
              <img src='./avatar.png' alt=''></img>
              <span>photo_20204_2.png</span>
            </div>
            <img src='./download.png' alt='' className='icon'></img>
            </div>
            <div className="photoItems">
              <div className="photoDetail">
              <img src='./avatar.png' alt=''></img>
              <span>photo_20204_2.png</span>
            </div>
            <img src='./download.png' alt='' className='icon'></img>
            </div>
            <div className="photoItems">
              <div className="photoDetail">
              <img src='./avatar.png' alt='' ></img>
              <span>photo_20204_2.png</span>
            </div>
            <img src='./download.png' alt='' className='icon'></img>
            </div>
            <div className="photoItems">
              <div className="photoDetail">
              <img src='./avatar.png' alt='' ></img>
              <span>photo_20204_2.png</span>
            </div>
            <img src='./download.png' alt='' className='icon'></img>
            </div>
            
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" alt=""/>
            
          </div>
        </div>
      <button>Block User</button>
      <button className='logout' onClick={()=> auth.signOut()}>Logout</button>
      </div>
    </div>
  )
}

export default Detail