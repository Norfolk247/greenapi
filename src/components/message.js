import React from 'react';
import './message.css'

const Message = ({number,setCurrentChat}) => {
    number = number + ''
    const formattedNumber = `+${number.slice(0,number.length-10)} ${number.slice(-10,-7)} ${number.slice(-7,-4)}-${number.slice(-4,-2)}-${number.slice(-2)}`
    const onClickHandler = () => {
        setCurrentChat(number)
    }

    return (
        <div className='msg' onClick={onClickHandler}>
            {formattedNumber}
        </div>
    );
};

export default Message;