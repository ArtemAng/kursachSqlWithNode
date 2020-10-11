import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CityComboBox from '../comboBoxes/CityComboBox'
import { Button, Input } from '@material-ui/core'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/actions'

const AddCity = ({cities, onAddRoute}) => {
  const [cityStart, setcityStart] = useState('');
  const [cityFinish, setcityFinish] = useState('');

  const ChangeCityStartName = (value) => {
    setcityStart(value);
  }
  const ChangeCityFinishName = (value) => {
    setcityFinish(value);
  }

  return (
    <div className={'card'}>
      <CityComboBox cities = {cities} onCitySwitch = {ChangeCityStartName}/>
      <CityComboBox cities = {cities} onCitySwitch = {ChangeCityFinishName}/>
      <Button className='train-submit-btn add-train-item' onClick={() => onAddRoute({ cityStart: cityStart, cityFinish: cityFinish })} color='secondary' variant='contained'> submit</Button>
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
  const { onAddRoute } = bindActionCreators(actions, dispatch)
  return {
    onAddRoute: (payload) => onAddRoute(payload)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCity)