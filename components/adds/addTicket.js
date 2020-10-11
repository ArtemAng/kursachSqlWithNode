import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import RoutesComboBox from '../comboBoxes/RoutesComboBox'
import { Button, Input } from '@material-ui/core';
import ClientComboBox from '../comboBoxes/ClientComboBox';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/actions';
import { route } from 'next/dist/next-server/server/router';

const useStyles = makeStyles({
  root: {
    width: 275,
    height: 400,
    margin: 'auto'
  },
  submitBtn: {
    
  }
});

function AddTicket({routes, clients, onAddTicket}) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const [client, setClient] = useState('');
  const [lname, setlname] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [routeNameSelected, setCityName] = useState('');

  const ChangeRouteSelected = (value)=> {
    setCityName(value);
  }
  const ChangeClientSelected = (value)=> {
    setClient(value);
  }
  return (
    <div className={'card'}>
      <RoutesComboBox routes = {routes} onRouteSwitch = {ChangeRouteSelected}/>
      <ClientComboBox clients = {clients} onclientsSwitch = {ChangeClientSelected}/>
      <Button className = 'train-submit-btn add-train-item' onClick={()=>onAddTicket({client: client, route: routeNameSelected})} color='secondary' variant='contained'> submit</Button>
      <style> 
        {
          `
          .add-train-item{
            margin-left: 5px;
          }
          .train-submit-btn{
            margin-top: 0px;
          }
          .train-input-number{
            margin-top: 16px;
          }
          .card{
            margin-left: 67%;
          }
          `
        }
      </style>
    </div>
  );
}


const mapStateToProps = (state) =>{
  console.log(state);
  return{
    routes: state.routes,
    clients: state.clients
  }
}

const mapDispatchToProps = (dispatch)=>{
  const {onAddTicket} = bindActionCreators(actions, dispatch)
  return{
    onAddTicket: (payload)=>onAddTicket(payload) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTicket)