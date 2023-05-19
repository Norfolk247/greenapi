export const getStateInstance = (idInstance,ApiToken) => {
    return fetch(`https://api.green-api.com/waInstance${idInstance}/getStateInstance/${ApiToken}`)
}
export const sendMessage = (phoneNumber,text2message) => {
    const idInstance = sessionStorage.getItem('idInstance')
    const ApiToken = sessionStorage.getItem('token')
    const url = `https://api.green-api.com/waInstance${idInstance}/SendMessage/${ApiToken}`
    return fetch(url,{
        headers:{'content-type': 'application/json'},
        method: 'POST',
        body: JSON.stringify({chatId:`${phoneNumber}@c.us`,message:text2message}),
    })
}
export const loadHistory = async (phoneNumber,count) => {
    const idInstance = sessionStorage.getItem('idInstance')
    const ApiToken = sessionStorage.getItem('token')
    const url = `https://api.green-api.com/waInstance${idInstance}/GetChatHistory/${ApiToken}`
    const response = await fetch(url,{
        method: 'POST',
        body: JSON.stringify({chatId:`${phoneNumber}@c.us`,count:count})
    })
    if (response.ok) {
        return response.json();
    }
    return undefined
}
export const receiveNotification = async () => {
    const idInstance = sessionStorage.getItem('idInstance')
    const ApiToken = sessionStorage.getItem('token')
    const response = await fetch(`https://api.green-api.com/waInstance${idInstance}/ReceiveNotification/${ApiToken}`)
    return response.json()
}
export const deleteNotification = async (receiptId) => {
    const idInstance = sessionStorage.getItem('idInstance')
    const ApiToken = sessionStorage.getItem('token')
    const response = await fetch(`https://api.green-api.com/waInstance${idInstance}/DeleteNotification/${ApiToken}/${receiptId}`,{
        method: 'DELETE'
    })
    return response.json()
}