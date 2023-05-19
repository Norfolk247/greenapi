import React, {useContext, useState} from 'react';
import './messageController.css'
import Message from "./message";
import {ChatsContext} from "../App";

const MessageController = ({maxWidth,setCurrentChat}) => {
    const {chats,setChats} = useContext(ChatsContext)
    const [newPhone,setNewPhone] = useState('')
    const onClickHandler = () => {
        setChats(prev=>[...prev, {number:newPhone}])
        setNewPhone('')
    }
    return (
        <div style={{maxWidth}} className='msgController'>
            <div className='msgController-header'>
                <input type='number' value={newPhone} onChange={event => setNewPhone(event.target.value)}/>
                <button onClick={onClickHandler}>Новый чат</button>
            </div>
            <div style={{overflowY:'scroll'}}>
                {chats.map(chat=><Message key={chat.number} number={chat.number} setCurrentChat={setCurrentChat}/>)}
            </div>
        </div>
    );
};

export default MessageController;