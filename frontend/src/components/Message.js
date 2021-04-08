import React from 'react';
import './Message.css'

function Message({children}) {
    return (
        <div className="alert">
            {children}
        </div>
    );
  }
  
export default Message;