import React, {useState} from 'react';
import './auth.css'
import {getStateInstance} from "../api";

const Auth = ({setIsAuth}) => {
    const [id,setId] = useState('')
    const [token,setToken] = useState('')
    const [error,setError] = useState('')

    const onClickHandler2 = e => {
        getStateInstance(id,token).then(()=>{
            setError('')
            setIsAuth(true)
            sessionStorage.setItem('idInstance',id)
            sessionStorage.setItem('token',token)
        }).catch(()=>{
            setError('Ошибка входа')
        })
    }
    return (
        <div className='auth'>
            <div className='form'>
                <input placeholder='ID Instance' value={id} onChange={e=>setId(e.target.value)}/>
                <input type="password" placeholder='API Token' value={token} onChange={e=>setToken(e.target.value)}/>
                <button onClick={onClickHandler2}>Войти</button>
                <div className='error'>{error}</div>
            </div>
        </div>
    );
};

export default Auth;