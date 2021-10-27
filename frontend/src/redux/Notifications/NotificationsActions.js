import types from '../Types'

export const setNotification =(notif)=>({
    type: types.SET_NOTIFICATION,
    payload:{...notif}
})

export const clearNotification =()=>({
    type:types.CLEAR_NOTIFICATIONS,
    
})