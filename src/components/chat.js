import React, {useEffect, useState} from 'react';
import './chat.css'
import {deleteNotification, loadHistory, receiveNotification, sendMessage} from "../api";

const Chat = ({currentChat}) => {
    const [history,setHistory] = useState([])
    const update = () => loadHistory(currentChat,10).then(data=> {
        if (data) {
            setHistory(data)
        }
    })
    const receiveNotificationEffect = () => {
        return receiveNotification().then(data=>{
            if (data !== null) {
                if (data.body.senderData.chatId.slice(0,-5)===currentChat) {
                    update()
                }
                deleteNotification(data.receiptId)
            }
        })
    }
    const onKeyDownHandler = e => {
        if (e.key === 'Enter' && e.target.value !== '') {
            sendMessage(currentChat,e.target.value).then(update).catch(console.log).finally(()=>e.target.value = '')
        }
    }


    useEffect( ()=>{
        if (currentChat !== '') {
            update()
        }
    },[currentChat])

    useEffect(()=>{
        const interval = setInterval(receiveNotificationEffect,5000)
        return () => clearInterval(interval)
    })

    return (
        <div style={{flex:1,display:"flex",flexFlow:'column'}}>
            <div className='chat-header'></div>
            <div className='chat'>
                {history.map(message=><div key={message.idMessage} style={message.type === 'outgoing' ? {alignSelf:'flex-end',backgroundColor:'#dafdd4'} : {alignSelf:'flex-start',backgroundColor:'white'}} className='chat-msg'>{message.textMessage}</div>)}
            </div>
            <div className='chat-footer'>
                <input placeholder='Введите сообщение' onKeyDown={onKeyDownHandler}/>
            </div>
        </div>
    );
};

export default Chat;