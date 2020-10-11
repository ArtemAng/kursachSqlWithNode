import * as actionTypes from '../actions/actionTypes'

const initState = {
    cities: [
        { id: 1, cityName: 'Minsk' },
        { id: 2, cityName: 'Dzerjynsk' }
    ],
    trains: [
        { id: 1, numberTrain: 111, routeNumber: 111 }
    ],
    routes: [
        { id: 1, routeNumber: 1, finishCity: 'Dzerjynsk', startCity: 'Minsk' }
    ],
    clients: [
        { id: 1, fName: 'Andrew', lName: 'Petrov', cardnumber: '1112231', ticketId: 1 },
        { id: 2, fName: 'Aleksandr', lName: 'Petrov', cardnumber: '778865822', ticketId: 2 }
    ],
    tickets: [
        { id: 1, personId: 1, RouteId: 1, Number: 123 }
    ]

}

export default function Reducer(state = initState, action) {
    switch (action.type) {
        case actionTypes['ONADDTRAIN']:
            console.log('ONADDTRAIN', action.payload);
            return state;
        case actionTypes['ONADDCITY']:
            console.log('ONADDCITY', action.payload);
            return state;
        case actionTypes['ONADDROUTE']:
            console.log('ONADDROUTE', action.payload);
            return state;
        case actionTypes['ONADDPERSON']:
            console.log('ONADDPERSON', action.payload);
            return state;
        case actionTypes['ONADDTICKET']:
            console.log('ONADDTICKET', action.payload);
            return state;
        case actionTypes['ONCITYSWITCH']:
            console.log('ONCITYSWITCH');
            return state;
        case actionTypes['ONROUTESWITCH']:
            console.log('ONROUTESWITCH');
            return state;
        default:
            return state;
    }
}