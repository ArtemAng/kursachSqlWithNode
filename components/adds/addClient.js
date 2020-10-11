import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import RoutesComboBox from '../comboBoxes/RoutesComboBox'
import { Button, Input } from '@material-ui/core';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/actions';

const useStyles = makeStyles({
  root: {
    width: 275,
    height: 400,
    margin: 'auto'
  },
  submitBtn: {
    
  }
});

function AddClient({routes, onAddClient}) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const [fname, setfname] = useState('');
  const [lname, setlname] = useState('');
  const [cardNumber, setCardNumber] = useState('');

  const ChangeRouteSelected = (value)=> {
    console.log(value)
    setCityName(value);
  }

  const ChangeFName = (e)=> {
    setfname(e.target.value);
  }
  const ChangeLName = (e)=> {
    setlname(e.target.value);
  }
  const ChangeCardNumber = (e)=> {
    setCardNumber(e.target.value);
  }
  return (
    <div className={'card'}>
      <Input className = 'train-input-number add-train-item' onChange = {ChangeFName} placeholder='фамилия' color='primary' />
      <Input className = 'train-input-number add-train-item' onChange = {ChangeLName} placeholder='имя' color='primary' />
      <Button className = 'train-submit-btn add-train-item' onClick={()=>onAddClient({fname: fname, lname: lname, cardNumber: cardNumber})} color='secondary' variant='contained'> submit</Button>
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
    routes: state.routes
  }
}

const mapDispatchToProps = (dispatch)=>{
  const {onAddClient} = bindActionCreators(actions, dispatch)
  return{
    onAddClient: (payload)=>onAddClient(payload) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddClient)