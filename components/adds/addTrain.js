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

function AddTrain({routes, onAddTrain}) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const [numberTrain, setNumberTrain] = useState('');
  const [cityNameSelected, setCityName] = useState('');

  const ChangeRouteSelected = (value)=> {
    console.log(value)
    setCityName(value);
  }

  const ChangeNumTrain = (e)=> {
    setNumberTrain(e.target.value);
  }
  return (
    <div className={'card'}>
      <RoutesComboBox routes = {routes}  onRouteSwitch = {ChangeRouteSelected}/>
      <Input className = 'train-input-number add-train-item' onChange = {ChangeNumTrain} placeholder='номер поезда' color='primary' />
      <Button className = 'train-submit-btn add-train-item' onClick={()=>onAddTrain({numberTrain: numberTrain, route: cityNameSelected })} color='secondary' variant='contained'> submit</Button>
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
  const {onAddTrain} = bindActionCreators(actions, dispatch)
  console.log(onAddTrain);
  return{
    onAddTrain: (payload)=>onAddTrain(payload) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTrain)