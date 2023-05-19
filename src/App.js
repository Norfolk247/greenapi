import './app.css'
import MessageController from "./components/messageController";
import {createContext, useState} from "react";
import Auth from "./components/auth";
import Chat from "./components/chat";

export const ChatsContext = createContext({chats:[{number: ''}],setChats:()=>{}})

function App() {
    const [isAuth,setIsAuth] = useState(false)
    const [chats,setChats] = useState([])
    const [currentChat, setCurrentChat] = useState('')

    return (
        <ChatsContext.Provider value={{chats:chats,setChats:setChats}}>
            <div style={{width:'100vw',height:'100vh',backgroundColor:'#eae6df',position:'absolute',top:0,left:0}}></div>
            <div style={{width:'100%',height:'127px',backgroundColor:'#00a884',position:'absolute',top:0,left:0}}></div>
            <div className='app'>
                {isAuth ?
                    <div style={{display:"flex",height:'800px'}}>
                        <MessageController maxWidth={'30%'} setCurrentChat={setCurrentChat}/>
                        <Chat currentChat={currentChat}/>
                    </div>
                    :
                    <Auth setIsAuth={setIsAuth}/>
                }
            </div>
        </ChatsContext.Provider>
    );
}

export default App;
