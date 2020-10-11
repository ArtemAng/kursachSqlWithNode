import * as actionTypes from './actionTypes';


export const onAddTrain = (payload)=>({type: actionTypes['ONADDTRAIN'], payload})
export const onAddCity = (payload)=>({type: actionTypes['ONADDCITY'], payload})
export const onAddRoute = (payload)=>({type: actionTypes['ONADDROUTE'], payload})
export const onAddClient = (payload)=>({type: actionTypes['ONADDPERSON'], payload})
export const onAddTicket = (payload)=>({type: actionTypes['ONADDTICKET'], payload})


export const onCitySwitch = (payload)=>({type: actionTypes['ONCITYSWITCH'], payload})
export const onRouteSwitch = (payload)=>({type: actionTypes['ONROUTESWITCH'], payload})