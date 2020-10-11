import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CityComboBox from '../comboBoxes/CityComboBox'
import { Button, Input } from '@material-ui/core'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/actions'

const AddCity = ({onAddCity}) => {
  const [cityName, setCityName] = useState('');

  const ChangeCityName = (e) => {
    setCityName(e.target.value);
  }
  return (
    <div className={'card'}>
      <Input className='train-input-number add-train-item' onChange={ChangeCityName} placeholder='Название города' color='primary' />
      <Button className='train-submit-btn add-train-item' onClick={() => onAddCity({ cityName: cityName })} color='secondary' variant='contained'> submit</Button>
      <style>
        {
          `
            .add-city-item{
              margin-left: 5px;
            }
            .city-submit-btn{
              margin-top: 0px;
            }
            .city-input-number{
              margin-top: 16px;
            }
            .card{
              margin-left: 67%;
            }
            `
        }
      </style>
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    cities: state.cities
  }
}

const mapDispatchToProps = (dispatch) => {
  const { onAddCity } = bindActionCreators(actions, dispatch)
  console.log(onAddCity);
  return {
    onAddCity: (payload) => onAddCity(payload)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCity)